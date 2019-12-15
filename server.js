const express = require('express');


const serverWork = express();



//Testing if the server still good?
serverWork.get("/",(req,res)=>{
    res.send('hello  Pizza server');
});
serverWork.listen(5051 , ()=>{console.log('Pizza Server is working , Great!!!')});