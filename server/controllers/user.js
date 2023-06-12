const AstrologerBookingModel = require("../models/Astrologers/AstrologerConsultation");
const mongoose = require('mongoose');
const UserService = require("../services/user.service");


class UserController{
    userServiceInstance = new UserService();
   
     //update personal Detail
  personalDetailUpdate = async (req, res) => {
    try {
        if(!req.body || Object.keys(req.body).length === 0){
            return res.status(404).json({
                success:false,
                message:"please provide some data"
            })
        }
       
      const resp =
        await this.userServiceInstance.findUserByIdAndUpdate(
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
  
      const resp = await this.userServiceInstance.findUserById(
        req.user._id
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
}


module.exports = UserController;



// bookings by user
exports.booking = async (req, res) => {
    try {
    const { date, time } = req.body
    let {astrologerId} = req.query;
    astrologerId = new mongoose.Types.ObjectId(astrologerId);
  
    const userId = req?.user?._id 
    if(!userId){
        return res.status(404).json({
            success:false,
            message:"user id not found may be req.user is empty"
        })
    }
    
    if (!date || !time || !astrologerId) {
        return res.status(404).json({
            success: false,
            message: "please provide all date,time,AstrologerId"
        })
    }
    else {

       //here i have use find as by mistake there could be many data of single astrologer bookings so its giving me data as array but if i have used find it will give me in obj 
        const booking = await AstrologerBookingModel.find({astrologerId})
        // console.log("booking",booking,booking.length,userId);
        if (booking.length === 0) {
            const data = await AstrologerBookingModel.create({
                astrologerId,
                bookingsId:[
                    { userId, date, time }
                ],
            })
          await data.save();  
        }
        else{
            // await AstrologerBookingModel.findOneAndUpdate({astrologerId,bookingsId:[{userId,date,time}]}, {upsert: true});
            const filter = {astrologerId,
                bookingsId:[{
                    userId
            }]}
            const update =  {date,time}
            await AstrologerBookingModel.findOneAndUpdate(filter, update);


        // to check if user should not make another appointment on same date and time
        for (let i = 0; i < booking[0].bookingsId.length; i++) {
                if(booking[0].bookingsId[i].date ===  date && booking[0].bookingsId[i].time === time){
                    
                    return res.status(400).json({
                        success:false,
                        message:"their is an appointment on this time and date"
                    })
                }
            
        }
       await booking[0]?.bookingsId?.push({
        userId,
        time,
        date
      })
      await booking[0].save().catch(err=>console.log(err))            
        }
        return res.status(200).json({
            success:true,
            message: await AstrologerBookingModel.find({astrologerId})
        })
    }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

