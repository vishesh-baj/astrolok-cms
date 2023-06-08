require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const DBconnection = require("./config/DB");
const userRoutes = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const adminRoutes = require("./routes/admin");
const {Storage} =  require('@google-cloud/storage')
const Multer = require('multer');
const loginRoutes = require("./routes/astrolok");
const astrolokRoutes = require("./routes/astrolok");

// we dont want to store the file to express we just want our memory stream directly to google cloud
// const multer = Multer({
//   storage:Multer.memoryStorage(),
//   limits:{
//     fileSize: 5 * 1024 * 1024 //it means no file size should be greater than 5 mb
//   }
// })

// const bucket  = storage.bucket('')

// let projectId = ""
// let keyFilename = "";

// const storage = new Storage({
//   projectId,
//   keyFilename
// })

// app.post("/upload",multer.single(''),(req,res)=>{
//   try {
//     if(req.file){
//       const blob = bucket.file(req.file.originalname);
//       const blobStream = blob.createWriteStream();
//       blobStream.on('finish',()=>{
//         res.status(200).send("Success")
//       })
//       blobStream.end(req.file.buffer)
//     }
//   } catch (error) {
//     res.status(500).json({
//       success:false,
//       message:error.message
//     })
//   }
// })

// DB start
DBconnection();


// middleware
app.use(express.json())

app.use(cors());



app.get("/",(req,res)=>{
    res.status(400).send("Welcome to Backend")
})



// middleware
app.use(cookieParser());
app.use(express.json());








// Routes
app.use("/api/users",userRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/astrolok",astrolokRoutes)







app.listen(process.env.PORT,()=>{
  console.log("Server is running",process.env.PORT)
})

