
import CoursesList from "./CoursesList";
import SearchIcon from "../../../../assests/images/SearchIcon.png";

function AdminCourses() {
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
                           All  <span className="text-teal-700">Courses</span>
                        </h2>
                        <p className="text-gray-600 text-sm">Currently Available courses</p>
                    </div>
                </div>

            <div className="py-2 px-4 rounded-lg  w-full max-w-4xl mt-4">
           <CoursesList/>
        </div>
    </div> 
   
     );
}

export default AdminCourses;