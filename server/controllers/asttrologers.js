require("dotenv").config;
const AstrologerPersonalDetailModel = require("../models/Astrologers/AstrologerPersonalDetailModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AvailableTiming = require("../models/Astrologers/AvailableTiming");
const AstrologerBookingModel = require("../models/Astrologers/AstrologerConsultation");
const Usermodel = require("../models/users/Usermodel");
const AstrologerService = require("../services/astrologer.service");




// register
class AstrologerController {
  astrologerServiceInstance = new AstrologerService();
 

  getcharges = async (req, res) => {
    // console.log(astrologerServiceInstance);

    try {
      
        const data = await this.astrologerServiceInstance.charges(req, res);
        if (data) {
          res.status(200).json({
            success: true,
            message: data,
          });
        } else {
          res.status(404).json({
            success: true,
            message: "charges not found",
          });
        }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
 
  //update personal Detail
  personalDetailUpdate = async (req, res) => {
    try {
      const resp =
        await this.astrologerServiceInstance.findAstrologerByIdAndUpdate(
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
      const resp = await this.astrologerServiceInstance.findAstrologerById(
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

  // this is a get route
  getAvailableTiming = async (req, res) => {
    try {
      const astrologerID = req.params.id || req.user._id
      if (!astrologerID) {
        return res.status(404).json({
          success: false,
          message: "astrologerId not found"
        })
      }
      else {
        const data = await this.astrologerServiceInstance.getAstrologerAvailableTiming(astrologerID)

        // this handle the error caused in try catch in service
        if (data?.error) {
          return res.status(500).json({
            data
          })
        }


        if (data?.success) {

          // we are doing this because i need to convert object of object to array of object so that it could be handle better in frontend
          let daysArray = Object.entries(data?.data?.days).map(([key, value]) => {
            return { day: key, data: value };
          });


          return res.status(data?.errorCode || 200).json({
            success: data?.success,
            data: daysArray,

          })
        }
        else {
          return res.status(data?.errorCode || 500).json({
            success: data?.success,
            message: data?.message,
            data: data?.data,
          })
        }
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error
      })
    }
  }

  // this is too set available timing
  setAvailableTiming = async (req, res) => {
    try {
      const { newData } = req.body;
      console.log(newData);

      const astrologerID = req.user._id
      console.log("1");
      if (!newData) {
        return res.status(404).json({
          success: false,
          message: "please send some data"
        })
      }
      else {
        const data = await this.astrologerServiceInstance.setAvailableTiming(astrologerID, newData)



        // this is the error caused in try catch of the service
        if (data?.error) {
          console.log("this is error from service catch but handled in controller");
          res.status(500).json(data)
        }
        else {
          res.status(data?.errorCode).json(data)
        }

      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: error
      })
    }
  }

  // this is get route for all astrologers
  getAllAstrologers = async (req, res) => {
    try {
      const data = await this.astrologerServiceInstance.getAllAstrologers()
      if (data?.error) {
        return res.status(data?.errorCode).json(data)
      }
      else {

        return res.status(data?.errorCode).json(data)
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      })
    }
  }
  
}
module.exports = AstrologerController;
  

  
  // its underConstruction
  //   availableTimings = async (req, res) => {
  //   console.log("iamworking");
  //   try {
  //     const bookedBy = req.user._id;
  //     let availableTimingData = await AvailableTiming.find({ bookedBy });
  //     const { data } = req.body;
  //     console.log(data);
  //     if (data) {
  //       for (let i = 0; i < data.length; i++) {
  //         // this below upsert:true is creating new docs if not available so the whole code says that update old docs and if not present create the new onces
  //         await AvailableTiming.updateMany(
  //           { Day: data[i].Day, status: data[i].status, bookedBy: req.user._id },
  //           data[i],
  //           { upsert: true }
  //         );
  //       }

  //       //   message:await AvailableTiming.find({bookedBy}) is for updated data
  //       return res.status(200).json({
  //         success: true,
  //         message: await AvailableTiming.find({ bookedBy }),
  //       });
  //     } else {
  //       res.status(404).json({
  //         success: false,
  //         message: "data not found",
  //       });
  //     }
  //   } catch (error) {
  //     res.status(500).json({
  //       success: false,
  //       message: error.message,
  //     });
  //   }
  // };




// // logout
// exports.logout = async (req, res) => {
//   try {
//     res.clearCookie("token");
//     res.status(200).json({
//       success: true,
//       message: "You are logout",
//     });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// exports.changePassword = async (req, res) => {
//   try {
//     const { newPassword, oldPassword } = req.body;
//     if (await bcrypt.compare(oldPassword, req.user.password)) {
//       // generate password
//       const salt = await bcrypt.genSalt(10);

//       const hashedPassword = await bcrypt.hash(newPassword, salt);
//       const astroDetails = await AstrologerModel.findById(req.user._id);
//       astroDetails.password = hashedPassword;

//       await astroDetails.save();
//       res.status(200).json({
//         success: true,
//         message: "password changed successfully",
//       });
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "old password is wrong",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // we dont need to create here a different route to update value or get default value as we have covered in this.

// exports.getavailableTimings = async (req, res) => {
//   try {
//     const bookedBy = req.user._id;
//     let availableTimingData = await AvailableTiming.find({ bookedBy });
//     if (!availableTimingData) {
//       return res.status(200).json({
//         success: false,
//         message: "data not found",
//       });
//     }
//     return res.status(200).json({
//       success: true,
//       message: availableTimingData,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // for search button in appointments
// exports.searchBookings = async (req, res) => {
//   try {
//     const { date } = req.body;
//     let searchResults = [];
//     if (!date) {
//       return res.status(404).json({
//         success: false,
//         message: "please provide Date",
//       });
//     } else {
//       const bookingsId = req.user._id;
//       if (!bookingsId) {
//         return res.status(404).json({
//           success: false,
//           message: "astrologer id is not present in req.user",
//         });
//       }
//       const searchResultsBasedOnDate =
//         await AstrologerBookingModel.findOne().populate("bookingsId.userId");
//       if (!searchResultsBasedOnDate) {
//         return res.status(200).json({
//           success: true,
//           message: "astrologer does not have any bookings",
//         });
//       } else {
//         for (let i = 0; i < searchResultsBasedOnDate.bookingsId.length; i++) {
//           if (date === searchResultsBasedOnDate.bookingsId[i].date) {
//             searchResults.push(searchResultsBasedOnDate.bookingsId[i]);
//           }
//         }
//       }
//       return res.status(200).json({
//         success: true,
//         message: searchResults,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: true,
//       message: error.message,
//     });
//   }
// };

// exports.dashboard = async (req, res) => {
//   try {
//     if (!req?.user?._id) {
//       return res.status(404).json({
//         success: false,
//         message: "admin id not found in req.user",
//       });
//     } else {
//       const astrologerId = req.user._id;
//       const data = await AstrologerBookingModel.findOne({ astrologerId });
//       if (!data) {
//         return res.status(404).json({
//           success: false,
//           message: "data not found",
//         });
//       } else {
//         const date = new Date();
//         const currentDate = {
//           day: String(date.getDate()).padStart(2, "0"),
//           month: String(date.getMonth() + 1).padStart(2, "0"),
//           year: date.getFullYear(),
//         };
//         let consultation = {
//           totalConsultation: data?.bookingsId?.length,
//           todayConsultation: 0,
//           upcomingConsultation: 0,
//         };

//         for (let i = 0; i < data?.bookingsId?.length; i++) {
//           const day = data?.bookingsId[i].date.slice(0, 2);
//           const month = data?.bookingsId[i].date.slice(3, 5);
//           const year = data?.bookingsId[i].date.slice(6, 10);

//           if (
//             day === currentDate.day &&
//             month === currentDate.month &&
//             year === JSON.stringify(currentDate.year)
//           ) {
//             consultation.todayConsultation = consultation.todayConsultation + 1;
//           }

//           if (
//             day > currentDate.day ||
//             month > currentDate.month ||
//             year > JSON.stringify(currentDate.year)
//           ) {
//             consultation.upcomingConsultation =
//               consultation.upcomingConsultation + 1;
//           }
//         }

//         return res.status(200).json({
//           success: true,
//           message: consultation,
//         });
//       }
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // this is for updating the total chat, call etc timing by other controllers so its a put route

// // here i dont know as of now how will i get the astrologer id so i used req.user._id and also i dont know how many people have gave rating so how will i make avgRating
// // exports.chatCallReviewRatingOfAstrologerByUsers = async (req, res) => {
// //   try {
// //     const { userid, rating, review, chatHour, callHour } = req.body;
// //     // here userId means the person they have called or chated or the person made the review or rating

// //     if (rating || review || chatHour || callHour) {
// //       if (!userid) {
// //         return res.status(404).json({
// //           success: false,
// //           message: "user id not found",
// //         });
// //       }
// //       const Astrologerdetails = req.user._id;
// //       let data = await TotalChatCallReviewRatingOfAstrologer.findOne({
// //         Astrologerdetails,
// //       });
// //       if (rating) {
// //         if (!data) {
// //           console.log("iamworking");
// //           data = await TotalChatCallReviewRatingOfAstrologer.create([
// //             {
// //               totalRatings: [
// //                 {
// //                   userdetails: userid,
// //                   rating,
// //                 },
// //               ],
// //               Astrologerdetails: req.user._id,
// //             },
// //           ]);
// //         } else {
// //           let userRatingsAlreadyPresent = false;
// //           console.log(data?.totalRatings?.length);
// //           for (let i = 0; i < data?.totalRatings?.length; i++) {
// //             if (
// //               JSON.stringify(data?.totalRatings[i].userdetails) ===
// //               JSON.stringify(userid)
// //             ) {
// //               // data?.totalRatings[i].rating = rating;
// //               const temp = data?.totalRatings[i];
// //               temp.rating = rating;

// //               userRatingsAlreadyPresent = true;
// //             }
// //           }
// //           await data.save();
// //           // as userRatingsAlreadyPresent has [undefineded] when none of if works
// //           if (!userRatingsAlreadyPresent) {
// //             data?.totalRatings.push({
// //               userdetails: userid,
// //               rating,
// //             });
// //             await data.save();
// //           }
// //         }
// //       }
// //       if (review) {
// //         if (!data) {
// //           console.log("iamworking");
// //           data = await TotalChatCallReviewRatingOfAstrologer.create([
// //             {
// //               totalReviews: [
// //                 {
// //                   userdetails: userid,
// //                   review,
// //                 },
// //               ],
// //               Astrologerdetails: req.user._id,
// //             },
// //           ]);
// //         } else {
// //           let userReviewsAlreadyPresent = false;
// //           console.log(data?.totalReviews?.length);
// //           for (let i = 0; i < data?.totalReviews?.length; i++) {
// //             if (
// //               JSON.stringify(data?.totalReviews[i].userdetails) ===
// //               JSON.stringify(userid)
// //             ) {
// //               // data?.totalRatings[i].rating = rating;
// //               const temp = data?.totalReviews[i];
// //               temp.review = review;

// //               userReviewsAlreadyPresent = true;
// //             }
// //           }
// //           await data.save();
// //           // as userRatingsAlreadyPresent has [undefineded] when none of if works
// //           if (!userReviewsAlreadyPresent) {
// //             data?.totalReviews.push({
// //               userdetails: userid,
// //               rating,
// //             });
// //             await data.save();
// //           }
// //         }
// //       }
// //       if (chatHour) {
// //         if (!data) {
// //           console.log("iamworking");
// //           data = await TotalChatCallReviewRatingOfAstrologer.create([
// //             {
// //               totalChatHours: [
// //                 {
// //                   userdetails: userid,
// //                   chatHour,
// //                 },
// //               ],
// //               Astrologerdetails: req.user._id,
// //             },
// //           ]);
// //         } else {
// //           let userChatHoursAlreadyPresent = false;
// //           console.log(data?.totalChatHours?.length);
// //           for (let i = 0; i < data?.totalChatHours?.length; i++) {
// //             if (
// //               JSON.stringify(data?.totalChatHours[i].userdetails) ===
// //               JSON.stringify(userid)
// //             ) {
// //               // data?.totalRatings[i].rating = rating;
// //               const temp = data?.totalChatHours[i];
// //               temp.chatHour = chatHour;

// //               userChatHoursAlreadyPresent = true;
// //             }
// //           }
// //           await data.save();
// //           // as userRatingsAlreadyPresent has [undefineded] when none of if works
// //           if (!userChatHoursAlreadyPresent) {
// //             data?.totalChatHours.push({
// //               userdetails: userid,
// //               chatHour,
// //             });
// //             await data.save();
// //           }
// //         }
// //       }
// //       if (callHour) {
// //         if (!data) {
// //           console.log("iamworking");
// //           data = await TotalChatCallReviewRatingOfAstrologer.create([
// //             {
// //               totalCallHours: [
// //                 {
// //                   userdetails: userid,
// //                   callHour,
// //                 },
// //               ],
// //               Astrologerdetails: req.user._id,
// //             },
// //           ]);
// //         } else {
// //           let userCallHoursAlreadyPresent = false;
// //           console.log(data?.totalCallHours?.length);
// //           for (let i = 0; i < data?.totalCallHours?.length; i++) {
// //             if (
// //               JSON.stringify(data?.totalCallHours[i].userdetails) ===
// //               JSON.stringify(userid)
// //             ) {
// //               // data?.totalRatings[i].rating = rating;
// //               const temp = data?.totalCallHours[i];
// //               temp.callHour = callHour;

// //               userCallHoursAlreadyPresent = true;
// //             }
// //           }
// //           await data.save();
// //           // as userRatingsAlreadyPresent has [undefineded] when none of if works
// //           if (!userCallHoursAlreadyPresent) {
// //             data?.totalCallHours.push({
// //               userdetails: userid,
// //               chatHour,
// //             });
// //             await data.save();
// //           }
// //         }
// //       }

// //       return res.status(200).json({
// //         success: true,
// //         message: await TotalChatCallReviewRatingOfAstrologer.findOne({
// //           Astrologerdetails,
// //         }),
// //       });
// //     } else {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Data not Found",
// //       });
// //     }
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // here still if user called two times an api each time new entry will be created, duplicated will not be deleted
// // exports.billGenerate = async (req, res) => {
// //   try {
// //     const { userid, chatTime, callTime, videoCallTime } = req.body;
// //     if (!userid || !req.user.id) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "either user id or astrologer not found",
// //       });
// //     } else if (chatTime || callTime || videoCallTime) {
// //       let data;
// //       if (chatTime) {
// //         let amount = chatTime * 10;
// //         let method = "chat";
// //         data = await BillGenerator.create({
// //           astrologerdetails: req.user.id,
// //           userDetails: userid,
// //           amount,
// //           method,
// //         });
// //         await data.save();
// //       }
// //       if (callTime) {
// //         let amount = callTime * 10;
// //         let method = "call";
// //         data = await BillGenerator.create({
// //           astrologerdetails: req.user.id,
// //           userDetails: userid,
// //           amount,
// //           method,
// //         });
// //         await data.save();
// //       }
// //       if (videoCallTime) {
// //         let amount = videoCallTime * 10;
// //         let method = "videoCall";
// //         data = await BillGenerator.create({
// //           astrologerdetails: req.user.id,
// //           userDetails: userid,
// //           amount,
// //           method,
// //         });
// //         await data.save();
// //       }

// //       return res.status(200).json({
// //         success: true,
// //         message: data,
// //       });
// //     }
// //     return res.status(400).json({
// //       success: false,
// //       message: "please provide the duration of call or chat",
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// exports.callRecordings = async (req, res) => {
//   try {
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// exports.videoRecordings = async (req, res) => {
//   try {
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
