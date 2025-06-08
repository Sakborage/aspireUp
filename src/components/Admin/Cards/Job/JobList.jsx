import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs/all")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Failed to fetch jobs:", err));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-2xl shadow h-auto flex flex-col">
      {/* Sticky top bar */}
      <div className="sticky top-0 bg-white z-10 flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 border-b border-gray-200 pb-3">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
          onClick={() => navigate("/admin/addjob")}
        >
          + Add New
        </button>
      </div>

      {/* Job cards */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="w-[340px] h-[320px] bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            {/* Logo */}
            {job.logoUrl ? (
              <img
                src={`http://localhost:5000/${job.logoUrl}`}
                alt={job.company}
                className="w-12 h-12 mb-2 object-contain"
              />
            ) : (
              <div className="w-12 h-12 mb-2 bg-gray-200 rounded" />
            )}

            {/* Job Details */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold break-words">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.company}</p>
              <p className="text-blue-500 text-xs">{job.location}</p>

              <div className="flex justify-between text-sm text-gray-700 mt-2">
                <span className="font-medium">{job.type}</span>
                <span>{job.salary}</span>
              </div>

              <p className="text-xs text-gray-600 mt-2 break-words overflow-hidden line-clamp-2 min-h-[40px]">
                {job.description}
              </p>

              {/* Applicants count - you can add this field later if you want */}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 mr-2">
                Edit
              </button>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 ml-2">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
