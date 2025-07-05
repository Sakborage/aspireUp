import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Jobs from "./JobCards";

function JobGrid() {
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
    <div className="p-4 bg-white rounded-xl shadow h-auto flex flex-col w-full max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="sticky top-0 bg-white z-10 flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 border-b border-gray-200 pb-3">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Jobs key={job._id} job={job} /> // Assuming MongoDB _id
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default JobGrid;
