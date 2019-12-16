const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

const serverWork = express();
dotenv.config();
//Database connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true }
).then(()=>console.log('Database connected!!'));
//check if database error
mongoose.connection.on("error",err=>{
    console.log(`DB connection error: ${err.message}`);
})

//Router handle
const pizzaRouter = require('./routes/PizzaRoute');
const userRouter = require('./routes/UserRoute');

serverWork.use(bodyparser());
serverWork.use('/food',pizzaRouter);
serverWork.use('/user',userRouter);


//Testing if the server still good?
serverWork.get("/",(req,res)=>{
    res.send('hello  Pizza server');
});
serverWork.listen(process.env.PORT , ()=>{console.log('Pizza Server is working , Great!!')});