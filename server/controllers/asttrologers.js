require("dotenv").config;
const AstrologerModel = require("../models/Astrologers/AstrologerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AvailableTiming = require("../models/Astrologers/AvailableTiming");
const AstrologerBookingModel = require("../models/Astrologers/AstrologerBookingModel");
const Usermodel = require("../models/users/Usermodel");
const TotalChatCallReviewRatingOfAstrologer = require("../models/Astrologers/TotalChatCallReviewRatingOfAstrologer");
const BillGenerator = require("../models/Astrologers/BillGenerator");

// register
exports.register = async (req, res) => {
  try {
    if (await AstrologerModel.findOne({ email: req.body.email })) {
      return res.status(401).json({
        success: false,
        message: "admin already exists",
      });
    } else {
      // generate password
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;

      // store in db
      const newUser = await new AstrologerModel(req.body);
      await newUser.save();
      res.status(200).json({
        success: true,
        message: newUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// // get charges this is get route
exports.getcharges = async (req, res) => {
  try {
    const { internationalBookCharges, nationalBookCharges } = req.user;
    const data = {
      internationalBookCharges,
      nationalBookCharges,
    };

    res.status(200).json({
      success: true,
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// charges
exports.charges = async (req, res) => {
  try {
    const { nationalBookCharges, internationalBookCharges } = req.body;
    if (internationalBookCharges || nationalBookCharges) {
      const admin = await AstrologerModel.findById(req.user._id);
      if (admin) {
        admin.internationalBookCharges = internationalBookCharges;
        admin.nationalBookCharges = nationalBookCharges;
      }
      await admin.save();
      return res.status(200).json({
        success: true,
        message: admin,
      });
    } else {
      return res.status(404).json({
        success: false,
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

// appointments
exports.appointments = async (req, res) => {
  try {
    if (!req.user._id) {
      return res.status(404).json({
        success: false,
        message: "admin id not found",
      });
    } else {
      const astrologerId = req.user._id;
      const astrologerBookings = await AstrologerBookingModel.findOne({
        astrologerId,
      }).populate("bookingsId.userId");

      if (astrologerBookings) {
        return res.status(200).json({
          success: true,
          message: astrologerBookings,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "no bookings found",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// logout
exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "You are logout",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get accountDetails this is get route
exports.getaccounts = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: req.user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// accounts
exports.accounts = async (req, res) => {
  try {
    const astroDetails = await AstrologerModel.findByIdAndUpdate(
      req.user._id,
      req.body
    );
    console.log(req.body);

    // actually above astrodetail is not gettingupdated after the req.body is updated data is saved in db then it is not sending the updated data into astrodetails it is sending old data
    const newData = await AstrologerModel.findByIdAndUpdate(req.user._id);
    if (!astroDetails) {
      return res.status(404).json({
        success: false,
        message: "this astrologer is not registerd",
      });
    }
    await astroDetails.save();
    res.status(200).json({
      success: true,
      message: newData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { newPassword, oldPassword } = req.body;
    if (await bcrypt.compare(oldPassword, req.user.password)) {
      // generate password
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(newPassword, salt);
      const astroDetails = await AstrologerModel.findById(req.user._id);
      astroDetails.password = hashedPassword;

      await astroDetails.save();
      res.status(200).json({
        success: true,
        message: "password changed successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "old password is wrong",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get profileDetails this is get route
exports.getprofileSettings = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: req.user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.profileSettings = async (req, res) => {
  // this profile route is same as accounts api
  try {
    const astroDetails = await AstrologerModel.findByIdAndUpdate(
      req.user._id,
      req.body
    );
    const newData = await AstrologerModel.findByIdAndUpdate(req.user._id);
    res.status(200).json({
      success: true,
      message: "successfully updated values",
      data: newData,
    });
    await astroDetails.save();
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

// we dont need to create here a different route to update value or get default value as we have covered in this.
exports.availableTimings = async (req, res) => {
  console.log("iamworking");
  try {
    const bookedBy = req.user._id;
    let availableTimingData = await AvailableTiming.find({ bookedBy });
    const { data } = req.body;
    console.log(data);
    if (data) {
      for (let i = 0; i < data.length; i++) {
        // this below upsert:true is creating new docs if not available so the whole code says that update old docs and if not present create the new onces
        await AvailableTiming.updateMany(
          { Day: data[i].Day, status: data[i].status, bookedBy: req.user._id },
          data[i],
          { upsert: true }
        );
      }

      //   message:await AvailableTiming.find({bookedBy}) is for updated data
      return res.status(200).json({
        success: true,
        message: await AvailableTiming.find({ bookedBy }),
      });
    } else {
      res.status(404).json({
        success: false,
        message: "data not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getavailableTimings = async (req, res) => {
  try {
    const bookedBy = req.user._id;
    let availableTimingData = await AvailableTiming.find({ bookedBy });
    if (!availableTimingData) {
      return res.status(200).json({
        success: false,
        message: "data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: availableTimingData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// for search button in appointments
exports.searchBookings = async (req, res) => {
  try {
    const { date } = req.body;
    let searchResults = [];
    if (!date) {
      return res.status(404).json({
        success: false,
        message: "please provide Date",
      });
    } else {
      const bookingsId = req.user._id;
      if (!bookingsId) {
        return res.status(404).json({
          success: false,
          message: "astrologer id is not present in req.user",
        });
      }
      const searchResultsBasedOnDate =
        await AstrologerBookingModel.findOne().populate("bookingsId.userId");
      if (!searchResultsBasedOnDate) {
        return res.status(200).json({
          success: true,
          message: "astrologer does not have any bookings",
        });
      } else {
        for (let i = 0; i < searchResultsBasedOnDate.bookingsId.length; i++) {
          if (date === searchResultsBasedOnDate.bookingsId[i].date) {
            searchResults.push(searchResultsBasedOnDate.bookingsId[i]);
          }
        }
      }
      return res.status(200).json({
        success: true,
        message: searchResults,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

exports.dashboard = async (req, res) => {
  try {
    if (!req?.user?._id) {
      return res.status(404).json({
        success: false,
        message: "admin id not found in req.user",
      });
    } else {
      const astrologerId = req.user._id;
      const data = await AstrologerBookingModel.findOne({ astrologerId });
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "data not found",
        });
      } else {
        const date = new Date();
        const currentDate = {
          day: String(date.getDate()).padStart(2, "0"),
          month: String(date.getMonth() + 1).padStart(2, "0"),
          year: date.getFullYear(),
        };
        let consultation = {
          totalConsultation: data?.bookingsId?.length,
          todayConsultation: 0,
          upcomingConsultation: 0,
        };

        for (let i = 0; i < data?.bookingsId?.length; i++) {
          const day = data?.bookingsId[i].date.slice(0, 2);
          const month = data?.bookingsId[i].date.slice(3, 5);
          const year = data?.bookingsId[i].date.slice(6, 10);

          if (
            day === currentDate.day &&
            month === currentDate.month &&
            year === JSON.stringify(currentDate.year)
          ) {
            consultation.todayConsultation = consultation.todayConsultation + 1;
          }

          if (
            day > currentDate.day ||
            month > currentDate.month ||
            year > JSON.stringify(currentDate.year)
          ) {
            consultation.upcomingConsultation =
              consultation.upcomingConsultation + 1;
          }
        }

        return res.status(200).json({
          success: true,
          message: consultation,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// this is for updating the total chat, call etc timing by other controllers so its a put route

// here i dont know as of now how will i get the astrologer id so i used req.user._id and also i dont know how many people have gave rating so how will i make avgRating
exports.chatCallReviewRatingOfAstrologerByUsers = async (req, res) => {
  try {
    const { userid, rating, review, chatHour, callHour } = req.body;
    // here userId means the person they have called or chated or the person made the review or rating

    if (rating || review || chatHour || callHour) {
      if (!userid) {
        return res.status(404).json({
          success: false,
          message: "user id not found",
        });
      }
      const Astrologerdetails = req.user._id;
      let data = await TotalChatCallReviewRatingOfAstrologer.findOne({
        Astrologerdetails,
      });
      if (rating) {
        if (!data) {
          console.log("iamworking");
          data = await TotalChatCallReviewRatingOfAstrologer.create([
            {
              totalRatings: [
                {
                  userdetails: userid,
                  rating,
                },
              ],
              Astrologerdetails: req.user._id,
            },
          ]);
        } else {
          let userRatingsAlreadyPresent = false;
          console.log(data?.totalRatings?.length);
          for (let i = 0; i < data?.totalRatings?.length; i++) {
            if (
              JSON.stringify(data?.totalRatings[i].userdetails) ===
              JSON.stringify(userid)
            ) {
              // data?.totalRatings[i].rating = rating;
              const temp = data?.totalRatings[i];
              temp.rating = rating;

              userRatingsAlreadyPresent = true;
            }
          }
          await data.save();
          // as userRatingsAlreadyPresent has [undefineded] when none of if works
          if (!userRatingsAlreadyPresent) {
            data?.totalRatings.push({
              userdetails: userid,
              rating,
            });
            await data.save();
          }
        }
      }
      if (review) {
        if (!data) {
          console.log("iamworking");
          data = await TotalChatCallReviewRatingOfAstrologer.create([
            {
              totalReviews: [
                {
                  userdetails: userid,
                  review,
                },
              ],
              Astrologerdetails: req.user._id,
            },
          ]);
        } else {
          let userReviewsAlreadyPresent = false;
          console.log(data?.totalReviews?.length);
          for (let i = 0; i < data?.totalReviews?.length; i++) {
            if (
              JSON.stringify(data?.totalReviews[i].userdetails) ===
              JSON.stringify(userid)
            ) {
              // data?.totalRatings[i].rating = rating;
              const temp = data?.totalReviews[i];
              temp.review = review;

              userReviewsAlreadyPresent = true;
            }
          }
          await data.save();
          // as userRatingsAlreadyPresent has [undefineded] when none of if works
          if (!userReviewsAlreadyPresent) {
            data?.totalReviews.push({
              userdetails: userid,
              rating,
            });
            await data.save();
          }
        }
      }
      if (chatHour) {
        if (!data) {
          console.log("iamworking");
          data = await TotalChatCallReviewRatingOfAstrologer.create([
            {
              totalChatHours: [
                {
                  userdetails: userid,
                  chatHour,
                },
              ],
              Astrologerdetails: req.user._id,
            },
          ]);
        } else {
          let userChatHoursAlreadyPresent = false;
          console.log(data?.totalChatHours?.length);
          for (let i = 0; i < data?.totalChatHours?.length; i++) {
            if (
              JSON.stringify(data?.totalChatHours[i].userdetails) ===
              JSON.stringify(userid)
            ) {
              // data?.totalRatings[i].rating = rating;
              const temp = data?.totalChatHours[i];
              temp.chatHour = chatHour;

              userChatHoursAlreadyPresent = true;
            }
          }
          await data.save();
          // as userRatingsAlreadyPresent has [undefineded] when none of if works
          if (!userChatHoursAlreadyPresent) {
            data?.totalChatHours.push({
              userdetails: userid,
              chatHour,
            });
            await data.save();
          }
        }
      }
      if (callHour) {
        if (!data) {
          console.log("iamworking");
          data = await TotalChatCallReviewRatingOfAstrologer.create([
            {
              totalCallHours: [
                {
                  userdetails: userid,
                  callHour,
                },
              ],
              Astrologerdetails: req.user._id,
            },
          ]);
        } else {
          let userCallHoursAlreadyPresent = false;
          console.log(data?.totalCallHours?.length);
          for (let i = 0; i < data?.totalCallHours?.length; i++) {
            if (
              JSON.stringify(data?.totalCallHours[i].userdetails) ===
              JSON.stringify(userid)
            ) {
              // data?.totalRatings[i].rating = rating;
              const temp = data?.totalCallHours[i];
              temp.callHour = callHour;

              userCallHoursAlreadyPresent = true;
            }
          }
          await data.save();
          // as userRatingsAlreadyPresent has [undefineded] when none of if works
          if (!userCallHoursAlreadyPresent) {
            data?.totalCallHours.push({
              userdetails: userid,
              chatHour,
            });
            await data.save();
          }
        }
      }

      return res.status(200).json({
        success: true,
        message: await TotalChatCallReviewRatingOfAstrologer.findOne({
          Astrologerdetails,
        }),
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Data not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// here still if user called two times an api each time new entry will be created, duplicated will not be deleted
exports.billGenerate = async (req, res) => {
  try {
    const { userid, chatTime, callTime, videoCallTime } = req.body;
    if (!userid || !req.user.id) {
      return res.status(404).json({
        success: false,
        message: "either user id or astrologer not found",
      });
    } else if (chatTime || callTime || videoCallTime) {
      let data;
      if (chatTime) {
        let amount = chatTime * 10;
        let method = "chat";
        data = await BillGenerator.create({
          astrologerdetails: req.user.id,
          userDetails: userid,
          amount,
          method,
        });
        await data.save();
      }
      if (callTime) {
        let amount = callTime * 10;
        let method = "call";
        data = await BillGenerator.create({
          astrologerdetails: req.user.id,
          userDetails: userid,
          amount,
          method,
        });
        await data.save();
      }
      if (videoCallTime) {
        let amount = videoCallTime * 10;
        let method = "videoCall";
        data = await BillGenerator.create({
          astrologerdetails: req.user.id,
          userDetails: userid,
          amount,
          method,
        });
        await data.save();
      }

      return res.status(200).json({
        success: true,
        message: data,
      });
    }
    return res.status(400).json({
      success: false,
      message: "please provide the duration of call or chat",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.callRecordings = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.videoRecordings = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
