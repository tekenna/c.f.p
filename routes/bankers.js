const router = require("express").Router()
const Bankers = require("../models/bankers")

router.post("/bankers", async(req, res)=>{
    try{
        const newUser = new Bankers({
            name: req.body.name,
            residence: req.body.residence,
            bankName: req.body.bankName,
            location: req.body.location,
            transportation: req.body.transportation,
            diet: req.body.diet,
            mealPlan: req.body.mealPlan,
            softDrinks: req.body.softDrinks,
            alcohol: req.body.alcohol,
            power: req.body.power,
            powerRating: req.body.powerRating,
            liters: req.body.liters,
            waste: req.body.waste,
            papers: req.body.papers,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router