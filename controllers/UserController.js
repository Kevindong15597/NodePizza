const User = require('../models/UserModel');

exports.getUser = (req , res)=>{
    const users = User.find().then((users)=>{res.status(200).json({users})}).catch(err=>console.log(err.message))
}

exports.createUser = (req,res)=>{
    const user = new User(req.body)
    user.save()
    .then(result=>{res.status(200).json({
        user:user
    });
})
}