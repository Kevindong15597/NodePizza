const express = require('express');
const pizzaController = require('../controllers/PizzaController');


const router = express.Router();
router.get('/getFood',pizzaController.getFood);
router.post('/createFood',pizzaController.createFood);


module.exports = router;