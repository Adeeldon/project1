const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Usermodel = require("./models/Usermodel")

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")



app.post("/createUser" , (req,res)=>{
    Usermodel.create(req.body)
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
})



// app.get("/" , (req,res)=>{
//     Usermodel.find({})
//     .then((users)=>{
//         res.json(users)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// app.use("/getUser:id", (req,res)=>{
//     let id
// })

app.listen(3001, ()=>{
    console.log("server is running");
})