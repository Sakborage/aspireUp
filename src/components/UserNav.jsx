import { Link } from "react-router-dom";
function UserNav() {
    return (
      <div className="w-full bg-transparent py-4 px-0 flex items-center justify-between">
        {/* Left Navigation - Occupies full width dynamically */}
        <nav className="flex flex-grow space-x-14 text-md font-medium">
          <Link to="/home" className="text-gray-700 font-semibold hover:text-orange">Home</Link>
          <Link to="#" className="text-gray-700 hover:text-orange transition duration-300">Careers</Link>
          <Link to="/UserJobs" className="text-gray-700 hover:text-orange transition duration-300">Jobs</Link>
          <Link to="#" className="text-gray-700 hover:text-orange transition duration-300">Resume Generation</Link>
          <Link to="#" className="text-gray-700 hover:text-orange transition duration-300">Mentors</Link>
          <Link to="#" className="text-gray-700 hover:text-orange transition duration-300">Organization</Link>
        </nav>
  
        {/* Right Profile Icon */}
        <button className="ml-auto w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center transition duration-300 hover:bg-gray-400">
    {/* User SVG Icon */}
    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            fill="gray">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </svg>
    </div>
</button>

      </div>
    );
  }
  
  export default UserNav;
  