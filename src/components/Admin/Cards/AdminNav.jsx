import React, { useState, useRef, useEffect } from "react";

function AdminNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <div className="relative w-full bg-transparent py-4 px-0 flex items-center justify-center">
      {/* Hamburger for Mobile */}
      <button
        className="hamburger-button md:hidden flex flex-col space-y-1 absolute left-4 top-4"
        onClick={toggleSidebar}
      >
        <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
        <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
        <span className="w-6 h-0.5 bg-gray-700 rounded"></span>
      </button>

      {/* Main Nav (Desktop) */}
      <nav className="hidden md:flex space-x-14 text-md font-medium">
        <a href="/" className="text-gray-700 font-semibold hover:text-orange">Home</a>
        <a href="/course" className="text-gray-700 hover:text-orange transition duration-300">Courses</a>
        <a href="/job" className="text-gray-700 hover:text-orange transition duration-300">Jobs</a>
        <a href="/application" className="text-gray-700 hover:text-orange transition duration-300">Applications</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Users</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Organization</a>
      </nav>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col space-y-6 transition-all duration-300"
        >
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            <a href="/" className="text-gray-700 hover:text-orange">Home</a>
            <a href="/course" className="text-gray-700 hover:text-orange">Courses</a>
            <a href="/job" className="text-gray-700 hover:text-orange">Jobs</a>
            <a href="/application" className="text-gray-700 hover:text-orange">Applications</a>
            <a href="#" className="text-gray-700 hover:text-orange">Users</a>
            <a href="#" className="text-gray-700 hover:text-orange">Organization</a>
          </nav>
        </div>
      )}
    </div>
  );
}

export default AdminNav;
