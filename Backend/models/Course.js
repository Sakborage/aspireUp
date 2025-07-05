const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  domain: String,
  level: String,
  platform: String,
  price: String,
  oldPrice: String,
  link: String,
  imageUrl: String,
  syllabusPdfUrl: String,
});

module.exports = mongoose.model('Course', courseSchema);
