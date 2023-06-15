const AstrologerConsultation = require("../models/Astrologers/AstrologerConsultation");
const purchaseHistory = require("../models/common/purchaseHistory");
const ratingsReview = require("../models/users/ratingsReview");

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
            success:true,
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
 }}

 async createPurchaseHistory(data) {
    try {
      const { transactionId, amount } = data
      console.log(transactionId, "dasdadasdasdasdas",amount);
      if (!transactionId || !amount) {
        return ({
          success: false,
          message: "transactionId or amount not found",
          error: false,
          errorCode: 404,
          data: ""
        })
      }
      else {
        const purchaseAlreadyMade = await purchaseHistory.findOne({ transactionId })
  
        if (purchaseAlreadyMade) {
          return ({
            success: false,
            error: false,
            errorCode: 400,
            message: "purchase failed as transaction id already present in db",
            data: purchaseAlreadyMade
          })
        }
        else {
          const newPurchaseCreated = await purchaseHistory.create(data)
  
            await newPurchaseCreated.save();

          console.log(newPurchaseCreated);
  
          await newPurchaseCreated.save()
          const createdEntryData = await purchaseHistory.findOne({ transactionId })
 
          if(!createdEntryData){
           return ({
             success: false,
             error: false,
             message: "Transaction is not created",
             errorCode: 400,
             data:""
           })
          }
 
          return ({
            success: true,
            error: false,
            message: createdEntryData?.status,
            errorCode: 200,
            data: createdEntryData
          })
        }
      }
 
    } catch (error) {
    return({
      success: false,
      error: true,
      message: error.message,
      errorCode: 500,
      data: ""
    })      
    }    

}

async getRatingAndReviewByUser(userId) {
  try {
    const alreadyRatingAndReview = await ratingsReview.findOne({userId})
  

    if (alreadyRatingAndReview) {
      return ({
        success: true,
        error: false,
        errorCode: 200,
        message: "Found rating and review",
        data: alreadyRatingAndReview
      })
    }
    else {
      return ({
        success: false,
        error: false,
        errorCode: 404,
        message: "Not found rating and review",
        data: ""
      })
    }
  } catch (error) {
    return ({
      success: false,
      error: true,
      message: error.message,
      errorCode: 500,
      data: ""
    })
  }
}


async getRatingAndReviewByAstrologerId(astrologerId) {
  try {
    const alreadyRatingAndReview = await ratingsReview.findOne({astrologerId})
  

    if (alreadyRatingAndReview) {
      return ({
        success: true,
        error: false,
        errorCode: 200,
        message: "Found rating and review",
        data: alreadyRatingAndReview
      })
    }
    else {
      return ({
        success: false,
        error: false,
        errorCode: 404,
        message: "Not found rating and review",
        data: ""
      })
    }
  } catch (error) {
    return ({
      success: false,
      error: true,
      message: error.message,
      errorCode: 500,
      data: ""
    })
  }
}
}
 



module.exports = GlobalService;