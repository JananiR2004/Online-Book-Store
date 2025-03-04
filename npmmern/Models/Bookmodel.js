const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    name:String,
    price:Number,
    author:String,
    desc:String,
    
})
const Bookmodel=new mongoose.model('book',bookSchema)
module.exports=Bookmodel