const mongoose = require("mongoose")

const Form6Schema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    residence:{
        type: String,
        required: false,
    },
    bankName: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: false,
    },
    transportation:{
        type: String,
        required: false,
    },
    diet:{
        type: String,
        required: false,
    },
    mealPlan:{
        type: String,
        required: false,
    },
    softDrinks:{
        type: Number,
        required: false,
    },
    alcohol:{
        type: Number,
        required: false,
    },
    power:{
        type: String,
        required: false,
    },
    powerRating:{
        type: Number,
        required: false,
    },
    liters:{
        type: Number,
        required: false,
    },
    
    waste:{
        type: Number,
        required: false,
    },
    papers:{
        type: Number,
        required: false,
    },
}, {timestamps: true})
module.exports = mongoose.model("Bankers", Form6Schema)