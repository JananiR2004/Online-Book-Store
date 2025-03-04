// // var express = require('express');
// // var router = express.Router();

// // /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   res.send('respond with a resource');
// // });

// // module.exports = router;

// // var Usermodel=require
// // var express=require('express')
// // var router=express.Router()
// // var Usermodel=require('../Models/Usermodel')
// // const bcrypt=require('bcryptjs')
// // const nodemailer=require('nodemailer')
// // const { response } = require('../app')
// // //localhost:3001/users/signup
// // //body-->raw-->{"username"":adam","email":ad@gm.com,"password":12345}
// // router.post('/signup',(req,res)=>{
// //   let user=new Usermodel({
// //     username:req.body.username,
// //     email:req.body.email,
// //     password:req.body.password
// //   })
// //   user.save()
// //   .then(response=>res.status(200).json({message:response}))
// //   .catch(err=>res.status(401).json({message:err}))
// // })
// // module.exports=router

// const express=require('express');
// const router=express.Router();
// const Usermodel=require('../Models/Usermodel')
// const bcrypt=require('bcryptjs')
// const nodemailer=require('nodemailer')
// const jwt=require('jsonwebtoken')
// const bodyParser=require('body-parser')
// // const { emit } = require('../app')
// // const { use } = require('./Student')
// router.use(bodyParser.json())

// router.post('/signup',async(req,res)=>{
//   try{
//     const{username,email,password}=req.body
//     const emailFound=await Usermodel.findOne({email})
//     if(emailFound){return res.status(201).json({message:"Email already registered"})}
//     const hashedPassword=await bcrypt.hash(password,10)
//     let user=new Usermodel({username,email,password:hashedPassword})
//     user.save()
//     const transport=nodemailer.createTransport({
//       host:"sandbox.smptp.mailtrap.io",
//       port:2525,
//       auth:{
//         user:process.env.EMAIL,
//         pass:process.env.PASSWORD
//       }
//     })
//     const token=jwt.sign({email},process.env.SECRET_KEY,{expiresIn:'1h'})
//     const verificationLink=`http://localhost:3001/users/verify/${token}`
//     transport.sendMail({
//       from:process.env.EMAIL,
//       to:email,
//       subject:"verification email from APP NAME",
//       html:`<a href=${verificationLink}>verify on clicking this link</a>`
//     })
//     res.status(200).json({message:"signup successfull and Activation link is sent"})
//   }
//   catch(err){
//     res.status(500).json({message:err})
//   }
// })
// router.get('/verify/:token',async(req,res)=>{
//   try{
//     const{token}=req.params
//     const decoded=jwt.verify(token,process.env.SECRET_KEY)
//     const user=await Usermodel.findOne({email:decoded,email})
//     if(!user){return res.status(404).json({message:"Invalid token"})}
//     user.isVerified=true
//     user.save()
//     res.status(200).json({message:"verification successfull"})
//   }
//   catch(err){
//     res.status(500).json({message:"server error",err})
//   }
// })

// router.post('/login',async(req,res)=>{
//   console.log(req.body)
//   try{
//     const{email,password}=req.body
//     let user=await Usermodel.findOne({email})
//     if(!user){return res.status(404).json({message:"User Not Found"})}
//     if(!user.isVerified){return res.status(400).json({message:"User Not Verified"})}
//     let isMached = await bcrypt.compare(password,user.password)
//     if(!isMached){return res.status(400).json ({message:"password is not correct"})}
//     res.status(200).json({message:"Login successfull",username:user.username})
//   }
//   catch(err){
//     res.status(500).json({err})
//   }
// })
// module.exports=router


var express = require('express');
var router = express.Router();
var userModel=require('../Models/Usermodel')
/* GET users listing. */
// //localhost:3001/users/signup
//body-->raw-->{"username":"adam","email":"a@gmail.com","password":"12345"}
router.post('/signup',(req,res)=>{
  let user=new userModel({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
  })
  user.save()
  .then(response=>res.status(200).json({message:response}))
  .catch(err=>res.status(401).json({message:err}))
})
module.exports = router;
