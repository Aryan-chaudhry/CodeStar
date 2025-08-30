const Admin = require('../Models/Admin.js');
const bcrypt = require('bcrypt');

const registerAdmin = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log("Received data from frontend:", { firstName, lastName, email, password });

        // check if admin exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new admin
        const newAdmin = new Admin({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        await newAdmin.save();
        console.log("Admin registered successfully");

        res.status(201).json({
            message: "Admin registered successfully",
            admin: {
                id: newAdmin._id,
                firstName: newAdmin.firstName,
                lastName: newAdmin.lastName,
                email: newAdmin.email
            }
        });

    } catch (error) {
        console.error("Error in register Admin:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = registerAdmin;
