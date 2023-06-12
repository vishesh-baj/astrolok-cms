const AstrologerPersonalDetailModel = require("../models/Astrologers/AstrologerPersonalDetailModel");
const AvailableTiming = require("../models/Astrologers/AvailableTiming");

class AstrologerService {
  async charges(req, res) {
    const { internationalBookCharges, nationalBookCharges } = req.user;
    const data = {
      internationalBookCharges,
      nationalBookCharges,
    };
    if (data) {
      return data;
    } else {
      return false;
    }
  }

  async findAstrologerByIdAndUpdate(id, data) {
    try {
      if (!id) {
        return {
          success: false,
          errorCode: 404,
          message: "id did not found",
        };
      } else {
        const astroDetails =
          await AstrologerPersonalDetailModel.findByIdAndUpdate(id, data);
        if (!astroDetails) {
          return {
            success: false,
            errorCode: 404,
            message: "astrologer not found",
          };
        } else {
          return {
            success: true,
            data: astroDetails,
          };
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error?.message,
      };
    }
  }

  async findAstrologerById(id) {
    try {
      if (!id) {
        return {
          success: false,
          errorCode: 404,
          message: "id did not found",
        };
      } else {
        const astroDetails = await AstrologerPersonalDetailModel.findById(id);
        if (!astroDetails) {
          return {
            success: false,
            errorCode: 404,
            message: "astrologer not found",
          };
        } else {
          return {
            success: true,
            data: astroDetails,
          };
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error?.message,
      };
    }
  }

  async getAstrologerAvailableTiming(astrologerID) {

    try {
      const data = await AvailableTiming.findOne({ astrologerID })


      if (data) {
        return ({
          success: true,
          data: data,
          message: "",
          errorCode: 200
        })
      }
      else {
        return ({
          success: false,
          message: "no data found",
          errorCode: 404
        })
      }
    } catch (error) {
      return ({
        success: false,
        message: "",
        errorCode: 500,
        error: error?.message
      })
    }
  }

  async setAvailableTiming(astrologerID, days) {
    console.log("3");

    try {
      const data = await AvailableTiming.findOne({ astrologerID })
   
       
      if (!data) {
        console.log("iam creating");
        const resp = await AvailableTiming.create({
          astrologerID,
          days
        })
       
       await resp.save();
        return ({
          success: true,
          message: "New Data is created",
          data: resp,
          errorCode: 200,
          error: false,
        })
      }

      else {
        console.log("iam updating");
        const id = data._id
      
        const updatedData = await AvailableTiming.findByIdAndUpdate(id,days)
     
        return ({
          success: true,
          error: false,
          message: "updated availalable timing",
          errorCode: 200,
          data: await AvailableTiming.findOne({ astrologerID })
        })
      }
    } catch (error) {
      console.log(error);
      return ({
        success: false,
        message: error?.message,
        errorCode: 500,
        error: error
      })
    }
  }

  async getAllAstrologers(){
   try {
    const allAstrologersData = await AstrologerPersonalDetailModel.find()


    if(!allAstrologersData){
        return({
          message:"No data found",
          success:false,
          error:false,
          errorCode: 404,
          error: false,
        })
    }
    else{
      return({
        success:true,
        error:false,
        message:"All astrologer details",
        errorCode: 200,
        data:allAstrologersData,
      })
    }
   } catch (error) {
    return({
      success:false,
      error:true,
      message:error?.message,
      errorCode: 500,
    })
   } 
  }

}

module.exports = AstrologerService;
