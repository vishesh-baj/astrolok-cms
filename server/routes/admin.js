const express = require("express");
const adminRoutes = express.Router();
const { checkLoginOrNot } = require("../middleware/auth");
const { login,
        register,
        charges,
        logout,
        accounts,
        changePassword,
        profileSettings,
        getaccounts,
        getprofileSettings,
        getcharges,
        availableTimings,
        appointments,
        searchBookings,
        dashboard,
        getavailableTimings
    } = require("../controllers/admin");

adminRoutes.get("/", (req, res) => {
    res.status(400).send("welcome to the user routes")
})

adminRoutes.post("/login", login)
adminRoutes.post("/register", register)
adminRoutes.post("/charges", checkLoginOrNot, charges)
adminRoutes.get("/getcharges", checkLoginOrNot, getcharges)
adminRoutes.post("/accounts", checkLoginOrNot, accounts)
adminRoutes.get("/getaccounts", checkLoginOrNot, getaccounts)
adminRoutes.post("/logout", checkLoginOrNot, logout)
adminRoutes.post("/changePassword", checkLoginOrNot, changePassword)
adminRoutes.post("/profileSettings", checkLoginOrNot, profileSettings)
adminRoutes.get("/getprofileSettings", checkLoginOrNot, getprofileSettings)
adminRoutes.post("/availableTimings", checkLoginOrNot, availableTimings)
adminRoutes.get("/getavailableTimings", checkLoginOrNot, getavailableTimings)
adminRoutes.get("/appointments", checkLoginOrNot, appointments)
adminRoutes.get("/searchBookings", checkLoginOrNot, searchBookings)
adminRoutes.get("/dashboard", checkLoginOrNot, dashboard)


module.exports = adminRoutes;

