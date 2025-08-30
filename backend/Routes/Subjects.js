const express = require('express');
const router = express.Router();
const registerSubject = require('../Controller/addSubjects')
const Subject = require('../Models/Subjects')

router.post('/add-subjects', registerSubject);

router.get('/subjects', async (req, res) => {
  try {
    const subjects = await Subject.find();
    console.log(subjects);
    res.status(200).json(subjects);
  } catch (err) {
    console.error("Error fetching subjects:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router