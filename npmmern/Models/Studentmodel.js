const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    marks:Number,
    address:String
})
const Studentmodel=new mongoose.model('student',studentSchema)
module.exports=Studentmodel