const express = require('express');
const router = express.Router();
const registerUser = require('../Controller/signingUser');
const loggingUser = require('../Controller/logingUser');
const User = require('../Models/User')

router.post('/auth/signup', registerUser)
router.post('/auth/login', loggingUser)

router.get('/user', async (req, res) => {
    try {
        const userDetail = await User.find();
        console.log(userDetail);
        res.status(200).json(userDetail);

    } catch (error) {
        console.log("Error while fetching user data", error)
         res.status(500).json({ message: "Server error" });
    }
})

module.exports = router