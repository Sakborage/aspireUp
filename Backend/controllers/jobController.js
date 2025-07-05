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
    jobs.forEach(job=>{
      console.log(job._id);
    });
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

exports.updateJob = async (req, res) => {
  try {
    const jobId = req.params.id; // ✅ FIXED: Get ID from route params
    const updatedData = req.body;
    console.log(`Function is called for id: ${jobId}`);

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Update fields
    job.title = updatedData.title || job.title;
    job.company = updatedData.company || job.company;
    job.location = updatedData.location || job.location;
    job.type = updatedData.type || job.type;
    job.salary = updatedData.salary || job.salary;
    job.description = updatedData.description || job.description;

    const updatedJob = await job.save();

    res.status(200).json(updatedJob);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server error" });
  }
};