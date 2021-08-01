const mongoose = require("mongoose")

const Form1Schema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    residence: {
        type: String,
        required: false,
    },
    businessName:{
        type: String,
        required: false,
    },
    businessLocation:{
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
    paper:{
        type: Number,
        required: false,
    },
}, {timestamps: true})
module.exports = mongoose.model("FBC", Form1Schema)