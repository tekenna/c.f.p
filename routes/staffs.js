const router = require("express").Router()
const Staffs = require("../models/staffs")

router.post("/staffs", async(req, res)=>{
    try{
        const newUser = new Staffs({
            name: req.body.name,
            department: req.body.department,
            school: req.body.school,
            residence: req.body.residence,
            transportation: req.body.transportation,
            diet: req.body.diet,
            mealPlan: req.body.mealPlan,
            softDrinks: req.body.softDrinks,
            alcohol: req.body.alcohol,
            paper: req.body.paper,
            pc: req.body.pc,
            powerRating: req.body.powerRating,
            genRunTime: req.body.genRunTime,
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