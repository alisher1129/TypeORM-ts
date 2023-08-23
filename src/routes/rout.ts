const express = require('express');
var router = express.Router();
const userController = require('../controller/userController');
const profileController = require("../controller/profileController")

router.get('/user', userController.getUsers);
router.post('/user', userController.addUser);


router.get('/profile', profileController.getProfile);
router.post('/profile/:userId', profileController.addProfile);

module.exports =  router;