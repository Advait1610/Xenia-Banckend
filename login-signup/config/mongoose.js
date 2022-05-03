//requiring mongoose
const mongoose = require('mongoose');

//establishing connection to DB
mongoose.connect('mongodb://localhost:27017/Xenia_DB');
const db=mongoose.connection;

//handling error
db.on('error',console.error.bind(console,'error connecting to mongoDB'));

//Once the connection is open this message will be printed
db.once('open', function(){
    console.log('Connected successfully to mongoDB');
})

module.exports = db;