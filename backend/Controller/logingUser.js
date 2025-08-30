const User = require('../Models/User');
const bcrypt = require('bcrypt');

const loggingUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ message: "Wrong email or password" });
        }

        // compare passwords
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Wrong email or password" });
        }

        // success
        return res.status(200).json({ message: "Login successful", user: existingUser });
    } catch (error) {
        console.error("Error in logging User:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = loggingUser;
