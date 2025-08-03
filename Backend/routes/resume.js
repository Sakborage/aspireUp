const express=require("express");
const { generatePdf } = require("../controllers/resumeController");
const router=express.Router();

router.post("/generateResume",generatePdf);

module.exports=router;