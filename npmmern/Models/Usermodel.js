// // const mongoose=require('mongoose')
// // const UserSchema=mongoose.Schema({
// //     username:String,
// //     email:String,
// //     password:String
// // })
// // const Usermodel=new mongoose.model('user',UserSchema)
// // module.exports=Usermodel

// const mongoose=require('mongoose')
// const UserSchema=mongoose.Schema({
//     username:String,
//     email:{type:String,unique:true},
//     password:String,
//     isVerified:{type:Boolean,default:false}
// },{timestamps:true})
// const Usermodel=new mongoose.model('user',UserSchema)
// module.exports=Usermodel

const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const userModel=new mongoose.model('users',userSchema)
module.exports=userModel
