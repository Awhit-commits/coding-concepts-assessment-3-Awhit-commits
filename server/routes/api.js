
//Importing dependecies from express module
const express = require('express');

const router = express();

router.use(express.json());
let bankCollection = require('../models/BankSchema')

//Create Bank account in database using post http request
router.post('/',(req,res)=>{
    console.log(`Create a Account`)
    // res.send(`Create A Account`)
    bankCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors):res.send(results)
    })
})

//Get all accounts from database
router.get('/',(req,res)=>{
    console.log(`Get All`)
    // res.send("Get All")
    bankCollection.find({},(errors,results)=>{
        errors ? res.send(errors):res.send(results)
    })
})
//Get An Account by ID
router.get('/:_id',(req,res)=>{
    console.log(`Get One`)
    // res.send("Get One")
    
    bankCollection.findOne({_id:req.params._id},(errors,results)=>{
        errors ? res.send(errors):res.send(results)
    })
})

//Update An Account by ID
router.put('/:_id',(req,res)=>{
    console.log(`Update Account`)
    res.send('Update Account')
    bankCollection.findOneAndUpdate({_id:req.params._id},(errors,results)=>{
        errors ? res.send(errors):res.send(results)
    })
})
//Delete an Account by ID
router.delete('/:_id',(req,res)=>{
    console.log(`Delete Account`)
    res.send(`Delete Account`)
    bankCollection.findOneAndDelete({_id:req.params._id},(errors,results)=>{
        errors ? res.send(errors):res.send(results)
    })
})

module.exports = router