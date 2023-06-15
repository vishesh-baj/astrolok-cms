const purchaseHistory = require("../models/common/purchaseHistory");
const Usermodel = require("../models/users/Usermodel");
const ratingsReview = require("../models/users/ratingsReview");
const wallet = require("../models/users/wallet");
const GlobalService = require("./global.servie");



class UserService {

    globalServiceInstance = new GlobalService()

  async findUserByIdAndUpdate(id, data) {
    console.log(id, data);
    try {
      if (!id) {
        return {
          success: false,
          errorCode: 404,
          message: "id did not found",
        };
      } else {
        const userDetails =
          await Usermodel.findByIdAndUpdate(id, data);
        if (!userDetails) {
          return {
            success: false,
            errorCode: 404,
            message: "user not found",
          };
        } else {
          return {
            success: true,
            data: await Usermodel.findById(id),
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

    try {
      if (!id) {
        return {
          success: false,
          errorCode: 404,
          message: "id did not found",
        };
      } else {
        const userDetails = await Usermodel.findById(id);
        console.log(userDetails, "SDasdasd");
        if (!userDetails) {
          return {
            success: false,
            errorCode: 404,
            message: "user not found",
          };
        } else {
          return {
            success: true,
            data: userDetails,
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

  async getWalletData(userId) {
    try {
      console.log(userId);
      const data = await wallet.findOne({ userId })
      console.log(data);
      if (!data) {
        return ({
          success: false,
          message: "did not found any wallet",
          error: false,
          errorCode: 404,
        })
      }

      else {
        return ({
          success: true,
          message: "found wallet",
          error: false,
          errorCode: 200,
          data: data
        })
      }

    } catch (error) {
      return ({
        success: false,
        message: error.message,
        error: true,
        errorCode: 500,
        data: ""
      })
    }
  }

  async createNewWallet(userId) {
    try {
      const walletAlreadyExist = await wallet.findOne({ userId })

      if (walletAlreadyExist) {
        return ({
          success: false,
          error: false,
          errorCode: 400,
          message: "user already has Wallet, No new wallet is created",
          data: walletAlreadyExist
        })
      }
      else {
        const createdNewWallet = await wallet.create({
          userId,
        })
        if (!createdNewWallet) {
          return ({
            success: false,
            error: false,
            errorCode: 400,
            message: "cant create wallet",
            data: ""
          })
        }
        else {
          await createdNewWallet.save();

          // as the money is added to wallet we need to make the transaction record
          return ({
            success: true,
            error: false,
            errorCode: 200,
            message: "created new wallet",
            data: ""
          })
        }
      }
    } catch (error) {
      return ({
        success: false,
        error: true,
        errorCode: 500,
        message: error.message,
        data: ""
      })
    }
  }

  async addMoneyToWallet(userId, amount) {
    const data = await wallet.findOne({ userId });

    if (!data) {
      return ({
        success: false,
        error: false,
        errorCode: 404,
        message: "did not found wallet",
        data: ""
      })
    }

    // Update the amount field with the new value
    data.amount = data.amount + amount;
    // Save the changes to the database
    const updatedData = await data.save();
    try {
      if (!updatedData) {
        return ({
          success: false,
          error: false,
          errorCode: 404,
          message: "Amount did not added to wallet",
          data: ""
        })
      }
      else {
        return ({
          success: true,
          error: false,
          errorCode: 200,
          message: "Wallet updated",
          data: updatedData
        })
      }
    } catch (error) {
      return ({
        success: false,
        error: true,
        errorCode: 500,
        message: error.message,
        data: ""
      })
    }
  }



  async createNewRatingAndReview(rating, review, userId, astrologerId) {
    try {
      
      const isExist = await this.globalServiceInstance.getRatingAndReviewByUser(userId)

     
      if (isExist?.success || isExist?.error) {return (isExist)}

      else {
        console.log("iamworkinaasasdasdasd");
        const newRatingAndReview = await ratingsReview.create({
          rating, review, userId, astrologerId
        })
       console.log(newRatingAndReview,"SDasdd");
        if (!newRatingAndReview) {
          return ({
            success: false,
            message: "New Ratings and review not created",
            errorCode: 400,
            error: false,
            data: ""
          })
        }
        else {
          await newRatingAndReview.save();
          const gettingUpdatedData = await this.globalServiceInstance.getRatingAndReviewByUser(userId)

          return (gettingUpdatedData)
        }
      }
    } catch (error) {
        return({
          success:false,
          error:true,
          message:error.message,
          data:"",
          errorCode:500
        })
    }

  }

}

module.exports = UserService;