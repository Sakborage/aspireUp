import React, { useState } from 'react';
import TemplateGrid from './templateGrid';
import axios from "axios";



function ResumeForm() {
  const [currentTab, setCurrentTab] = useState(0);

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

    // Convert response to downloadable PDF
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

  // ✅ Reset form data
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Resume data captured!");
  };

  const tabs = [
    "Personal Details",
    "Experience",
    "Projects & Education",
    "Skills",
    "Summary",
    "Extra Details"
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">Resume Generator</h2>

      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentTab === index ? "bg-teal-800 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrentTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
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
            <button type="submit" className="ml-auto px-6 py-2 bg-teal-700 text-white rounded-xl font-medium " onClick={handleFormSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
