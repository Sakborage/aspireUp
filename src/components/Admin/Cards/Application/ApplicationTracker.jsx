import React, { useState, useEffect } from "react";

const statuses = ["Pending", "Interviewing", "Hired", "Rejected"];

function ApplicationTracker() {
  const [applications, setApplications] = useState([]);
  const [filters, setFilters] = useState({
    company: "",
    jobTitle: "",
    jobType: "",
    date: "",
  });

  // Fetch applications from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/applications/all")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  // Update status in backend
  const handleStatusChange = async (id, newStatus) => {
    await fetch(`http://localhost:5000/api/applications/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    setApplications((prev) =>
      prev.map((app) =>
        app._id === id ? { ...app, status: newStatus } : app
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
      {/* ...filters code remains the same... */}
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
                  <tr key={app._id}>
                    <td className="px-4 py-2">{app._id}</td>
                    <td className="px-4 py-2">{app.name}</td>
                    <td className="px-4 py-2">{app.email}</td>
                    <td className="px-4 py-2">{app.jobTitle}</td>
                    <td className="px-4 py-2">{app.company}</td>
                    <td className="px-4 py-2">{app.jobType}</td>
                    <td className="px-4 py-2">
                      <a
                        href={`http://localhost:5000/${app.resumeUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    </td>
                    <td className="px-4 py-2">{new Date(app.appliedAt).toLocaleDateString()}</td>
                    <td className="px-4 py-2">
                      <select
                        className="border rounded px-2 py-1 text-sm"
                        value={app.status}
                        onChange={(e) => handleStatusChange(app._id, e.target.value)}
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
}

export default ApplicationTracker;
