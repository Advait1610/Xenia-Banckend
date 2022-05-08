const express= require('express');

const router = express.Router();


router.get('/', function(req,res){
    return res.send('hello');
})

router.use('/users', require('./users'));


module.exports=router;