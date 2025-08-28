const express = require('express');
const router = express.Router();
const registerAdmin = require('../Controller/adminAuthentication');

router.post('/auth/Admin-signup', registerAdmin)


module.exports = router