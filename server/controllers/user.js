const AstrologerBookingModel = require("../models/Astrologers/AstrologerConsultation");
const mongoose = require("mongoose");
const UserService = require("../services/user.service");
const AstrologerService = require("../services/astrologer.service");

class UserController {
  userServiceInstance = new UserService();
  astrologerServiceInstance = new AstrologerService();
  //update personal Detail
  personalDetailUpdate = async (req, res) => {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(404).json({
          success: false,
          message: "please provide some data",
        });
      }

      const resp = await this.userServiceInstance.findUserByIdAndUpdate(
        req.user._id,
        req.body
      );
      console.log(resp);
      if (resp?.success === true) {
        return res.status(200).json({
          success: true,
          message: resp,
        });
      } else {
        return res.status(resp?.errorCode).json({
          success: false,
          message: resp,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error,
      });
    }
  };

  //get personal Detail this is get route
  getpersonalDetail = async (req, res) => {
    try {
      const resp = await this.userServiceInstance.findUserById(req.user._id);
      if (resp?.success === true) {
        return res.status(200).json({
          success: true,
          message: resp,
        });
      } else {
        return res.status(resp?.errorCode).json({
          success: false,
          message: resp,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error,
      });
    }
  };

  getAstrologerAllConsultation = async (req, res) => {
    try {
      const { astrologerId } = req.query;
      if (!astrologerId) {
        return res.status(404).json({
          success: false,
          message: "Please provide astrologerId",
          error: false,
        });
      } else {
        const consultations =
          await this.astrologerServiceInstance.getAllConsultation(astrologerId);

        if (consultations?.error) {
          return res.status(consultations?.errorCode).json(consultations);
        } else if (consultations?.success) {
          return res.status(200).send(consultations);
        }
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  bookAstrologerForConsultation = async (req, res) => {
    try {
      const { astrologerId } = req.query;
      const { bookingDetails } = req.body;
      const createdNewBooking =
        await this.astrologerServiceInstance.createNewBooking(
          astrologerId,
          req.user._id,
          bookingDetails
        );

      if (createdNewBooking?.error) {
        return res.status(createdNewBooking.errorCode).json(createdNewBooking);
      } else {
        if (createdNewBooking.success) {
          return res.status(200).send(createdNewBooking);
        }
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  };

  availableTimingOfDate = async (req, res) => {
    try {
      const { astrologerId } = req.query;
      const { date } = req.body;
      const arr = [];

      if (!date || !astrologerId) {
        return res.status(404).json({
          success: false,
          message: "date  or astrologer id not found",
        });
      }
      //day of date of booking
      const day = await this.astrologerServiceInstance.dayFromDate(date);

      if (day?.error) {
        return res.status(day?.errorCode).json({ day });
      } else {
        const consultations =
          await this.astrologerServiceInstance.getAllConsultation(astrologerId);

        if (consultations?.error) {
          return res.status(consultations?.errorCode).json(consultations);
        } 
        
        else {
          for (let i = 0; i < consultations?.data?.length; i++) {
            if (consultations?.data[i].bookingdate === date) {
              arr.push(consultations?.data[i].bookingtime);
            }
          }

          const astrologerAvailableTiming =
            await this.astrologerServiceInstance.getAstrologerAvailableTiming(
              astrologerId
            );

          if (astrologerAvailableTiming?.error) {
            return res
              .status(astrologerAvailableTiming.errorCode)
              .json({ astrologerAvailableTiming });
          } else {
            const daysOfAstrologer = astrologerAvailableTiming?.data?.days;

            const temp = Object.keys(daysOfAstrologer);
            let daystoSelected;
            temp.map((it) => {
              if (it === day?.data?.toLowerCase()) {
                daystoSelected = day?.data;
              }
            });

            const astrologerDetailsForCreatingSlots =
              daysOfAstrologer[daystoSelected?.toLowerCase()];

            // console.log(astrologerDetailsForCreatingSlots, "this is sparta");

            const slotsOFOrginalAstrologerTiming =
              await this.astrologerServiceInstance.getServiceScheduleSlots(
                30,
                astrologerDetailsForCreatingSlots.startTime,
                astrologerDetailsForCreatingSlots.endTime
              );

            const slotsOFBreak1_OfAstrologer =
              await this.astrologerServiceInstance.getServiceScheduleSlots(
                30,
                astrologerDetailsForCreatingSlots.breakOneStart,
                astrologerDetailsForCreatingSlots.breakOneEnd
              );

            const slotsOFBreak2_OfAstrologer =
              await this.astrologerServiceInstance.getServiceScheduleSlots(
                30,
                astrologerDetailsForCreatingSlots.breakTwoStart,
                astrologerDetailsForCreatingSlots.breakTwoEnd
              );

            let filterArray = await this.astrologerServiceInstance.filterArray(
              slotsOFOrginalAstrologerTiming?.data,
              slotsOFBreak1_OfAstrologer?.data
            );
              
              if(filterArray?.error){
                return res.status(filterArray?.errorCode).json({ filterArray });
              }

            filterArray = await this.astrologerServiceInstance.filterArray(
              filterArray?.data,
              slotsOFBreak2_OfAstrologer?.data
            );
            if(filterArray?.error){
              return res.status(filterArray?.errorCode).json({ filterArray });
            }


            filterArray = await this.astrologerServiceInstance.filterArray(
              filterArray?.data,
              arr
            );

            return res.status(filterArray?.errorCode).json({ filterArray });
          }
        }
        //  to find day in astrologer available timing
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

  }


  getWallet = async (req,res)=>{
    try {
       
  
      const walletData = await this.userServiceInstance.getWalletData(req.user._id);

     return res.status(walletData?.errorCode).json({walletData})
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success:false,
        message:error.message,
        error:true,
        errorCode:500,
      })
    }

    
  }

  createWallet = async(req,res)=>{
    try {
      const newWallet = await this.userServiceInstance.createNewWallet(req.user._id)

      return res.status(newWallet.errorCode).json({newWallet})
    } catch (error) {
      return res.status(500).json({
        success:false,
        error:true,
        message:error.message,
        data:""
      })
    }
  }

  addMoneyTowallet = async(req,res)=>{
   try {
    const {amount} = req.body;
    if(!amount){
      return res.status(404).json({
        success:false,
        message:"please provide the amount",
        error:false,
      })
    }
    else{
      const newAmount = await this.userServiceInstance.addMoneyToWallet(req.user._id,amount)

      return res.status(newAmount.errorCode).json({newAmount})
    }
   } catch (error) {
    return res.status(500).json({
      success:false,
      message:error.message
    })
   }
  }

  
 

}

module.exports = UserController;

// // bookings by user
// exports.booking = async (req, res) => {
//   try {
//     const { date, time } = req.body
//     let { astrologerId } = req.query;
//     astrologerId = new mongoose.Types.ObjectId(astrologerId);

//     const userId = req?.user?._id
//     if (!userId) {
//       return res.status(404).json({
//         success: false,
//         message: "user id not found may be req.user is empty"
//       })
//     }

//     if (!date || !time || !astrologerId) {
//       return res.status(404).json({
//         success: false,
//         message: "please provide all date,time,AstrologerId"
//       })
//     }
//     else {

//       //here i have use find as by mistake there could be many data of single astrologer bookings so its giving me data as array but if i have used find it will give me in obj
//       const booking = await AstrologerBookingModel.find({ astrologerId })
//       // console.log("booking",booking,booking.length,userId);
//       if (booking.length === 0) {
//         const data = await AstrologerBookingModel.create({
//           astrologerId,
//           bookingsId: [
//             { userId, date, time }
//           ],
//         })
//         await data.save();
//       }
//       else {
//         // await AstrologerBookingModel.findOneAndUpdate({astrologerId,bookingsId:[{userId,date,time}]}, {upsert: true});
//         const filter = {
//           astrologerId,
//           bookingsId: [{
//             userId
//           }]
//         }
//         const update = { date, time }
//         await AstrologerBookingModel.findOneAndUpdate(filter, update);

//         // to check if user should not make another appointment on same date and time
//         for (let i = 0; i < booking[0].bookingsId.length; i++) {
//           if (booking[0].bookingsId[i].date === date && booking[0].bookingsId[i].time === time) {

//             return res.status(400).json({
//               success: false,
//               message: "their is an appointment on this time and date"
//             })
//           }

//         }
//         await booking[0]?.bookingsId?.push({
//           userId,
//           time,
//           date
//         })
//         await booking[0].save().catch(err => console.log(err))
//       }
//       return res.status(200).json({
//         success: true,
//         message: await AstrologerBookingModel.find({ astrologerId })
//       })
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }
