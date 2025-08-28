const express = require('express');
const router = express.Router();
const registerUser = require('../Controller/userAuthenticatio');

router.post('/auth/signup', registerUser)


module.exports = router