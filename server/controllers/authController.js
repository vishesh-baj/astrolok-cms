require("dotenv").config;



//importing class of auth Service 
const AuthService = require("../services/auth.service")


class AuthController {
  authSeriviceInstance= new AuthService();
  register = async(req, res) => {
    try {
      // here this keyword will point to authService
      // console.log("iam this",this);
      const response = await this.authSeriviceInstance.checkdetails(req.body,res)
    
       if(response === "user not present"){
        const newUserCreated = await this.authSeriviceInstance.createNewUser(req.body,res)
        if(newUserCreated){
          return res.status(200).json({
            success:true,
            message:newUserCreated
          })
        }
        else{
          return res.status(404).json({
            success:false,
            message:"user not created"
          })
        }
      }
      else if(response === "astrologer not present"){
        const newAstrologerCreated = await this.authSeriviceInstance.createNewAstrologer(req.body,res)
        if(newAstrologerCreated){
          return res.status(200).json({
            success:true,
            message:newAstrologerCreated
          })
        }
        else{
          return res.status(404).json({
            success:false,
            message:"astrologer not created"
          })
        }

      }
    } catch (error) {
      res.status(400).send(error.message)
    }
  }


}



module.exports = AuthController