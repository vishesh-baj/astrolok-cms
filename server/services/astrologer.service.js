const AstrologerPersonalDetailModel = require("../models/Astrologers/AstrologerPersonalDetailModel");

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
        error: error,
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
        error: error,
      };
    }
  }
}

module.exports = AstrologerService;
