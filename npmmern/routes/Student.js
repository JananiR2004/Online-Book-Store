const express=require('express')
const router=express.Router()
const Studentmodel=require('../Models/Studentmodel')
const { response } = require('../app')
//localhost:3001/studentss/create-->body-->raw-->object
router.post('/create',(req,res)=>{
    let student=new Studentmodel({
        firstName:req.body.firstName,
        lastname:req.body.lastName,
        age:req.body.age,
        marks:req.body.marks,
        address:req.body.address
    })
    student.save()
    .then(resp=>res.send(resp))
    .catch(err=>res.send(err))
})
//localhost:3001/students/read
router.get('/read',(req,res)=>{
    Studentmodel.find()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3001/students/read/Adam
router.get('/read/:filename',(req,res)=>{
    Studentmodel.find({firstName:req.params.firstName})
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3001/student/read/? id=67b5a646af49c8701e6cca84
router.get('/get',(req,res)=>{
    Studentmodel.findById(req.query.id)
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3001/student/update/? id=67b5a646af49c8701e6cca84
router.put('/update',(req,res)=>{
    const idQuery=req.query.id;
    Studentmodel.findByIdAndUpdate(idQuery,{age:req.body.age})
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3001/student/update/Adam/body-->{age:70}
router.put('/update/:name',(req,res)=>{
    const nameparams=req.params.firstName;
    Studentmodel.findOneAndUpdate(nameparams,{age:req.body.age})
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3001/student/delete/? id=
router.delete('/delete',(req,res)=>{
    const idQuery=req.query.id
    Studentmodel.findByIdAndDelete(idQuery)
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})

module.exports=router

