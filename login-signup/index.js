const express = require('express');
const app=express();
const port = 4000;
app.listen(port,function(err){
    if(err) {
        console.log(err);
        return;
    }

    console.log('server is running on port',port);
})