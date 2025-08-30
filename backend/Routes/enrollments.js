const express = require("express");
const router = express.Router();
const enrollController = require("../Controller/getEnrolled");

// Enroll in a subject
router.post("/enrollments", enrollController.enrollSubject);

// Get all enrollments for a user
router.get("/enrollments/:userId", enrollController.getEnrollments);

// Update progress
router.patch("/enrollments/:enrollId", enrollController.updateProgress);

module.exports = router;
