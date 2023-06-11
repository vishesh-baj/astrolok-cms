const Usermodel = require("../models/users/Usermodel");

class UserService{
    async findUserByIdAndUpdate(id, data) {
        console.log(id,data);
        try {
          if (!id) {
            return {
              success: false,
              errorCode: 404,
              message: "id did not found",
            };
          } else {
            const astroDetails =
              await Usermodel.findByIdAndUpdate(id, data);
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
    
      async findUserById(id) {
        console.log(id);
        try {
          if (!id) {
            return {
              success: false,
              errorCode: 404,
              message: "id did not found",
            };
          } else {
            const astroDetails = await Usermodel.findById(id);
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

module.exports = UserService;