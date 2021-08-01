const router = require("express").Router()
const Deu = require("../models/deu")

router.post("/deu", async(req, res)=>{
    try{
        const newUser = new Deu({
            school: req.body.school,
            department: req.body.department,
            staffs: req.body.staffs,
            offices: req.body.offices,
            lectureHalls: req.body.lectureHalls,
            photocopiers: req.body.photocopiers,
            printers: req.body.printers,
            machines: req.body.machines,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router