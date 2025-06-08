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

exports.deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;  

    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Delete job error:", error);
    res.status(500).json({ error: "Failed to delete job" });
  }
};




