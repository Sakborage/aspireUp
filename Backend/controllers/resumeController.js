import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

// Get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generatePdf = async (req, res) => {
  const formData = req.body;
  const selectedTemplate = formData.selectedTemplate || "template1"; // default fallback

  try {
    // Dynamically select the CSS and EJS file based on the selected template
    const cssPath = path.join(__dirname, `../../public/css/${selectedTemplate}.css`);
    const ejsPath = path.join(__dirname, `../views/${selectedTemplate}.ejs`);

    // Read CSS file
    const cssContent = fs.readFileSync(cssPath, "utf-8");

    // Render EJS with form data
    let html = await ejs.renderFile(ejsPath, { data: formData });

    // Inject CSS into HTML
    html = html.replace('</head>', `<style>${cssContent}</style></head>`);

    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // Set HTML content
    await page.setContent(html, {
      waitUntil: "domcontentloaded",
    });

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // Set headers and send PDF
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=${selectedTemplate}_resume.pdf`,
      "Content-Length": pdfBuffer.length,
    });

    res.send(pdfBuffer);
  } catch (err) {
    console.error("PDF generation error:", err);
    res.status(500).send("Error generating PDF");
  }
};
