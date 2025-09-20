const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const Tesseract = require("tesseract.js");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = "uploads/";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Helper function to clean up uploaded files
const cleanupFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Cleaned up file: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error cleaning up file ${filePath}:`, error);
  }
};

// Route for upload + text extraction
router.post("/uploadResume", upload.single("resume"), async (req, res) => {
  let filePath = null;
  
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    filePath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();
    let extractedText = "";

    console.log(`Processing file: ${req.file.originalname}, Extension: ${ext}`);

    if (ext === ".pdf") {
      console.log("Processing PDF...");
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(dataBuffer);
      extractedText = data.text;
    } else if (ext === ".docx" || ext === ".doc") {
      console.log("Processing Word document...");
      const result = await mammoth.extractRawText({ path: filePath });
      extractedText = result.value;
    } else if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
      console.log("Processing image with OCR...");
      const result = await Tesseract.recognize(filePath, "eng", {
        logger: m => console.log(m) // Log OCR progress
      });
      extractedText = result.data.text;
    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    console.log("Extraction successful, text length:", extractedText.length);
    
    // Clean up the uploaded file
    cleanupFile(filePath);
    
    res.json({ 
      text: extractedText,
      originalName: req.file.originalname,
      fileType: ext 
    });

  } catch (err) {
    console.error("Error extracting text:", err);
    
    // Clean up file in case of error
    if (filePath) {
      cleanupFile(filePath);
    }
    
    res.status(500).json({ 
      error: "Failed to extract text", 
      details: err.message 
    });
  }
});

// Separate route for PDF generation (if you still need this)
router.post("/generatePdf", async (req, res) => {
  try {
    // You'll need to implement this function in CommonJS format
    // or convert your entire backend to ES modules
    res.status(501).json({ error: "PDF generation not implemented yet" });
  } catch (error) {
    res.status(500).json({ error: "PDF generation failed" });
  }
});

module.exports = router;