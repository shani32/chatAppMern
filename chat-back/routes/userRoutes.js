const express= require('express')
const router= express.Router()
const User= require('../models/User')

//create user

router.post('/', async(req, res)=>{
    try{
        const{name, email, password, picture}=req.body;
        console.log(req.body);
        const user= await User.create({name, email, password, picture})
        res.status(201).send(user)
    }catch(e){
        res.status(500).send(e.message)


    }
})

//login user

router.post('/login', async(req,res)=>{
    try{
        const{email, password}=req.body;
        const user=await User.findByCredentials(email, password);
        user.status='online';
        await user.save();
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e.message)
    }
})
module.exports=router