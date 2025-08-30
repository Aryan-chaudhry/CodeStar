const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // prevent duplicates
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://i.pinimg.com/736x/3b/4c/41/3b4c41b14d5de925305457608a728d51.jpg",
  },
  companies: {
    type: [String], // array of tags
    default: [],
  },
});

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
