import { useState } from "react";
import Jobs from "./JobCards";
import googleIcon from "../../../assests/images/google.png";
import adobeicon from "../../../assests/images/Adobe.png";
import walmartIcon from "../../../assests/images/walmart.jpg";
import microsoftIcon from "../../../assests/images/Mi.png";

const jobList = [
  {
    id: 1,
    logo: googleIcon,
    title: "Senior Software Developer",
    company: "Google",
    location: "Pune, Maharashtra, India",
    type: "Full-Time",
    salary: "$160K PA",
    description: "Design and develop scalable software solutions...",
  },
  {
    id: 2,
    logo: adobeicon,
    title: "Market Research Analyst",
    company: "Adobe",
    location: "Addis Ababa, Ethiopia",
    type: "Full-Time",
    salary: "$100K PA",
    description: "Analyze market trends and customer insights...",
  },
  {
    id: 3,
    logo: walmartIcon,
    title: "Pega Decisioning",
    company: "Walmart",
    location: "Moscow, Kazakhstan",
    type: "Full-Time",
    salary: "$93K PA",
    description: "Design and implement business decisioning strategies...",
  },
  {
    id: 4,
    logo: microsoftIcon,
    title: "Cloud Engineer",
    company: "Microsoft",
    location: "Seattle, USA",
    type: "Full-Time",
    salary: "$120K PA",
    description: "Manage cloud infrastructure and optimize performance...",
  },
  {
    id: 5,
    logo: microsoftIcon,
    title: "Cloud Architect",
    company: "Microsoft",
    location: "Bangalore, India",
    type: "Full-Time",
    salary: "$125K PA",
    description: "Architect scalable and secure cloud solutions...",
  },
];

function JobGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobList.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-xl shadow h-auto flex flex-col w-full max-w-7xl mx-auto">
      {/* Sticky Search Bar */}
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
        {filteredJobs.map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobGrid;
