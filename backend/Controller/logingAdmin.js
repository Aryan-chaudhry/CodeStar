const Admin = require('../Models/Admin');
const bcrypt = require('bcrypt');

const loggingAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if Admin exists
        const existingAdmin = await Admin.findOne({ email });
        if (!existingAdmin) {
            return res.status(401).json({ message: "Wrong email or password" });
        }

        // compare passwords
        const isMatch = await bcrypt.compare(password, existingAdmin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Wrong email or password" });
        }

        // success
        return res.status(200).json({ message: "Login successful", admin: existingAdmin });
    } catch (error) {
        console.error("Error in logging Admin:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = loggingAdmin;
