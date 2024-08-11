const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { loginModel } = require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sreya:sreya123@cluster0.rk6cqoj.mongodb.net/swiggydb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signUp",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,12)
    input.password=hashedpassword
    console.log(input)

    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})