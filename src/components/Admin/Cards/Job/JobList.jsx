import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/jobs/all")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Failed to fetch jobs:", err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/v1/jobs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
        alert("Job deleted successfully!");
      } else {
        alert("Failed to delete job.");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Something went wrong while deleting.");
    }
  };

  const handleEditClick = (job) => {
    setSelectedJob({ ...job }); // clone the object to avoid direct mutation
    setShowModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      
      const res = await fetch(`http://localhost:5000/api/v1/jobs/${selectedJob._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedJob),
      });
       console.log(`Handle Update for ${selectedJob._id}`);

      if (res.ok) {
        const updatedJob = await res.json();
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job._id === updatedJob._id ? updatedJob : job))
        );
        setShowModal(false);
        alert("Job updated successfully!");
      } else {
        alert("Failed to update job.");
      }
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Something went wrong.");
    }
  };

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
            {job.logoUrl ? (
              <img
                src={`http://localhost:5000/${job.logoUrl}`}
                alt={job.company}
                className="w-12 h-12 mb-2 object-contain"
              />
            ) : (
              <div className="w-12 h-12 mb-2 bg-gray-200 rounded" />
            )}

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
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 mr-2"
                onClick={() => handleEditClick(job)}
              >
                Edit
              </button>
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 ml-2"
                onClick={() => handleDelete(job._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
{showModal && selectedJob && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white px-6 py-6 rounded-2xl w-[90%] sm:w-[450px] max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6 text-center">Edit Job</h2>

      <form
        onSubmit={handleUpdate}
        className="space-y-4 overflow-x-auto"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Title</label>
          <input
            type="text"
            className="w-full min-w-[300px] border border-gray-300 rounded-lg px-3 py-2"
            value={selectedJob.title}
            onChange={(e) => setSelectedJob({ ...selectedJob, title: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Company</label>
          <input
            type="text"
            className="w-full min-w-[300px] border border-gray-300 rounded-lg px-3 py-2"
            value={selectedJob.company}
            onChange={(e) => setSelectedJob({ ...selectedJob, company: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Location</label>
          <input
            type="text"
            className="w-full min-w-[300px] border border-gray-300 rounded-lg px-3 py-2"
            value={selectedJob.location}
            onChange={(e) => setSelectedJob({ ...selectedJob, location: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Job Type</label>
          <input
            type="text"
            className="w-full min-w-[300px] border border-gray-300 rounded-lg px-3 py-2"
            value={selectedJob.type}
            onChange={(e) => setSelectedJob({ ...selectedJob, type: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Salary</label>
          <input
            type="text"
            className="w-full min-w-[300px] border border-gray-300 rounded-lg px-3 py-2"
            value={selectedJob.salary}
            onChange={(e) => setSelectedJob({ ...selectedJob, salary: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
          <textarea
            rows={3}
            className="w-full min-w-[300px] border border-gray-300 rounded-lg px-3 py-2 resize-x"
            value={selectedJob.description}
            onChange={(e) => setSelectedJob({ ...selectedJob, description: e.target.value })}
          ></textarea>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
)}


    </div>
  );
}

export default JobList;
