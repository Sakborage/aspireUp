import CourseGrid from "./SubParts/Courses";
import Jobs from "./SubParts/JobCards";
import JobTable from "./SubParts/JobTable";

import SearchIcon from "../../assests/images/SearchIcon.png";
import JobIcon from "../../assests/images/JobIcon.png";
import ExploreAllButton from "./SubParts/ExploreAllButton";
import { useNavigate } from "react-router-dom";
import JobRow from "./SubParts/JobRow";



function UserHome() {
     const navigate = useNavigate();

    return (
        <div>
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
                            Recommended <span className="text-blue-600">Jobs</span>
                        </h2>
                        <p className="text-gray-600 text-sm">Based on your profile</p>
                    </div>
                </div>
                
                {/* Job Cards */}
                <div className="w-full px-4">
                   <JobRow/>
                </div>

                <div className="flex items-end justify-end">
                    <ExploreAllButton onClick={() => navigate("/home/UserJobs")}/>

                </div>
            </div>

            {/* Recommended Jobs Section */}
            <div className="w-full max-w-4xl mt-6">
                <div className="flex items-center gap-3 px-4 py-3">
                    {/* Job Icon */}
                    <img src={JobIcon} alt="Job Icon" className="w-10 h-10" />

                    {/* Text Content */}
                    <div>
                        <h2 className="text-lg font-bold">
                            Applied <span className="text-blue-600">Jobs</span>
                        </h2>
                        <p className="text-gray-600 text-sm">Based on your profile</p>
                    </div>
                </div>
                
                {/* Job Cards */}
                <div className="w-full px-4">
                   <JobTable/>
                </div>
            </div>

            <div className="w-full max-w-4xl mt-6">
                <div className="flex items-center gap-3 px-4 py-3">
                  
                    {/* Text Content */}
                    <div>
                        <h2 className="text-lg font-bold">
                            Recommended <span className="text-blue-600">Courses</span>
                        </h2>
                        <p className="text-gray-600 text-sm">Based on your profile</p>
                    </div>
                </div>
                
                {/* Job Cards */}
                <div className="w-full px-4">
                    <CourseGrid/>
                </div>
            </div>
    </div>

            
       
    );
}




export default UserHome;


