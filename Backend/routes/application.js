const express = require('express');
const multer = require('multer');
const { applyForJob } = require('../controllers/applicationController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/apply', upload.single('resume'), applyForJob);

module.exports = router;
