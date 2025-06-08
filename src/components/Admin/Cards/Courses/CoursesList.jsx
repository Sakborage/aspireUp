import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    fetch("http://localhost:5000/api/courses/all")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses:", err));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCourses((prevCourses) => prevCourses.filter((course) => course._id !== id));
        alert("Course deleted successfully!");
      } else {
        alert("Failed to delete course.");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Something went wrong while deleting.");
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-2xl shadow h-auto flex flex-col">
      {/* Sticky top bar */}
      <div className="sticky top-0 bg-white z-10 flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 border-b border-gray-200 pb-3">
        <input
          type="text"
          placeholder="Search courses..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
          onClick={() => navigate("/admin/addcourse")}
        >
          + Add New
        </button>
      </div>

      {/* Course cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[50vh] overflow-y-auto no-scrollbar p-2">
        {filteredCourses.map((course) => (
          <div
            key={course._id}
            className="border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between"
            style={{ minHeight: "280px" }}
          >
            {/* Course Info */}
            <div className="flex items-start gap-4 mb-4">
              {course.imageUrl ? (
                <img
                  src={`http://localhost:5000/${course.imageUrl}`}
                  alt={course.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0" />
              )}
              <div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
                <div className="mt-2 text-base">
                  <span className="text-blue-600 font-semibold">{course.price}</span>
                  <span className="text-gray-400 line-through ml-2">{course.oldPrice}</span>
                </div>
              </div>
            </div>

            {/* Buttons at bottom */}
            <div className="flex justify-between mt-auto pt-4 border-t border-gray-100">
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 mr-2">
                Edit
              </button>
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 ml-2"
                onClick={() => handleDelete(course._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
