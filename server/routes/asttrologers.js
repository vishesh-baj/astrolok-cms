const express = require("express");
const astrologerRoutes = express.Router();
const { checkLoginOrNot } = require("../middleware/auth");
const { 
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
        getavailableTimings,
        // chatCallReviewRatingOfAstrologerByUsers,
        billGenerate
    } = require("../controllers/asttrologers");

astrologerRoutes.get("/", (req, res) => {
    res.status(400).send("welcome to the user routes")
})

astrologerRoutes.post("/register", register)
astrologerRoutes.post("/charges", checkLoginOrNot, charges)
astrologerRoutes.get("/getcharges", checkLoginOrNot, getcharges)
astrologerRoutes.post("/accounts", checkLoginOrNot, accounts)
astrologerRoutes.get("/getaccounts", checkLoginOrNot, getaccounts)
astrologerRoutes.post("/logout", checkLoginOrNot, logout)
astrologerRoutes.post("/changePassword", checkLoginOrNot, changePassword)
astrologerRoutes.post("/profileSettings", checkLoginOrNot, profileSettings)
astrologerRoutes.get("/getprofileSettings", checkLoginOrNot, getprofileSettings)
astrologerRoutes.post("/availableTimings", checkLoginOrNot, availableTimings)
astrologerRoutes.get("/getavailableTimings", checkLoginOrNot, getavailableTimings)
astrologerRoutes.get("/appointments", checkLoginOrNot, appointments)
astrologerRoutes.get("/searchBookings", checkLoginOrNot, searchBookings)
astrologerRoutes.get("/dashboard", checkLoginOrNot, dashboard)
// astrologerRoutes.put("/chatCallReviewRatingOfAstrologerByUsers", checkLoginOrNot, chatCallReviewRatingOfAstrologerByUsers )
// astrologerRoutes.post("/billGenerate", checkLoginOrNot, billGenerate)


module.exports = astrologerRoutes;

