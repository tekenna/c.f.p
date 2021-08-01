const router = require("express").Router()
const Fbc = require("../models/fbc")

router.post("/fbc", async(req, res)=>{
    try{
        const newUser = new Fbc({
            name: req.body.name,
            residence: req.body.residence,
            businessName: req.body.businessName,
            businessLocation: req.body.businessLocation,
            transportation: req.body.transportation,
            diet: req.body.diet,
            mealPlan: req.body.mealPlan,
            softDrinks: req.body.softDrinks,
            alcohol: req.body.alcohol,
            power: req.body.power,
            powerRating: req.body.powerRating,
            liters: req.body.liters,
            waste: req.body.waste,
            paper: req.body.paper,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router