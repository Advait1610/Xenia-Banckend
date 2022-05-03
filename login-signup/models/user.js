const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },

    email:{
        type : String,
        required : true,
        unique : true, //as email needs to be unique
    },

    password:{
        type : String,
        required : true
    },

    contact:{
        type : Number,
        required : true
    },
},{
    timestamps:true //mongoose will store when the user was created and updated
});



//creating our model
const User = mongoose.model('User',userSchema);

module.exports = User;
