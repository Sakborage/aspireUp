const Application = require('../models/Application');

exports.applyForJob = async (req, res) => {
  try {
    const { name, email, jobId, company, jobTitle, jobType } = req.body;
    const resumeUrl = req.file ? req.file.path : '';
    // status will default to "Pending" unless you set it explicitly

    const application = new Application({
      name,
      email,
      jobId,
      company,
      jobTitle,
      jobType,
      resumeUrl,
      // status: "Pending" // optional, schema default handles this
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllApplications = async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
};

exports.updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const app = await Application.findByIdAndUpdate(id, { status }, { new: true });
  res.json(app);
};
