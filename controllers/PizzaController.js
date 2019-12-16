const Food = require('../models/PizzaMenuModel');

exports.getFood = (req , res)=>{
    const foods = Food.find().then((foods)=>{res.status(200).json({foods})}).catch(err=>console.log(err.message))
}

exports.createFood = (req,res)=>{
    const food = new Food(req.body)
    food.save()
    .then(result=>{res.status(200).json({
        food:food
    });
})
}