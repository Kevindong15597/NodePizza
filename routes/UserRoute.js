const express = require('express');
const UserController = require('../controllers/UserController');


const router = express.Router();
router.get('/getUser',UserController.getUser);
router.post('/createUser',UserController.createUser);


module.exports = router;