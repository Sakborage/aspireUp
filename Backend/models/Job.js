const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  salary: String,
  description: { type: String, required: true },
  logoUrl: String, // store file path or URL
});

module.exports = mongoose.model('Job', jobSchema);
