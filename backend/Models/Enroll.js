const mongoose = require("mongoose");

const EnrollSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  userId: {                // Track which user enrolled
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: Boolean,
    default: true,         // enrolled or not
  },
  progress: {              // percentage of course completed
    type: Number,
    default: 0,            // 0-100
  },
}, { timestamps: true });

const Enroll = mongoose.model("Enroll", EnrollSchema);
module.exports = Enroll;
