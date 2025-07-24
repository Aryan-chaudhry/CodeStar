const User = require('../Model/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        console.log(name, email, password);

        if(name !== null && email !== null && password !== null){
            return res.status(400).json({ message: "All fields are required" });
        }

        // check if user already exist 
        const existingUser = User.findOne({email});
        if(existingUser){
            return res.status(409).json({message: "User All ready exists"});
        }

        // this is new user this user is not exist 
        // so lets insert it now

        // but first hash the password
        const hashedPassword = await bcrypt.hash(password,10);

        // create new user

        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        });

        // save user

        await newUser.save();
        console.log("User Added Successfully");
    } 
    catch (error) {
        console.log("SignUp error", error);
    }
}