const mongoose = require("mongoose")

const Form2Schema = new mongoose.Schema({
    school: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: false,
        unique: true
    },
    staffs:{
        type: Number,
        required: false,
    },
    offices:{
        type: Number,
        required: false,
    },
    lectureHalls:{
        type: Number,
        required: false,
    },
    photocopiers:{
        type: Number,
        required: false,
    },
    printers:{
        type: Number,
        required: true,
    },
    machines:{
        type: Number,
        required: true,
    },
}, {timestamps: true})
module.exports = mongoose.model("deu", Form2Schema)