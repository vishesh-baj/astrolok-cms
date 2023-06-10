const Usermodel = require("../models/users/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AstrologerModel = require("../models/Astrologers/AstrologerModel");
const AstrologerBookingModel = require("../models/Astrologers/AstrologerConsultation");
const mongoose = require('mongoose');



exports.register = async (req, res) => {
    try {
        if (!req.body.name || !req.body.password || !req.body.email || !req.body.gender || !req.body.birthTime || !req.body.birthCountry || !req.body.birthCity || !req.body.birthDate || !req.body.mobile) {
            return res.status(404).json({
                success: false,
                message: "some fields are missing",

            })
        }
        else if (await Usermodel.findOne({ email: req.body.email })) {
            return res.status(401).json({
                success: false,
                message: "user already exists"
            })
        }
        else {
            // generate password
            const salt = await bcrypt.genSalt(10);

            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;

            // store in db
            const newUser = await new Usermodel(req.body);
            await newUser.save();
            res.status(200).json({
                success: true,
                message: newUser,
            });
        }

    } catch (error) {
       return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}




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