import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Jobs from "./JobCards";

function JobRow() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs/all")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Failed to fetch jobs:", err));
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex space-x-4 overflow-x-auto no-scrollbar p-4 w-full flex-nowrap scroll-smooth snap-x snap-mandatory">
        {jobs.slice(0, 5).map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobRow;
