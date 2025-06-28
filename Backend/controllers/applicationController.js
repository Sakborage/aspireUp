const Application = require('../models/Application');

exports.applyForJob = async (req, res) => {
  try {
    const { name, email, jobId, company, jobTitle, jobType } = req.body;
    const resumeUrl = req.file ? req.file.path : '';

    const application = new Application({
      name,
      email,
      jobId,
      company,
      jobTitle,
      jobType,
      resumeUrl
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
