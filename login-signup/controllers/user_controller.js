//importing the user model

const User = require('../models/user');
const bcrypt=require('bcrypt');
const JWT=require('../config/jwt');

module.exports.createUser = async (req,res)=>{
    console.log('req.body:', req.body);

    try {
        // const hashPassword = bcrypt.hash(req.body.password,10);

        //checking if the email is unique
        let user = await User.findOne({email:req.body.email});

            //if the user already exists:
            if(user){
                return res.status(409).json({
                    message: "User already exists"
                });
            }



            //creating user:
            let newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password
            })

            //generate a jwt token:
            const token = await JWT.generateToken(newUser)

            //saving user token
            newUser.token=token;

            res.status(200).json({
                message:"signup successful",
                token : token
            });
            // res.send(newUser)

    } catch (error) {
        console.log("error", error);
        res.json(500, {
            message: 'error occurred'
        });
    }

}

// {
//     "name":"Gaurav",
//     "email":"csdas@gmail.com",
//     "mobile":"9213231423",
//     "password":"1234abcd"

// }