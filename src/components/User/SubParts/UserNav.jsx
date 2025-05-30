import React, { useState, useRef, useEffect } from "react";
import UserProfile from "./UserProfile";

function UserNav() {
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  const toggleProfile = () => setShowProfile((prev) => !prev);

  // Close profile panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full bg-transparent py-4 px-0 flex items-center justify-between">
      <nav className="flex flex-grow space-x-14 text-md font-medium">
        <a href="/home" className="text-gray-700 font-semibold hover:text-orange">Home</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Careers</a>
        <a href="/home/UserJobs" className="text-gray-700 hover:text-orange transition duration-300">Jobs</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Resume Generation</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Mentors</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Organization</a>
      </nav>

      {/* Profile Icon */}
      <div className="relative">
        <button
          onClick={toggleProfile}
          className="ml-auto w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center transition duration-300 hover:bg-gray-400"
        >
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="gray">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>
        </button>

        {/* Floating Profile Panel */}
        {showProfile && (
          <div
            ref={profileRef}
            className="absolute right-0 mt-2 z-50 w-[380px] bg-white border shadow-xl rounded-xl"
          >
            <UserProfile />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserNav;
