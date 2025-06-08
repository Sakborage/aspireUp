const Job = require('../models/Job');

exports.addJob = async (req, res) => {
  console.log('Body:', req.body);  // Log form fields
  console.log('File:', req.file);  // Log uploaded file info

  try {
    const { title, company, location, type, salary, description } = req.body;
    const logoUrl = req.file ? req.file.path : '';
    const job = new Job({
      title,
      company,
      location,
      type,
      salary,
      description,
      logoUrl
    });
    await job.save();
    res.status(201).json({ message: "Job added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
