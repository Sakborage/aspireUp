import CourseGrid from "../components/Courses";
import Jobs from "../components/JobCards";
import JobTable from "../components/JobTable";
import UserNav from "../components/UserNav";
import SearchIcon from "../assests/images/SearchIcon.png";
import JobIcon from "../assests/images/JobIcon.png";


function UserHome() {
    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center px-2 pt-4">
            {/* Welcome Message */}
            <div className="py-2 px-4 rounded-lg text-center w-full max-w-4xl">
                <span className="text-black font-bold text-3xl">
                    Welcome, Future Achiever!
                </span>
            </div>

            {/* Navigation Bar */}
            <div className="w-full max-w-4xl mt-2">
                <UserNav/>
            </div>

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
                    <Jobs/>
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


function JobCards() {
    return (
        <div className="w-full overflow-hidden">
            {/* Centered Scrollable Job Cards Box */}
            <div className="flex space-x-4 overflow-x-scroll no-scrollbar p-4 mx-auto w-full">
                
                {/* Job Card 1 */}
                <div className="w-[280px] bg-white shadow-md rounded-lg p-4 flex-shrink-0">
                    <img src="/google-logo.png" alt="Google" className="w-12 h-12 mb-2" />
                    <h3 className="text-lg font-semibold">Senior Software Developer</h3>
                    <p className="text-sm text-gray-500">Google</p>
                    <p className="text-blue-500 text-xs">Pune, Maharashtra, India</p>
                    <div className="flex justify-between text-sm text-gray-700 mt-2">
                        <span className="font-medium">Full-Time</span>
                        <span>$160K PA</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                        Design and develop scalable software solutions...
                    </p>
                    <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">
                        Apply Now
                    </button>
                </div>

                {/* Job Card 2 */}
                <div className="w-[280px] bg-white shadow-md rounded-lg p-4 flex-shrink-0">
                    <img src="/adobe-logo.png" alt="Adobe" className="w-12 h-12 mb-2" />
                    <h3 className="text-lg font-semibold">Market Research Analyst</h3>
                    <p className="text-sm text-gray-500">Adobe</p>
                    <p className="text-blue-500 text-xs">Addis Ababa, Ethiopia</p>
                    <div className="flex justify-between text-sm text-gray-700 mt-2">
                        <span className="font-medium">Full-Time</span>
                        <span>$100K PA</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                        Analyze market trends and customer insights...
                    </p>
                    <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">
                        Apply Now
                    </button>
                </div>

                {/* Job Card 3 */}
                <div className="w-[280px] bg-white shadow-md rounded-lg p-4 flex-shrink-0">
                    <img src="/ai-logo.png" alt="Walmart" className="w-12 h-12 mb-2" />
                    <h3 className="text-lg font-semibold">Pega Decisioning/Marketing Developer</h3>
                    <p className="text-sm text-gray-500">Walmart</p>
                    <p className="text-blue-500 text-xs">Moscow, Kazakhstan</p>
                    <div className="flex justify-between text-sm text-gray-700 mt-2">
                        <span className="font-medium">Full-Time</span>
                        <span>$93K PA</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                        Design and implement Pega-based decisioning...
                    </p>
                    <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">
                        Apply Now
                    </button>
                </div>

                {/* Job Card 4 */}
                <div className="w-[280px] bg-white shadow-md rounded-lg p-4 flex-shrink-0">
                    <img src="/microsoft-logo.png" alt="Microsoft" className="w-12 h-12 mb-2" />
                    <h3 className="text-lg font-semibold">Cloud Engineer</h3>
                    <p className="text-sm text-gray-500">Microsoft</p>
                    <p className="text-blue-500 text-xs">Seattle, USA</p>
                    <div className="flex justify-between text-sm text-gray-700 mt-2">
                        <span className="font-medium">Full-Time</span>
                        <span>$120K PA</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                        Manage cloud infrastructure and optimize performance...
                    </p>
                    <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">
                        Apply Now
                    </button>
                </div>

            </div>
        </div>
    );
}


