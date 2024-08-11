const mongoose=require("mongoose")
const doctorSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        qualification:{type:String,required:true},
        contact:{type:String,required:true},
        specialization:{type:String,required:true}
    }
)
const doctorModel =mongoose.model("doctors",doctorSchema)
module.exports={doctorModel}
