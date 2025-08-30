const express = require('express');
const router = express.Router();
const registerAdmin = require('../Controller/signingAdmin');
const loggingAdmin = require('../Controller/logingAdmin')
const Admin = require('../Models/Admin')

router.post('/auth/Admin-signup', registerAdmin)
router.post('/auth/Admin-login', loggingAdmin)


router.get('/admin', async (req, res) => {
    try {
        const userDetail = await Admin.find();
        console.log(userDetail);
        res.status(200).json(userDetail);

    } catch (error) {
        console.log("Error while fetching user data", error)
         res.status(500).json({ message: "Server error" });
    }
})


module.exports = router