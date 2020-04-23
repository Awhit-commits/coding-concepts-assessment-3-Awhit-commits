const express = require('express');

const router = express();

router.use(express.json);

//Create Bank account in database using post http request

router.post('/',(req,res)=>{
    res.send(`Create A Account`)
})
router.get('/',(req,res)=>{
    console.log(`Get All`)
    res.send("Get All")
})

module.exports = router