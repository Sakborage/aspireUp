import AdminNav from "../AdminNav";
import CoursesList from "../Courses/CoursesList";
import SearchIcon from "../../../../assests/images/SearchIcon.png";
import JobList from "./JobList";

function AdminJobs() {
    return ( 
         


            <div className="w-full max-w-4xl mt-6">
                <div className="flex items-center gap-3 px-4 py-3">
                    {/* Job Icon */}
                    <img 
                 src={SearchIcon} 
                 alt="Job Icon" 
                className="w-8 h-8 bg-transparent" 
                />


                    {/* Text Content */}
                    <div>
                        <h2 className="text-lg font-bold">
                           Added  <span className="text-teal-700">Jobs</span>
                        </h2>
                        <p className="text-gray-600 text-sm">Currently Available Jobs</p>
                    </div>
                </div>

            <div className="py-2 px-4 rounded-lg  w-full max-w-4xl mt-4">
            <JobList/>
        </div>
    </div> 
    
     );
}

export default AdminJobs;