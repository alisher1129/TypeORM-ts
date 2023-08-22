const express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

router.get('/user', userController.getUsers);
router.post('/user', userController.addUser);

module.exports =  router;