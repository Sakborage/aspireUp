import AspireUP from "../../User/SubParts/AspireUp";

import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function TopBar() {
    return ( 
        <div>
        <div className="flex flex-row justify-between items-center mt-0 mx-4">
        
        <AspireUP/>
        
        <div className="flex">
        <RouterLink to="/login">
        <button className="bg-white text-accent text-xs font-medium rounded-md px-4 py-2 border border-accent mx-2 my-2">
          Log In
        </button>
        </RouterLink>

        <RouterLink to="/signup">
          <button className="bg-accent text-white text-xs font-medium rounded-md px-4 py-2 mx-2 my-2">
            Sign Up
          </button>
          </RouterLink>

        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center ">
      <Link to="home" smooth={true} duration={500}>
                <button className="text-sm font-semibold text-accent px-4 py-2 hover:text-orange">
                    Home
                </button>
            </Link>
            
            <Link to="career" smooth={true} duration={500}>
                <button className="text-sm font-semibold text-accent px-4 py-2 hover:text-orange">
                    Career
                </button>
            </Link>

            <Link to="jobs" smooth={true} duration={500}>
                <button className="text-sm font-semibold text-accent px-4 py-2 hover:text-orange">
                    Jobs
                </button>
            </Link>

            <Link to="jobseeker" smooth={true} duration={500}>
                <button className="text-sm font-semibold text-accent px-4 py-2 hover:text-orange">
                    JobSeeker
                </button>
            </Link>

            <Link to="mentor" smooth={true} duration={500}>
                <button className="text-sm font-semibold text-accent px-4 py-2 hover:text-orange">
                    Mentor
                </button>
            </Link>

            <Link to="about" smooth={true} duration={500}>
                <button className="text-sm font-semibold text-accent px-4 py-2 hover:text-orange">
                    About Us
                </button>
            </Link>

        </div>
      </div>
      
         

       );
}

export default TopBar;