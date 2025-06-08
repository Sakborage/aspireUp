import { useState } from "react";

export default function AddJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    logo: null,
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
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      const res = await fetch('http://localhost:5000/api/jobs/add', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      alert(result.message || "Job added!");
    } catch (err) {
      alert("Error adding job");
    }
  };

  return (
    <div className="min-w-full min-h-screen bg-gray-200 flex justify-center pt-12">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-accent">Add New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location (City, State, Country)"
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />

          <select
            name="type"
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select Job Type
            </option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>

          <input
            type="text"
            name="salary"
            placeholder="Salary (e.g. $160K PA)"
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />

          <textarea
            name="description"
            placeholder="Job Description"
            rows="4"
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />

          <label className="block">
            <span className="text-sm">Company Logo (optional)</span>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full text-sm file:border file:rounded file:px-3 file:py-2 file:bg-gray-100 file:text-gray-700"
            />
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-accent text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
