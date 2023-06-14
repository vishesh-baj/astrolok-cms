const Usermodel = require("../models/users/Usermodel");
const walletPurchaseHistory = require("../models/users/walletPurchaseHistory");
const wallet = require("../models/users/walletPurchaseHistory");


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

      async getWalletData(userId){
       try {
        console.log(userId);
        const data = await wallet.findOne({userId})
         console.log(data);
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
            message:"found wallet",
            error:false,
            errorCode:200,
            data:data
          })
        }

       } catch (error) {
        return({
          success:false,
          message:error.message,
          error:true,
          errorCode:500,
          data:""
        })
       }
      }

      async createNewWallet(userId){
          try {
            const walletAlreadyExist = await wallet.findOne({userId})

            if(walletAlreadyExist){
              return({
                success:false,
                error:false,
                errorCode:400,
                message:"user already has Wallet, No new wallet is created",
                data:walletAlreadyExist
              })
            }
          else{
            const createdNewWallet = await wallet.create({
              userId,
            })
           if(!createdNewWallet){
            return({
              success:false,
                error:false,
                errorCode:400,
                message:"cant create wallet",
                data:""
            })
           }
           else{
            await createdNewWallet.save();

            // as the money is added to wallet we need to make the transaction record
              c




            return({
              success:true,
            error:false,
            errorCode:200,
            message:"created new wallet",
            data:walletAlreadyExist
            })
           }
          }                
          } catch (error) {
            return({
              success:false,
              error:true,
              errorCode:500,
              message:error.message,
              data:""
            })
          }
      }

      async addMoneyToWallet(userId,amount){
        const data = await wallet.findOne({ userId });

        if(!data){
          return({
            success:false,
            error:false,
            errorCode:404,
            message:"did not found wallet",
            data:""
          })
        }
      
// Update the amount field with the new value
data.amount = data.amount + amount;
// Save the changes to the database
const updatedData = await data.save();
        try {
          if(!updatedData){
            return({
              success:false,
              error:false,
              errorCode:404,
              message:"Amount did not added to wallet",
              data:""
            })
          }
          else{
            return({
              success:true,
              error:false,
              errorCode:200,
              message:"Wallet updated",
              data:updatedData
            })
          }
        } catch (error) {
          return({
             success:false,
              error:true,
              errorCode:500,
              message:error.message,
              data:""
            })
        }
      }

      // async createPurchaseHistory(data,userId){
      //   const {transactionId,amount} = data
      //   if(!transactionId || !amount){
      //     return({
      //       success:false,
      //       message:"transactionId or amount not found",
      //       error:false,
      //       errorCode:404,
      //       data:""
      //     })
      //   }
      //   else{
      //     const purchaseAlreadyMade = walletPurchaseHistory.find({transactionId}){

      //     }
      //   }
      // }
}

module.exports = UserService;