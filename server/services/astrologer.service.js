const AstrologerConsultation = require("../models/Astrologers/AstrologerConsultation");
const AstrologerPersonalDetailModel = require("../models/Astrologers/AstrologerPersonalDetailModel");
const AvailableTiming = require("../models/Astrologers/AvailableTiming");

class AstrologerService {
  async charges(req, res) {
    const { internationalBookCharges, nationalBookCharges } = req.user;
    const data = {
      internationalBookCharges,
      nationalBookCharges,
    };
    if (data) {
      return data;
    } else {
      return false;
    }
  }

  async findAstrologerByIdAndUpdate(id, data) {
    try {
      if (!id) {
        return {
          success: false,
          errorCode: 404,
          message: "id did not found",
        };
      } else {
        const astroDetails =
          await AstrologerPersonalDetailModel.findByIdAndUpdate(id, data);
        if (!astroDetails) {
          return {
            success: false,
            errorCode: 404,
            message: "astrologer not found",
          };
        } else {
          return {
            success: true,
            data: astroDetails,
          };
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error?.message,
      };
    }
  }

  async findAstrologerById(id) {
    try {
      if (!id) {
        return {
          success: false,
          errorCode: 404,
          message: "id did not found",
        };
      } else {
        const astroDetails = await AstrologerPersonalDetailModel.findById(id);
        if (!astroDetails) {
          return {
            success: false,
            errorCode: 404,
            message: "astrologer not found",
          };
        } else {
          return {
            success: true,
            data: astroDetails,
          };
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error?.message,
      };
    }
  }

  async getAstrologerAvailableTiming(astrologerID) {
    try {
      const data = await AvailableTiming.findOne({ astrologerID });

      if (data) {
        return {
          success: true,
          data: data,
          message: "",
          errorCode: 200,
        };
      } else {
        return {
          success: false,
          message: "no data found",
          errorCode: 404,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "",
        errorCode: 500,
        message: error?.message,
        error: true,
      };
    }
  }

  async setAvailableTiming(astrologerID, days) {
  

    try {
      const data = await AvailableTiming.findOne({ astrologerID });

      if (!data) {
      
        const resp = await AvailableTiming.create({
          astrologerID,
          days,
        });

        await resp.save();
        return {
          success: true,
          message: "New Data is created",
          data: resp,
          errorCode: 200,
          error: false,
        };
      } else {
        const id = data._id;

        const updatedData = await AvailableTiming.findByIdAndUpdate(id, days);

        return {
          success: true,
          error: false,
          message: "updated availalable timing",
          errorCode: 200,
          data: await AvailableTiming.findOne({ astrologerID }),
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error?.message,
        errorCode: 500,
        error: error,
      };
    }
  }

  async getAllAstrologers() {
    try {
      const allAstrologersData = await AstrologerPersonalDetailModel.find();

      if (!allAstrologersData) {
        return {
          message: "No data found",
          success: false,
          error: false,
          errorCode: 404,
          error: false,
        };
      } else {
        return {
          success: true,
          error: false,
          message: "All astrologer details",
          errorCode: 200,
          data: allAstrologersData,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error?.message,
        errorCode: 500,
      };
    }
  }

  async getAllConsultation(astrologerId) {
    try {
      const data = await AstrologerConsultation.find({ astrologerId });

      if (data) {
        return {
          success: true,
          error: false,
          errorCode: 200,
          message: "",
          data: data,
        };
      } else {
        return {
          success: false,
          error: false,
          errorCode: 404,
          message: "No data found",
        };
      }
    } catch (error) {
      return {
        success: false,
        error: false,
        errorCode: 500,
        message: error.message,
      };
    }
  }

  async createNewBooking(astrologerId, userId, data) {
    if (!astrologerId || !userId || !data) {
      return {
        success: false,
        error: false,
        errorCode: 404,
        message: "please provide astrologerId,userId,data",
      };
    }
    try {

      const { bookingtype, bookingdate, bookingtime, status, waitingTime } =
        data;
      const resp = await AstrologerConsultation.create({
        astrologerId,
        userId,
        bookingtype,
        bookingdate,
        bookingtime,
        status,
        waitingTime,
      });
      resp.save();
      if (resp) {
        return {
          success: true,
          error: false,
          errorCode: 200,
          message: "",
          data: await AstrologerConsultation.findOne({ astrologerId }),
        };
      } else if (!resp) {
        return {
          success: false,
          error: false,
          errorCode: 404,
          message: "booking failed",
        };
      }
    } catch (error) {
      return {
        success: false,
        error: true,
        errorCode: 500,
        message: error.message,
      };
    }
  }

  async dayFromDate(date) {
    try {
      if (!date) {
        return {
          success: false,
          message: "please provide date",
          errorCode: 404,
          error: false,
        };
      } else {
        let parts = date.split("/"); // an array of strings that contains the parts of the date
        let year = parts[2]; // a string that represents the year
        let month = parts[1] - 1; // a number that represents the month (zero-based)
        let day = parts[0]; // a string that represents the day
        let dateObject = new Date(year, month, day); // a Date object created from the parts
        let dayNumber = dateObject.getDay(); // an integer that represents the day of the week
        let dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ]; // an array of strings that contains the names of the days
        let dayName = dayNames[dayNumber];
        return {
          success: true,
          message: "",
          error: false,
          errorCode: 200,
          data: dayName,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
        errorCode: 500,
        error: true,
      };
    }
  }

  async convertionOfStringTimeToISO(time) {
    try {
      if (!time) {
        return {
          success: false,
          error: false,
          message: "please provide time",
          errorCode: 404,
        };
      } else {
        // a string that represents the time
        let date = new Date(); // a Date object for the current date and time
        let hours = parseInt(time.slice(0, 2)); // get the hours part from the time string

        let minutes = parseInt(time.slice(3)); // get the minutes part from the time string
        date.setUTCHours(hours, minutes, 0, 0); // set the hours, minutes, seconds and milliseconds of the date object according to UTC

        let isoString = date.toISOString(); // convert the date object to a string in ISO 8601 format

        let offset = "+05:30"; // a string that represents the time zone offset for India
        isoString = isoString.slice(0, -1) + offset; // replace the  Z with the offset
        return {
          success: true,
          data: isoString,
          error: false,
          message: "",
          errorCode: 200,
        };
      }
    } catch (error) {
      return {
        success: false,
        data: isoString,
        error: true,
        message: error.message,
        errorCode: 500,
      };
    }
  }

  async getServiceScheduleSlots(duration, start, end) {
    try {
      start = await this.convertionOfStringTimeToISO(start);
      if (start?.error) {
        return start;
      } else {
        start = start?.data;
      }
      end = await this.convertionOfStringTimeToISO(end);
      if (end?.error) {
        return end;
      } else {
        end = end?.data;
      }

      start = new Date(start); // create a Date object for the start
      end = new Date(end); // create a Date object for the end
      let startTime = start?.getHours() * 60 + start.getMinutes(); // get the start time in minutes
      let endTime = end?.getHours() * 60 + end.getMinutes(); // get the end time in minutes
      let i = 0;
      let time = []; // create an empty array for the time slots
      while (startTime <= endTime) {
        let slot = {}; // create an empty object for the slot
        slot = await this.formatTime(startTime); // get the start time as a string in HH:MM format

        startTime += duration; // add the duration to the start time
        // slot.end =await  this.formatTime(startTime); // get the end time as a string in HH:MM format
        i++;
        if (startTime <= endTime) {
          if (slot) {
            time.push(slot);
            // time[i] = slot; // push the slot object to the time array
          }
        }
      }
      return {
        success: true,
        error: false,
        errorCode: 200,
        message: "success",
        data: time,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        errorCode: 500,
        message: error.message,
      };
    }
  }

  async formatTime(minutes) {
    // a helper function to format the minutes as HH:MM
    let hours = Math.floor(minutes / 60); // get the hours part
    minutes = minutes % 60; // get the minutes part

    return (
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes
    ); // pad with zeros and return as a string
  }

  async filterArray(parentArray, child) {
    try {
      const resultedArray = [];

      for (let i = 0; i < parentArray.length; i++) {
        for (var j = 0; j < child.length; j++) {
          if (parentArray[i] === child[j])break;
        }
        if (child.length === j) {
          resultedArray.push(parentArray[i]);
        }
      }
      return {
        success: true,
        message: "",
        errorCode: 200,
        error: false,
        data: resultedArray,
      };
    } catch (error) {
     
      return {
        success: false,
        error: true,
        message: error.message,
        errorCode: 500,
      };
    }
  }
}

module.exports = AstrologerService;
