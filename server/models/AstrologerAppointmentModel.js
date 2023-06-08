const mongoose = require("mongoose")
const { appointments } = require("../controllers/admin")

const AstroAppointmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    gender:{
        type: String, 
        require: true,
    }
   
})

module.exports  = mongoose.model("AppointmentsSchema",AstroAppointmentsSchema);
