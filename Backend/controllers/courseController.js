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

exports.deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Delete course error:", error);
    res.status(500).json({ error: "Failed to delete course" });
  }
};

