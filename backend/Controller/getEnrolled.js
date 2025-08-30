const Enroll = require('../Models/Enroll');

// Enroll a user in a subject
exports.enrollSubject = async (req, res) => {
  try {
    const { userId, subjectName } = req.body;

    // Check if already enrolled
    const existing = await Enroll.findOne({ userId, subjectName });
    if (existing) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    // Save new enrollment
    const enrollment = new Enroll({ userId, subjectName });
    await enrollment.save();
    res.json(enrollment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all enrollments for a user
exports.getEnrollments = async (req, res) => {
  try {
    const { userId } = req.params;
    const enrollments = await Enroll.find({ userId });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Optional: Update progress
exports.updateProgress = async (req, res) => {
  try {
    const { enrollId } = req.params;
    const { progress } = req.body;

    const enrollment = await Enroll.findByIdAndUpdate(
      enrollId,
      { progress },
      { new: true }
    );

    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
