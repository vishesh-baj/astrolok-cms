const express = require("express");
const GlobalController = require("../controllers/globalController");
const { checkLoginOrNot } = require("../middleware/auth");
const globalRoutes = express.Router();


const globalController = new GlobalController;

// astrolokRoutes.post("/login", login)
globalRoutes.get("/",checkLoginOrNot,(req,res)=>{
    res.status(200).send("this is global route")
})


globalRoutes.post("/createPurchaseHistory",checkLoginOrNot,globalController.createPurchaseHistory)


globalRoutes.get("/getRatingReview",checkLoginOrNot,globalController.getRatingReview)




module.exports = globalRoutes;

