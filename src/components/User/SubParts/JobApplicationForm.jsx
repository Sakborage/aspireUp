import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function JobApplicationForm() {
  const location = useLocation();
  const job = location.state?.job || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "", // Optionally pre-fill if user is logged in
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("resume", formData.resume);
    data.append("jobId", job._id);
    data.append("company", job.company);
    data.append("jobTitle", job.title);
    data.append("jobType", job.type);

    // Send to backend endpoint for applications
    await fetch("http://localhost:5000/api/v1/applications/apply", {
      method: "POST",
      body: data,
    });
    alert("Application submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-8 bg-white rounded-xl shadow-md max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-accent">Apply for {job.title}</h2>
      <div>
        <label>App ID</label>
        <input value={job._id || ""} className="border rounded-lg px-4 py-2 w-full" disabled />
      </div>
      <div>
        <label>Company Name</label>
        <input value={job.company || ""} className="border rounded-lg px-4 py-2 w-full" disabled />
      </div>
      <div>
        <label>Job Title</label>
        <input value={job.title || ""} className="border rounded-lg px-4 py-2 w-full" disabled />
      </div>
      <div>
        <label>Job Type</label>
        <input value={job.type || ""} className="border rounded-lg px-4 py-2 w-full" disabled />
      </div>
      <div>
        <label>Your Email</label>
        <input name="email" value={formData.email} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full" required />
      </div>
      <div>
        <label>Your Name</label>
        <input name="name" value={formData.name} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full" required />
      </div>
      <div>
        <label>Upload Resume (PDF)</label>
        <input name="resume" type="file" accept="application/pdf" onChange={handleChange} className="border rounded-lg px-4 py-2 w-full" required />
      </div>
      <button type="submit" className="bg-accent text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
        Submit Application
      </button>
    </form>
  );
}
