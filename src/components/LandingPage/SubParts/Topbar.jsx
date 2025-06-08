import React, { useState, useRef, useEffect } from "react";
import AspireUP from "../../User/SubParts/AspireUp";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".hamburger-button")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white shadow-md relative z-50">
      {/* Top row */}
      <div className="flex justify-between items-center px-4 py-3">
        <AspireUP />

        {/* Hamburger - Small screens only */}
        <button
          className="hamburger-button md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
        </button>

        {/* Full Nav - Large screens only */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="home" smooth duration={500}>
            <button className="text-md font-semibold text-accent hover:text-orange">Home</button>
          </Link>
          <Link to="career" smooth duration={500}>
            <button className="text-md font-semibold text-accent hover:text-orange">Career</button>
          </Link>
          <Link to="jobs" smooth duration={500}>
            <button className="text-md font-semibold text-accent hover:text-orange">Jobs</button>
          </Link>
          <Link to="jobseeker" smooth duration={500}>
            <button className="text-md font-semibold text-accent hover:text-orange">JobSeeker</button>
          </Link>
          <Link to="mentor" smooth duration={500}>
            <button className="text-md font-semibold text-accent hover:text-orange">Mentor</button>
          </Link>
          <Link to="about" smooth duration={500}>
            <button className="text-md font-semibold text-accent hover:text-orange">About Us</button>
          </Link>

          {/* Auth buttons */}
          <RouterLink to="/login">
            <button className="bg-white text-accent border border-accent px-3 py-1 rounded text-sm">Log In</button>
          </RouterLink>
          <RouterLink to="/signup">
            <button className="bg-accent text-white px-3 py-1 rounded text-sm">Sign Up</button>
          </RouterLink>
        </div>
      </div>

      {/* Dropdown Menu - Small screens only */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 w-[380px] bg-white border-t border-gray-200 shadow-md px-4 py-6 space-y-4 md:hidden"
        >
          <Link to="home" smooth duration={500}>
            <button className="block w-full text-left  hover:text-orange">Home</button>
          </Link>
          <Link to="career" smooth duration={500}>
            <button className="block w-full text-left  hover:text-orange">Career</button>
          </Link>
          <Link to="jobs" smooth duration={500}>
            <button className="block w-full text-left  hover:text-orange">Jobs</button>
          </Link>
          <Link to="jobseeker" smooth duration={500}>
            <button className="block w-full text-left  hover:text-orange">JobSeeker</button>
          </Link>
          <Link to="mentor" smooth duration={500}>
            <button className="block w-full text-left  hover:text-orange">Mentor</button>
          </Link>
          <Link to="about" smooth duration={500}>
            <button className="block w-full text-left  hover:text-orange">About Us</button>
          </Link>

          {/* Auth */}
          <RouterLink to="/login">
            <button className="block w-full text-left text-accent text-sm hover:bg-accent hover:text-white transition">
               Log In
             </button>
            </RouterLink>

        <RouterLink to="/signup">
            <button className=" text-accent text-sm hover:bg-accent hover:text-white transition">
             Sign Up
            </button>
        </RouterLink>
        </div>
      )}
    </div>
  );
}

export default TopBar;
