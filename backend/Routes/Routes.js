const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/authController')


router.post('/signup', AuthController.signup);

module.exports = router;