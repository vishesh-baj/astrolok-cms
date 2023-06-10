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

  login = async(req,res)=>{
    console.log("iamworking");
     try {
        const {email ,password} = req.body
        if(!email || !password){
          return res.status(404).json({
           success:false,
           message:"email or password is missing"
          })
        }
        else{

          // findUserbyEmail this is not mongo query it is fn in services
        
          const userExist = await this.authSeriviceInstance.findUserbyEmail(email,res);
          if(userExist){
            await this.authSeriviceInstance.login(password, userExist,res);
          }

          // as it is not user we will check for astrologer
          else{
            const astrologerExist = await this.authSeriviceInstance.findAstrologerByEmail(email,res)
            if(astrologerExist){
              await this.authSeriviceInstance.login(password, astrologerExist,res);
            }

            // as it is not astrologer we will check for admin
            const adminExist = await this.authSeriviceInstance.findAdminByEmail(email,res)
            if(adminExist){
              await this.authSeriviceInstance.login(password, astrologerExist,res);
            }
            else{
              return res.status(404).json({
                success:false,
                message:"invalid user"
              })
            }
          }

        }
     } catch (error) {
      res.status(500).json({
        success:false,
        message:error
      })
     } 
  }


}



module.exports = AuthController