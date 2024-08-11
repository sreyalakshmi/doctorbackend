const mongoose=require ("mongoose")
const loginSchema=mongoose.Schema(
    {
        "name":String,
        "username":String,
        "password":String
    }
)
const loginModel=mongoose.model("logindata",loginSchema)
module.exports={loginModel}