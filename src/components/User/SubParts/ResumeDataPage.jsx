import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ResumeDataPage() {
  const location = useLocation();
  const [resumeData, setResumeData] = useState(null);

  // Get extracted text (from navigation state or localStorage)
  const extractedText =
    location.state?.extractedText || localStorage.getItem("resumeText") || "";

  useEffect(() => {
    if (extractedText) {
      // Basic regex patterns
      const emailMatch = extractedText.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/
      );
      const phoneMatch = extractedText.match(
        /(\+?\d{1,3}[-.\s]?)?\(?\d{3,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{4}/
      );
      const nameMatch = extractedText.split("\n")[0]; // Assume first line is name

      // Try to find Skills & Experience keywords
      const skillsMatch = extractedText.match(/Skills([\s\S]*?)(Experience|Education|$)/i);
      const expMatch = extractedText.match(/Experience([\s\S]*?)(Education|Skills|$)/i);
      const educationMatch = extractedText.match(/Education([\s\S]*?)(Experience|Skills|$)/i);

      setResumeData({
        name: nameMatch?.trim() || "Not Found",
        email: emailMatch ? emailMatch[0] : "Not Found",
        phone: phoneMatch ? phoneMatch[0] : "Not Found",
        skills: skillsMatch ? skillsMatch[1].trim() : "Not Found",
        experience: expMatch ? expMatch[1].trim() : "Not Found",
        education: educationMatch ? educationMatch[1].trim() : "Not Found",
        raw: extractedText,
      });
    }
  }, [extractedText]);

  if (!extractedText) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No resume data available. Please upload first.</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Extracted Resume Data</h2>
      {resumeData ? (
        <div style={{ marginTop: "15px" }}>
          <p><strong>Name:</strong> {resumeData.name}</p>
          <p><strong>Email:</strong> {resumeData.email}</p>
          <p><strong>Phone:</strong> {resumeData.phone}</p>
          <p><strong>Skills:</strong><br /> {resumeData.skills}</p>
          <p><strong>Experience:</strong><br /> {resumeData.experience}</p>
          <p><strong>Education:</strong><br /> {resumeData.education}</p>

          <h3 style={{ marginTop: "20px" }}>Full Extracted Text</h3>
          <pre style={{ background: "#f5f5f5", padding: "10px" }}>
            {resumeData.raw}
          </pre>
        </div>
      ) : (
        <p>Processing resume data...</p>
      )}
    </div>
  );
}
    