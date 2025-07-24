const User = require('../Model/User');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);
}