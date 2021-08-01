const router = require("express").Router()
const Students = require("../models/students")

router.post("/student", async(req, res)=>{
    try{
        const newUser = new Students({
            name: req.body.name,
            department: req.body.department,
            school: req.body.school,
            level: req.body.level,
            residence: req.body.residence,
            transportation: req.body.transportation,
            diet: req.body.diet,
            mealPlan: req.body.mealPlan,
            softDrinks: req.body.softDrinks,
            alcohol: req.body.alcohol,
            books: req.body.books,
            textBooks: req.body.textBooks,
            clothes: req.body.clothes,
            powerRating: req.body.powerRating,
            liters: req.body.liters,
            genRunTime: req.body.genRunTime,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router