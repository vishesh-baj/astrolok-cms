const express = require("express");
const userRoutes = express.Router();

const { checkLoginOrNot } = require("../middleware/auth");
const UserController = require("../controllers/user");

userRoutes.get("/", (req, res) => {
    res.status(400).send("welcome to the user routes")
})

const userController = new UserController


userRoutes.post("/personalDetail", checkLoginOrNot,userController.personalDetailUpdate)
userRoutes.get("/getpersonalDetail", checkLoginOrNot,userController.getpersonalDetail)
// userRoutes.post("/booking", checkLoginOrNot, booking)


module.exports = userRoutes

