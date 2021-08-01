const mongoose = require("mongoose")

const Form4Schema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: false,
    },
    school:{
        type: String,
        required: false,
    },
    level:{
        type: Number,
        required: false,
    },
    residence:{
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
    books:{
        type: Number,
        required: false,
    },
    textBooks:{
        type: Number,
        required: false,
    },
    clothes:{
        type: Number,
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
    
    genRunTime:{
        type: Number,
        required: false,
    },
}, {timestamps: true})

module.exports = mongoose.model("Students", Form4Schema)