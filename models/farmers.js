const mongoose = require("mongoose")

const Form5Schema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    residence:{
        type: String,
        required: false,
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
    livestocks:{
        type: Number,
        required: false,
    },
    feed:{
        type: Number,
        required: false,
    },
    dungs:{
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
}, {timestamps: true})
module.exports = mongoose.model("Farmers", Form5Schema)