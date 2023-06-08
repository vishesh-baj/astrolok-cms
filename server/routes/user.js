const express = require("express");
const userRoutes = express.Router();
const { register,
        login,
        booking,
        logout, } = require("../controllers/user");
const { checkLoginOrNot } = require("../middleware/auth");

userRoutes.get("/", (req, res) => {
    res.status(400).send("welcome to the user routes")
})

userRoutes.post("/register", register)
userRoutes.post("/login", login)
userRoutes.post("/booking", checkLoginOrNot, booking)
userRoutes.post("/logout", checkLoginOrNot, logout)


module.exports = userRoutes

