import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CourseGrid() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/courses/all")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses:", err));
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 bg-white rounded-2xl shadow-lg">
      {/* Search & Filter Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm w-full md:w-1/2 focus:ring-2 focus:ring-teal-400 outline-none"
        />
        <button
          className="bg-teal-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-md hover:bg-teal-700 transition"
          onClick={() => alert("Add filter logic here")}
        >
          Filter
        </button>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto p-2 no-scrollbar">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course._id}
              className="bg-gray-50 shadow-md rounded-xl p-4 flex flex-col"
            >
              {/* Course Image */}
              <img
                src={`http://localhost:5000/${course.imageUrl}`}
                alt={course.title}
                className="w-full h-28 object-contain rounded-lg mb-3"
              />

              {/* Title */}
              <h4 className="text-md font-semibold mb-1">{course.title}</h4>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-3">
                {course.description}
              </p>

              {/* Price */}
              <div className="mt-auto flex justify-between items-center">
                <span className="text-teal-600 font-bold">{course.price}</span>
                {course.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {course.oldPrice}
                  </span>
                )}
              </div>

              {/* Button */}
              <button
                onClick={() => navigate(`/enroll/${course._id}`)}
                className="mt-3 bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700"
              >
                Enroll Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default CourseGrid;
