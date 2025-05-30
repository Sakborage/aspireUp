import React, { useState } from "react";
import googleIcon from "../../../../assests/images/google.png";
import adobeicon from "../../../../assests/images/Adobe.png";

import microsoftIcon from "../../../../assests/images/Mi.png";

import walmartIcon from "../../../../assests/images/walmart.jpg";
import { useNavigate } from "react-router-dom";


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
        applications:120,
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
        applications:120,
    },
    {
        id: 3,
        logo: walmartIcon,
        title: "Pega Decisioning",
        company: "Walmart",
        location: "Moscow, Kazakhstan",
        type: "Full-Time",
        salary: "$93K PA",
        description: "Design and implement having knoe hbsjhg hsvjhsaf shvys decisioning...",
         applications:120,
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
        applications:120,
    }
];
function  JobList() {

     const navigate=useNavigate();
      const [searchTerm, setSearchTerm] = useState("");

    const filteredJobs = jobList.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return ( 
       <div className="p-4 bg-white rounded-2xl shadow h-auto flex flex-col">
      {/* Sticky top bar */}
      <div className="sticky top-0 bg-white z-10 flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 border-b border-gray-200 pb-3">
        <input
          type="text"
          placeholder="Search courses..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition "  onClick={() => navigate("/addjob")}>
          + Add New
        </button>
      </div>

      {/* Course cards */}
   <div className="flex flex-wrap  items-center justify-center gap-6">
  {filteredJobs.map((job) => (
    <div
      key={job.id}
      className="w-[340px] h-[320px] bg-white shadow-md rounded-lg p-4 flex flex-col"
    >
      {/* Logo */}
      <img
        src={job.logo}
        alt={job.company}
        className="w-12 h-12 mb-2 object-contain"
      />

      {/* Job Details - Flexible Content Area */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold break-words">{job.title}</h3>
        <p className="text-sm text-gray-500">{job.company}</p>
        <p className="text-blue-500 text-xs">{job.location}</p>

        {/* Job Type & Salary */}
        <div className="flex justify-between text-sm text-gray-700 mt-2">
          <span className="font-medium">{job.type}</span>
          <span>{job.salary}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 mt-2 break-words overflow-hidden line-clamp-2 min-h-[40px]">
          {job.description}
        </p>

        {/* Applicants count */}
        <p className="text-xs text-gray-500 mt-1">Applicants: {job.applications}</p>
      </div>

      {/* Buttons at bottom */}
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