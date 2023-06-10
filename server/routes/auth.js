const express = require("express");
const  AuthController  = require("../controllers/authController");
const { register } = require("../controllers/user");
const authRoutes = express.Router();


authRoutes.get("/welcome",function(req,res){
    res.send("its a welcome route")
})

const auth = new AuthController;

 authRoutes.post("/register", auth.register);
 authRoutes.post("/login", auth.login);
  

module.exports = authRoutes;

