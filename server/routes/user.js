const express = require("express");
const userRoutes = express.Router();

const { checkLoginOrNot } = require("../middleware/auth");
const UserController = require("../controllers/user");
const GlobalController = require("../controllers/globalController");

userRoutes.get("/", (req, res) => {
    res.status(400).send("welcome to the user routes")
})

const userController = new UserController;

const globalController = new GlobalController;



userRoutes.post("/personalDetail", checkLoginOrNot,userController.personalDetailUpdate)
userRoutes.get("/getpersonalDetail", checkLoginOrNot,userController.getpersonalDetail)


userRoutes.get("/getAstrologerAllConsultation", checkLoginOrNot,userController.getAstrologerAllConsultation)

userRoutes.post("/bookAstrologerForConsultation", checkLoginOrNot,userController.bookAstrologerForConsultation)

userRoutes.post("/availableTimingOfDate", checkLoginOrNot,userController.availableTimingOfDate)

userRoutes.get("/getWallet", checkLoginOrNot,userController.getWallet)


userRoutes.post("/addMoneyTowallet", checkLoginOrNot,userController.addMoneyTowallet)


// this route is automatically hit when user is register
userRoutes.post("/createWallet", checkLoginOrNot,userController.createWallet)


userRoutes.get("/allConsultationsOfUser", checkLoginOrNot,globalController.consultationsOfUser)





// userRoutes.post("/booking", checkLoginOrNot, booking)


module.exports = userRoutes

