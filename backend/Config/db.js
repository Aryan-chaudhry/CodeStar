const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URI)
        console.log("DataBase Connected")
    } catch (error) {
        console.log("Sorry database conectivity issue", {
            issue:{
                error
            }
        })
    }
}

module.exports = connectDB;