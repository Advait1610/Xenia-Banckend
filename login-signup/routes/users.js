const express=require('express')

const router = express.Router();

//requiring users controller
const userController = require('../controllers/user_controller');


router.post('/signup', userController.createUser);


module.exports=router;