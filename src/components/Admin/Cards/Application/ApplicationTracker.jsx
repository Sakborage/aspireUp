import React, { useState } from "react";

// Dummy data for applications
const dummyApplications = [
  {
    id: "APP001",
    userName: "Ravi Kumar",
    email: "ravi@example.com",
    jobTitle: "Frontend Developer",
    company: "Techify",
    jobType: "Full-Time",
    resume: "/resumes/ravi_resume.pdf",
    date: "2025-05-15",
    status: "Pending",
  },
  {
    id: "APP002",
    userName: "Sneha Patel",
    email: "sneha@example.com",
    jobTitle: "Backend Developer",
    company: "CodeCraft",
    jobType: "Part-Time",
    resume: "/resumes/sneha_resume.pdf",
    date: "2025-05-20",
    status: "Interviewing",
  },
  {
    id: "APP001",
    userName: "Ravi Kumar",
    email: "ravi@example.com",
    jobTitle: "Frontend Developer",
    company: "Techify",
    jobType: "Full-Time",
    resume: "/resumes/ravi_resume.pdf",
    date: "2025-05-15",
    status: "Pending",
  },
  {
    id: "APP002",
    userName: "Sneha Patel",
    email: "sneha@example.com",
    jobTitle: "Backend Developer",
    company: "CodeCraft",
    jobType: "Part-Time",
    resume: "/resumes/sneha_resume.pdf",
    date: "2025-05-20",
    status: "Interviewing",
  },{
    id: "APP001",
    userName: "Ravi Kumar",
    email: "ravi@example.com",
    jobTitle: "Frontend Developer",
    company: "Techify",
    jobType: "Full-Time",
    resume: "/resumes/ravi_resume.pdf",
    date: "2025-05-15",
    status: "Pending",
  },
  {
    id: "APP002",
    userName: "Sneha Patel",
    email: "sneha@example.com",
    jobTitle: "Backend Developer",
    company: "CodeCraft",
    jobType: "Part-Time",
    resume: "/resumes/sneha_resume.pdf",
    date: "2025-05-20",
    status: "Interviewing",
  },
];

const statuses = ["Pending", "Interviewing", "Hired", "Rejected"];

function ApplicationTracker  () 
 {
  const [applications, setApplications] = useState(dummyApplications);
  const [filters, setFilters] = useState({
    company: "",
    jobTitle: "",
    jobType: "",
    date: "",
  });

  const handleStatusChange = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const filteredApps = applications.filter((app) => {
    return (
      (filters.company === "" || app.company === filters.company) &&
      (filters.jobTitle === "" || app.jobTitle === filters.jobTitle) &&
      (filters.jobType === "" || app.jobType === filters.jobType) &&
      (filters.date === "" || app.date === filters.date)
    );
  });

  // Extract unique filter values
  const uniqueCompanies = [...new Set(applications.map((a) => a.company))];
  const uniqueTitles = [...new Set(applications.map((a) => a.jobTitle))];
  const uniqueTypes = [...new Set(applications.map((a) => a.jobType))];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-teal-700">📋 Application Tracker</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border px-3 py-2 rounded-md"
          value={filters.company}
          onChange={(e) => setFilters({ ...filters, company: e.target.value })}
        >
          <option value="">All Companies</option>
          {uniqueCompanies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          className="border px-3 py-2 rounded-md"
          value={filters.jobTitle}
          onChange={(e) => setFilters({ ...filters, jobTitle: e.target.value })}
        >
          <option value="">All Job Titles</option>
          {uniqueTitles.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          className="border px-3 py-2 rounded-md"
          value={filters.jobType}
          onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
        >
          <option value="">All Job Types</option>
          {uniqueTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border px-3 py-2 rounded-md"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />
      </div>

      {/* Table */}
     <div className="w-full">
  <div className="overflow-y-auto scrollbar-hide max-h-[60vh] rounded-lg border overflow-x-auto scrollbar-hide">
    <table className="w-full text-sm border-collapse">
      <thead className="bg-gray-100 sticky top-0 z-10">
        <tr>
          <th className="px-4 py-2 text-left min-w-[100px]">App ID</th>
          <th className="px-4 py-2 text-left min-w-[140px]">User</th>
          <th className="px-4 py-2 text-left min-w-[180px]">Email</th>
          <th className="px-4 py-2 text-left min-w-[160px]">Job Title</th>
          <th className="px-4 py-2 text-left min-w-[150px]">Company</th>
          <th className="px-4 py-2 text-left min-w-[120px]">Type</th>
          <th className="px-4 py-2 text-left min-w-[120px]">Resume</th>
          <th className="px-4 py-2 text-left min-w-[140px]">Date</th>
          <th className="px-4 py-2 text-left min-w-[140px]">Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredApps.length === 0 ? (
          <tr>
            <td colSpan="9" className="text-center py-4 text-gray-500">
              No applications found.
            </td>
          </tr>
        ) : (
          filteredApps.map((app) => (
            <tr key={app.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{app.id}</td>
              <td className="px-4 py-2">{app.userName}</td>
              <td className="px-4 py-2">{app.email}</td>
              <td className="px-4 py-2">{app.jobTitle}</td>
              <td className="px-4 py-2">{app.company}</td>
              <td className="px-4 py-2">{app.jobType}</td>
              <td className="px-4 py-2">
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View
                </a>
              </td>
              <td className="px-4 py-2">{app.date}</td>
              <td className="px-4 py-2">
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={app.status}
                  onChange={(e) => handleStatusChange(app.id, e.target.value)}
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default ApplicationTracker;


