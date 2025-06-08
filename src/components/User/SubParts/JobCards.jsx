
function Jobs({job}) {
    return (

                    <div
                        className="w-[280px] h-[320px] bg-white shadow-md rounded-lg p-4 flex flex-col flex-shrink-0 snap-start relative" >
                        {/* Logo */}
                        <img src={job.logo} alt={job.company} className="w-12 h-12 mb-2 object-contain" />

                        {/* Job Details - Flexible Content Area */}
                        <div className="flex-grow pb-16"> {/* Adjusted padding-bottom */}
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
                        </div>

                        {/* Fixed Apply Button at Bottom */}
                        <div className="mt-auto">
                            <button className="bg-teal-600 text-white py-2 rounded-lg text-sm w-full hover:bg-teal-700">
                                Apply Now
                            </button>
                        </div>
                    </div>
                
         
        
    );
}

export default Jobs;
