const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DATABASE_URL;

function connectDataBase(){
    try {
    mongoose.connect(DB_URL).then(()=>console.log("DataBase Connected Successfully!"));
    } catch (error) {
        console.log("Error in Connected the DB");
    }
}


module.exports = connectDataBase;