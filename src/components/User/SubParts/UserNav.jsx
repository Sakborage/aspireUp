import React, { useState, useRef, useEffect } from "react";
import UserProfile from "./UserProfile";

function UserNav() {
  const [showProfile, setShowProfile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const profileRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleProfile = () => setShowProfile((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Close profile panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".hamburger-button")
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full bg-transparent py-4 px-4 flex items-center justify-between">
      {/* Hamburger for Mobile */}
      <button
        className="hamburger-button md:hidden flex flex-col space-y-1"
        onClick={toggleSidebar}
      >
        <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
        <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
        <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow space-x-14 text-md font-medium">
        <a href="/home" className="text-gray-700 font-semibold hover:text-orange">Home</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Careers</a>
        <a href="/home/UserJobs" className="text-gray-700 hover:text-orange transition duration-300">Jobs</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Resume Generation</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Mentors</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Organization</a>
      </nav>

      {/* Desktop Profile Icon */}
      <div className="relative hidden md:block">
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

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col space-y-6 transition-all duration-300"
        >
          {/* Profile Icon Inside Sidebar */}
          <button
            onClick={toggleProfile}
            className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center transition duration-300 hover:bg-gray-400 self-center"
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="gray">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
          </button>

          {showProfile && (
            <div className="w-full" ref={profileRef}>
              <UserProfile />
            </div>
          )}

          {/* Nav Items */}
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            <a href="/home" className="text-gray-700 hover:text-orange">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange">Careers</a>
            <a href="/home/UserJobs" className="text-gray-700 hover:text-orange">Jobs</a>
            <a href="#" className="text-gray-700 hover:text-orange">Resume Generation</a>
            <a href="#" className="text-gray-700 hover:text-orange">Mentors</a>
            <a href="#" className="text-gray-700 hover:text-orange">Organization</a>
          </nav>
        </div>
      )}
    </div>
  );
}

export default UserNav;
