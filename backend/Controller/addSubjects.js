const Subject = require('../Models/Subjects')

const registerSubject = async (req, res) => {
  try {
    const { name, content, image, companies } = req.body;

    // check if already exists
    const existingSubject = await Subject.findOne({ name });
    if (existingSubject) {
      return res.status(400).json({ message: "Subject already exists" });
    }

    // create new subject
    const newSubject = new Subject({
      name,
      content,
      image: image || undefined, // if frontend sends image use it, else default
      companies: companies || [],
    });

    await newSubject.save();

    res.status(201).json({ message: "Subject created successfully", subject: newSubject });
  } catch (err) {
    console.error("Error creating subject:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports =  registerSubject ;
