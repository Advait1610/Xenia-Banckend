const express = require('express');
const app=express();
const port = 4000;



const db=require('./config/mongoose')




app.use('/', require('./routes/routeindex.js'));





app.listen(port,function(err){
    if(err) {
        console.log(err);
        return;
    }
    console.log('server is running on port',port);
})