const express = require('express');
const multer = require('multer');
const { addCourse, getAllCourses, deleteCourse } = require('../controllers/courseController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/add', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'syllabusPdf', maxCount: 1 }
]), addCourse);

router.get('/all', getAllCourses);


router.delete("/:id", deleteCourse);


module.exports = router;

