const AstrologerModel = require("../models/Astrologers/AstrologerModel");
const Usermodel = require("../models/users/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



class AuthService {
// in check details if user or astrologer is already present then we will not send the data to controller we will do diect response to clint from here
   async checkdetails(data,res) {
      try {
         const { email, role } = data;
         if(!role){
            return res.status(404).json({
               success:false,
               message:"role does not found"
            })
         }
         if (role === "user") {
          
            const userAlreadyExist = await Usermodel.find({ email })     
          
          if(!userAlreadyExist.length){
            return "user not present"
          }
          else{
            return res.status(400).json({
               success:false,
               message:"user already registerd",
               data:userAlreadyExist
            })
          }
         }

         else {
            const astologerAlreadyExist = await AstrologerModel.find({ email })
            console.log("this is sparta",astologerAlreadyExist);
            if(!astologerAlreadyExist.length){
               return "astrologer not present"
             }
             else{  
               return res.status(400).json({
                  success:false,
                  message:"astrologer already registerd",
                  data:astologerAlreadyExist
               })
             }
         }
      } catch (error) {
        res.status(500).json({
         success:false,
         message:error
        })
      }
   }
   async createNewUser(data,res) {
      try {
         // generate password
         const salt = await bcrypt.genSalt(10);

         const hashedPassword = await bcrypt.hash(data.password, salt);
         data.password = hashedPassword;
        console.log(hashedPassword);
         // store in db
         const newUser = await new Usermodel(data);
         console.log(newUser);
          await newUser.save();
         return newUser;
      } catch (error) {
         res.status(500).json({
            success:false,
            message:error
         })
      }
   }
   async createNewAstrologer(data,res) {
      try {
         // generate password
         const salt = await bcrypt.genSalt(10);

         const hashedPassword = await bcrypt.hash(data.password, salt);
         data.password = hashedPassword;

         // store in db
         const newUser = await new AstrologerModel(data);
          await newUser.save();
         return newUser;
      } catch (error) {
         res.status(500).json({
            success:false,
            message:error
         })
      }
   }
}


module.exports = AuthService