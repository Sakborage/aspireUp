const express = require('express');
const multer = require('multer');
const {addJob,getAllJobs,deleteJob,updateJob}=require('../controllers/jobController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/add', upload.single('logo'), addJob);
router.get('/all', getAllJobs);
router.delete('/:id',deleteJob);
router.put('/:id',updateJob);

module.exports = router;
