import React, { useState, useEffect } from 'react';
import TemplateGrid from './templateGrid';
import axios from "axios";

function ResumeForm() {
  const [mainMode, setMainMode] = useState('generate'); // 'generate' or 'upload'
  const [currentTab, setCurrentTab] = useState(0);

  // Upload/Extract states
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [extractedData, setExtractedData] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    objective: '',
    education: [],
    experience: [],
    skills: '',
    projects: [],
    certifications: '',
    languages: '',
    hobbies: '',
    selectedTemplate: '',
  });

  const [experienceEntry, setExperienceEntry] = useState({
    jobTitle: '',
    employer: '',
    description: '',
    city: '',
    country: '',
    startDate: '',
    endDate: ''
  });

  const [educationEntry, setEducationEntry] = useState({
    level: '',
    school: '',
    location: '',
    graduationDate: '',
    percentage: ''
  });

  const [projectEntry, setProjectEntry] = useState({
    title: '',
    techStack: '',
    description: ''
  });

  // Restore extracted text from localStorage
  useEffect(() => {
    const savedText = localStorage.getItem("resumeText");
    if (savedText) {
      setExtractedText(savedText);
      parseExtractedText(savedText);
    }
  }, []);

  // Parse extracted text into structured data
  const parseExtractedText = (text) => {
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/);
    const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{4}/);
    const nameMatch = text.split("\n")[0];

    const skillsMatch = text.match(/Skills([\s\S]*?)(Experience|Education|$)/i);
    const expMatch = text.match(/Experience([\s\S]*?)(Education|Skills|$)/i);
    const educationMatch = text.match(/Education([\s\S]*?)(Experience|Skills|$)/i);
    const objectiveMatch = text.match(/(Objective|Summary|Profile)([\s\S]*?)(Experience|Education|Skills|$)/i);

    const parsed = {
      name: nameMatch?.trim() || "",
      email: emailMatch ? emailMatch[0] : "",
      phone: phoneMatch ? phoneMatch[0] : "",
      skills: skillsMatch ? skillsMatch[1].trim() : "",
      experience: expMatch ? expMatch[1].trim() : "",
      education: educationMatch ? educationMatch[1].trim() : "",
      objective: objectiveMatch ? objectiveMatch[2].trim() : "",
      raw: text,
    };

    setExtractedData(parsed);
  };

  // Auto-fill form with extracted data
  const autoFillForm = () => {
    if (extractedData) {
      setFormData(prev => ({
        ...prev,
        name: extractedData.name || prev.name,
        email: extractedData.email || prev.email,
        phone: extractedData.phone || prev.phone,
        objective: extractedData.objective || prev.objective,
        skills: extractedData.skills || prev.skills,
      }));
      setMainMode('generate');
      alert("Form auto-filled with extracted data!");
    }
  };

  // File upload handlers
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setUploadError("");
    
    if (selectedFile) {
      console.log("File selected:", selectedFile.name, "Size:", selectedFile.size);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadError("Please select a file first");
      return;
    }

    setIsUploading(true);
    setUploadError("");

    const formDataUpload = new FormData();
    formDataUpload.append("resume", file);

    try {
      console.log("Starting upload for file:", file.name);
      
      const response = await axios.post(
        "http://localhost:5000/api/v1/resume/uploadResume",
        formDataUpload,
        {
          headers: { 
            "Content-Type": "multipart/form-data" 
          },
          timeout: 60000
        }
      );

      const text = (response.data.text || "").trim();
      
      if (text) {
        setExtractedText(text);
        localStorage.setItem("resumeText", text);
        parseExtractedText(text);
        console.log("Text extracted successfully, length:", text.length);
        alert("Resume text extracted successfully!");
      } else {
        setUploadError("No text could be extracted from the file.");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      
      let errorMessage = "Failed to upload or extract resume.";
      if (err.response) {
        errorMessage = err.response.data?.error || errorMessage;
      } else if (err.request) {
        errorMessage = "Network error - please check if the server is running.";
      }
      
      setUploadError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const clearExtractedData = () => {
    setExtractedText("");
    setExtractedData(null);
    setFile(null);
    localStorage.removeItem("resumeText");
    setUploadError("");
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  };

  // Form generation handlers
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/resume/generateResume',
        formData,
        {
          responseType: 'blob', 
        }
      );

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      link.click();

      alert("Resume downloaded successfully!");
    } catch (error) {
      console.error("API Error:", error);
      alert("There was an error generating your resume.");
    }

    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      objective: '',
      education: [],
      experience: [],
      skills: '',
      projects: [],
      certifications: '',
      languages: '',
      hobbies: '',
      selectedTemplate: '',
    });

    setExperienceEntry({
      jobTitle: '',
      employer: '',
      description: '',
      city: '',
      country: '',
      startDate: '',
      endDate: ''
    });

    setEducationEntry({
      level: '',
      school: '',
      location: '',
      graduationDate: '',
      percentage: ''
    });

    setProjectEntry({
      title: '',
      techStack: '',
      description: ''
    });

    setCurrentTab(0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e) => {
    setExperienceEntry({ ...experienceEntry, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    setEducationEntry({ ...educationEntry, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (e) => {
    setProjectEntry({ ...projectEntry, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    setFormData({ ...formData, experience: [...formData.experience, experienceEntry] });
    setExperienceEntry({ jobTitle: '', employer: '', description: '', city: '', country: '', startDate: '', endDate: '' });
  };

  const addEducation = () => {
    setFormData({ ...formData, education: [...formData.education, educationEntry] });
    setEducationEntry({ level: '', school: '', location: '', graduationDate: '', percentage: '' });
  };

  const addProject = () => {
    setFormData({ ...formData, projects: [...formData.projects, projectEntry] });
    setProjectEntry({ title: '', techStack: '', description: '' });
  };

  const handleNext = () => setCurrentTab((prev) => prev + 1);
  const handlePrev = () => setCurrentTab((prev) => prev - 1);

  const tabs = [
    "Personal Details",
    "Experience", 
    "Projects & Education",
    "Skills",
    "Summary",
    "Extra Details"
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">Resume Builder</h2>

      {/* Main Mode Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setMainMode('generate')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            mainMode === 'generate' 
              ? 'bg-teal-700 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📝 Create New Resume
        </button>
        <button
          onClick={() => setMainMode('upload')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            mainMode === 'upload' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📄 Upload & Extract Resume
        </button>
      </div>

      {/* Upload & Extract Section */}
      {mainMode === 'upload' && (
        <div className="bg-blue-50 p-6 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Upload Resume for Text Extraction</h3>
          
          <div className="space-y-4">
            {/* File Upload */}
            <div className="flex flex-col items-center gap-4">
              <label className="bg-blue-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-700 transition-all">
                📁 Choose Resume File
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={isUploading}
                />
              </label>

              {file && (
                <div className="text-center p-3 bg-blue-100 border border-blue-300 rounded-lg">
                  <p className="text-blue-700">
                    📎 Selected: <strong>{file.name}</strong> ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!file || isUploading}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  !file || isUploading 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {isUploading ? "⏳ Processing..." : "🚀 Upload & Extract"}
              </button>
            </div>

            {/* Error Display */}
            {uploadError && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ❌ {uploadError}
              </div>
            )}

            {/* Extraction Results */}
            {extractedData && (
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="text-xl font-bold text-green-700 mb-4">✅ Extraction Results</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div><strong>Name:</strong> {extractedData.name || "Not found"}</div>
                  <div><strong>Email:</strong> {extractedData.email || "Not found"}</div>
                  <div><strong>Phone:</strong> {extractedData.phone || "Not found"}</div>
                  <div><strong>Text Length:</strong> {extractedData.raw.length} characters</div>
                </div>

                <div className="mb-4">
                  <strong>Skills:</strong>
                  <p className="text-sm bg-gray-100 p-2 rounded mt-1">
                    {extractedData.skills || "Not found"}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={autoFillForm}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    ✨ Auto-Fill Form
                  </button>
                  <button
                    onClick={clearExtractedData}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    🗑️ Clear Data
                  </button>
                </div>

                {/* Raw Text Preview */}
                <details className="mt-4">
                  <summary className="cursor-pointer font-semibold text-green-700">📜 View Raw Extracted Text</summary>
                  <pre className="bg-gray-100 p-4 rounded mt-2 text-xs max-h-64 overflow-auto">
                    {extractedData.raw}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Resume Generation Section */}
      {mainMode === 'generate' && (
        <div>
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  currentTab === index ? "bg-teal-800 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setCurrentTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 text-gray-800">
            {currentTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['name', 'email', 'phone', 'location', 'linkedin', 'github'].map((field, i) => (
                  <div key={i}>
                    <label className="block font-semibold mb-1 capitalize">{field}</label>
                    <input
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                ))}
              </div>
            )}

            {currentTab === 1 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Add Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(experienceEntry).map((field, i) => (
                    <div key={i}>
                      <label className="block mb-1 font-semibold capitalize">{field}</label>
                      <input
                        type={field.toLowerCase().includes('date') ? 'date' : 'text'}
                        name={field}
                        value={experienceEntry[field]}
                        onChange={handleExperienceChange}
                        placeholder={field}
                        className="w-full border border-gray-300 p-3 rounded-xl"
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addExperience}
                  className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-xl"
                >
                  Add Experience
                </button>

                <table className="table-auto w-full mt-4 border">
                  <thead>
                    <tr>
                      {Object.keys(experienceEntry).map((key) => (
                        <th key={key} className="border px-2 py-1 text-left capitalize">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {formData.experience.map((exp, idx) => (
                      <tr key={idx}>
                        {Object.keys(experienceEntry).map((key) => (
                          <td key={key} className="border px-2 py-1">
                            {exp[key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {currentTab === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.keys(projectEntry).map((field, i) => (
                    <input
                      key={i}
                      name={field}
                      value={projectEntry[field]}
                      onChange={handleProjectChange}
                      placeholder={field}
                      className="w-full border border-gray-300 p-3 rounded-xl"
                    />
                  ))}
                </div>
                <button type="button" onClick={addProject} className="mt-2 px-4 py-2 bg-teal-700 text-white rounded-xl">
                  Add Project
                </button>
                <table className="table-auto w-full mt-4 border">
                  <thead>
                    <tr>
                      {Object.keys(projectEntry).map((key) => (
                        <th key={key} className="border px-2 py-1 text-left capitalize">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {formData.projects.map((proj, idx) => (
                      <tr key={idx}>
                        {Object.keys(projectEntry).map((key) => (
                          <td key={key} className="border px-2 py-1">{proj[key]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h3 className="text-xl font-bold mt-10">Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.keys(educationEntry).map((field, i) => (
                    <input
                      key={i}
                      name={field}
                      value={educationEntry[field]}
                      onChange={handleEducationChange}
                      placeholder={field}
                      className="w-full border border-gray-300 p-3 rounded-xl"
                    />
                  ))}
                </div>
                <button type="button" onClick={addEducation} className="mt-2 px-4 py-2 bg-teal-700 text-white rounded-xl">
                  Add Education
                </button>
                <table className="table-auto w-full mt-4 border">
                  <thead>
                    <tr>
                      {Object.keys(educationEntry).map((key) => (
                        <th key={key} className="border px-2 py-1 text-left capitalize">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {formData.education.map((edu, idx) => (
                      <tr key={idx}>
                        {Object.keys(educationEntry).map((key) => (
                          <td key={key} className="border px-2 py-1">{edu[key]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {currentTab === 3 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Skills</h3>
                <input
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Comma-separated: Java, React, SQL"
                  className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {currentTab === 4 && (
              <div>
                <label className="block mb-1 font-semibold">Career Objective *</label>
                <textarea
                  name="objective"
                  value={formData.objective}
                  required
                  placeholder="Describe your career objective..."
                  onChange={handleChange}
                  rows="4"
                  className="form-textarea w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {currentTab === 5 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['certifications', 'languages', 'hobbies'].map((field, i) => (
                    <div key={i}>
                      <label className="block font-semibold mb-1 capitalize">{field}</label>
                      <input
                        name={field}
                        value={formData[field]}
                        placeholder={`Enter your ${field}`}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <TemplateGrid
                    selectedTemplate={formData.selectedTemplate}
                    setSelectedTemplate={(title) =>
                      setFormData({ ...formData, selectedTemplate: title })
                    }
                  />
                </div>
              </>
            )}

            <div className="flex justify-between pt-8">
              {currentTab > 0 && (
                <button type="button" onClick={handlePrev} className="px-6 py-2 bg-gray-300 rounded-xl font-medium">
                  Previous
                </button>
              )}
              {currentTab < tabs.length - 1 ? (
                <button type="button" onClick={handleNext} className="ml-auto px-6 py-2 bg-teal-700 text-white rounded-xl font-medium">
                  Next
                </button>
              ) : (
                <button type="submit" className="ml-auto px-6 py-2 bg-teal-700 text-white rounded-xl font-medium" onClick={handleFormSubmit}>
                  Generate Resume
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ResumeForm;