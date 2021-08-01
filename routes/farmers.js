const router = require("express").Router()
const Farmers = require("../models/farmers")

router.post("/farmers", async(req, res)=>{
    try{
        const newUser = new Farmers({
            name: req.body.name,
            residence: req.body.residence,
            location: req.body.location,
            transportation: req.body.transportation,
            diet: req.body.diet,
            mealPlan: req.body.mealPlan,
            softDrinks: req.body.softDrinks,
            alcohol: req.body.alcohol,
            livestocks: req.body.livestocks,
            feed: req.body.feed,
            dungs: req.body.dungs,
            power: req.body.power,
            powerRating: req.body.powerRating,
            liters: req.body.liters,
            waste: req.body.waste,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router