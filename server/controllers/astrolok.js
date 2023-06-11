require("dotenv").config;
const AstrologerModel = require("../models/Astrologers/AstrologerPersonalDetailModel");
const Usermodel = require("../models/users/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//login
exports.login = async (req, res) => {
  try {
    //collected information from frontend
    const { email, password } = req.body;

    //validate
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "please send email or password",
      });
    } else {
      const userExist = await Usermodel.findOne({ email });

      if (userExist) {
        if (!(await bcrypt.compare(password, userExist.password))) {
          return res.status(400).json({
            success: false,
            message: "password is incorrect",
          });
        }

        token = jwt.sign(
          { id: userExist._id, role: userExist.role },
          process.env.SECRET_KEY,
          { expiresIn: "2h" }
        );
        userExist.password = undefined;
        // userDetails.token = token

        const options = {
          // i am currently removing domain as in postman it is not creating token in cookies
          // domain: process.env.REACT_APP_URL,
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        return res.status(200).cookie("token", token, options).json({
          success: true,
          token,
          id: userExist._id,
          role: userExist.role,
        });
      }
      const astroExist = await AstrologerModel.findOne({ email });
      if (astroExist) {
        if (!(await bcrypt.compare(password, astroExist.password))) {
          return res.status(400).json({
            success: false,
            message: "password is incorrect",
          });
        }

        token = jwt.sign(
          { id: astroExist._id, role: astroExist.role },
          process.env.SECRET_KEY,
          { expiresIn: "2h" }
        );
        astroExist.password = undefined;
        // userDetails.token = token

        const options = {
          // i am currently removing domain as in postman it is not creating token in cookies
          // domain: process.env.REACT_APP_URL,
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        return res.status(200).cookie("token", token, options).json({
          success: true,
          token,
          id: astroExist._id,
          role: astroExist.role,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
