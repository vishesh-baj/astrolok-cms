require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DBconnection = require("./config/DB");
const userRoutes = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const astrologerRoutes = require("./routes/asttrologers");
const authRoutes = require("./routes/auth");

// DB start
DBconnection();

// middleware
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(400).send("Welcome to Backend");
});

// middleware
app.use(cookieParser());
app.use(express.json());





// Routes
app.use("/api/users", userRoutes);
app.use("/api", authRoutes);
app.use("/api/astrologer", astrologerRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running", process.env.PORT);
});
