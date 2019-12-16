const mongooes = require('mongoose');

const foodSchema = new mongooes.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type:String,
        required:true
    }


});
module.exports = mongooes.model("Food",foodSchema);