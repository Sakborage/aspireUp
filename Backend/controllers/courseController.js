const Course = require('../models/Course');

exports.addCourse = async (req, res) => {
  try {
    const { title, description, domain, level, platform, price, oldPrice, link } = req.body;
    const imageUrl = req.files.image ? req.files.image[0].path : '';
    const syllabusPdfUrl = req.files.syllabusPdf ? req.files.syllabusPdf[0].path : '';
    const course = new Course({
      title, description, domain, level, platform, price, oldPrice, link,
      imageUrl,
      syllabusPdfUrl
    });
    await course.save();
    res.status(201).json({ message: "Course added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
