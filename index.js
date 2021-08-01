const express = require("express")
const app = express()
const dotenv= require("dotenv")
const mongoose = require("mongoose")
const fbcRoute = require("./routes/fbc")
const deuRoute = require("./routes/deu")
const staffsRoute = require("./routes/staffs")
const studentsRoute = require("./routes/students")
const farmersRoute = require("./routes/farmers")
const bankersRoute = require("./routes/bankers")
const path = require("path")

dotenv.config()
app.use(express.json())
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(console.log("db connected"))
    .catch(err=>console.log(err))


app.use("/api", fbcRoute)
app.use("/api", deuRoute)
app.use("/api", staffsRoute)
app.use("/api", studentsRoute)
app.use("/api", farmersRoute)
app.use("/api", bankersRoute)

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "clent", "build", "index.html"))
    })
}

app.listen("5000", ()=>{
    console.log("backend set");
})