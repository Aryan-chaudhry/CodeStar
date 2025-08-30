    const User = require('../Models/User');
    const bcrypt = require('bcrypt');

    const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log("📩 Data received from frontend:", {
        firstName,
        lastName,
        email,
        password,
        });

        // check missing fields
        if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
        }

        // check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        });

        await newUser.save();
        console.log("✅ User registered successfully:", newUser.email);

        res.status(201).json({
        message: "User registered successfully",
        user: {
            id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
        },
        });
    } catch (error) {
        console.error("❌ Error in registerUser:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = registerUser;