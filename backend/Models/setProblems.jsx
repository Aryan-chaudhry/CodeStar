const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Easy' },
  constraints: { type: String }, // e.g., "1 <= n <= 1000"
  inputFormat: { type: String }, // e.g., "Array of integers"
  outputFormat: { type: String }, // e.g., "Single integer"
  sampleTestCases: [
    {
      input: { type: String },
      output: { type: String }
    }
  ],
  hiddenTestCases: [
    {
      input: { type: String },
      output: { type: String } // Generated automatically from reference solution
    }
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
}, { timestamps: true });

module.exports = mongoose.model('Problem', ProblemSchema);
