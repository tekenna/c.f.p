const mongoose = require("mongoose")

const Form3Schema = new mongoose.Schema({
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
    paper:{
        type: Number,
        required: false,
    },
    pc:{
        type: String,
        required: false,
    },
    
    powerRating:{
        type: Number,
        required: false,
    },
    genRunTime:{
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
module.exports = mongoose.model("Staffs", Form3Schema)