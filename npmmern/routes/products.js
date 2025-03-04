const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
    res.send("Products fetched")
})
//localhost:3003/products/get/123
router.get('/get/:id',(req,res)=>{
    res.send(req.params.id)
})
//localhost:3003/products/get/?filter=30000
router.get('/get',(req,res)=>{
    res.send(req.query.filter)
})
//localhost:3003/products/get/tn/chennai
router.get('/get/:state/:city',(req,res)=>{
    res.send(`${req.params.state},${req.params.city}`)
})
//localhost:3003/products/read/2345
router.get('/read/:key([0-9]{4})',(req,res)=>{
    res.send(req.params.key)
})
router.post('/post',(req,res)=>{
        res.send("Product Created")
    })
router.put('/update',(req,res)=>{
        res.send("Product Updated")
    })
    router.delete('/delete',(req,res)=>{
        res.send("Deleted Successfully")
    })
module.exports=router;