const AstrologerConsultation = require("../models/Astrologers/AstrologerConsultation");

class GlobalService{

 async allConsultationOfUser(userId,astrologerId){
  try {
    const data = await AstrologerConsultation.find({userId})

    if(!data){
        return({
          success:false,
          message:"did not found any wallet",
          error:false,
          errorCode:404,
        })
      }
      else{
        return({
            success:false,
            message:"all the consultation between astrologer and user",
            error:false,
            errorCode:200,
            data:data
          })
        }
      }catch (error){
        return({
            success:false,
            message:error.message,
            error:true,
            errorCode:500,
            data:""
        })
 }}}
 


module.exports = GlobalService;