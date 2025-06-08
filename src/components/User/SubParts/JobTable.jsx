import React from "react";

const jobData = [
    { id: 1, title: "Senior Software Developer", company: "Google", date: "10/02/2025", status: "Pending" },
    { id: 2, title: "Decisioning/Marketing Developer", company: "Pega", date: "5/02/2025", status: "Under Review" },
    { id: 3, title: "Frontend Developer", company: "Adobe", date: "1/02/2025", status: "Pending" },
    { id: 4, title: "Backend Developer", company: "1920×1080", date: "28/01/2025", status: "Pending" },
    { id: 5, title: "Full Stack Developer", company: "Layers", date: "20/01/2025", status: "Pending" },
    { id: 6, title: "Data Scientist", company: "Codetitude", date: "15/01/2025", status: "Pending" },
    { id: 7, title: "Research Intern", company: "SpaceXR", date: "13/01/2025", status: "Accepted" },
    { id: 8, title: "Frontend Intern", company: "Ocean10", date: "10/01/2025", status: "Accepted" },
    { id: 9, title: "Full Stack Developer", company: "Quotient", date: "05/01/2025", status: "Accepted" },
    { id: 10, title: "Backend Developer", company: "LightXR", date: "02/01/2025", status: "Accepted" },
];

const statusColors = {
    "Pending": "bg-blue-100 text-blue-600",
    "Under Review": "bg-yellow-100 text-yellow-600",
    "Accepted": "bg-green-100 text-green-600",
};

const JobTable = () => {
    return (
        <div className="mx-auto max-w-full p-4 bg-white rounded-2xl shadow-lg mb-4">
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="border border-gray-300 rounded-md p-2 text-sm w-full sm:w-1/2 focus:ring-2 focus:ring-teal-400 outline-none"
                />
                <button className="bg-teal-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-md hover:bg-teal-700 transition">
                    Filter
                </button>
            </div>

            {/* Table with hidden scrollbar and horizontal scroll on small screens */}
            <div className="overflow-x-auto scrollbar-hide">
                <table className="min-w-[600px] w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 text-sm font-semibold">
                            <th className="py-3 px-4 text-left">#</th>
                            <th className="py-3 px-4 text-left">Job Title</th>
                            <th className="py-3 px-4 text-left ">Company</th>
                            <th className="py-3 px-4 text-left ">Date</th>
                            <th className="py-3 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        {jobData.map((job, index) => (
                            <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                                <td className="py-3 px-4 font-medium">{index + 1}</td>
                                <td className="py-3 px-4 font-semibold text-gray-800">{job.title}</td>
                                <td className="py-3 px-4 ">{job.company}</td>
                                <td className="py-3 px-4 ">{job.date}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[job.status]}`}>
                                        {job.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobTable;
