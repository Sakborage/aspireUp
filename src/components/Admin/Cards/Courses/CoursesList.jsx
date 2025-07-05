// ...same imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
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

  const handleEditClick = (course) => {
    setSelectedCourse({ ...course });
    setShowModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/courses/${selectedCourse._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedCourse),
      });

      if (res.ok) {
        const updatedCourse = await res.json();
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course._id === updatedCourse._id ? updatedCourse : course
          )
        );
        setShowModal(false);
        alert("Course updated successfully!");
      } else {
        alert("Failed to update course.");
      }
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Something went wrong.");
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-2xl shadow h-auto flex flex-col">
      {/* Top bar */}
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

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[50vh] overflow-y-auto no-scrollbar p-2">
        {filteredCourses.map((course) => (
          <div
            key={course._id}
            className="border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between"
            style={{ minHeight: "280px" }}
          >
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
                <p className="text-xs text-gray-500 mt-1">Platform: {course.platform}</p>
                <p className="text-xs text-gray-500">Level: {course.level} | Domain: {course.domain}</p>
                <div className="mt-2 text-base">
                  <span className="text-blue-600 font-semibold">{course.price}</span>
                  <span className="text-gray-400 line-through ml-2">{course.oldPrice}</span>
                </div>
                {course.link && (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 underline block mt-1"
                  >
                    Course Link
                  </a>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-auto pt-4 border-t border-gray-100">
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 mr-2"
                onClick={() => handleEditClick(course)}
              >
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

      {/* Edit Modal */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white px-6 py-6 rounded-2xl w-[90%] sm:w-[500px] max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-teal-700 mb-6 text-center">Edit Course</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              {[
                { label: "Title", key: "title" },
                { label: "Description", key: "description", type: "textarea" },
                { label: "Domain", key: "domain" },
                { label: "Level", key: "level" },
                { label: "Platform", key: "platform" },
                { label: "Price", key: "price" },
                { label: "Old Price", key: "oldPrice" },
                { label: "Course Link", key: "link" },
                { label: "Image URL", key: "imageUrl" },
                { label: "Syllabus PDF URL", key: "syllabusPdfUrl" },
              ].map(({ label, key, type }) => (
                <div key={key}>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
                  {type === "textarea" ? (
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      rows={3}
                      value={selectedCourse[key] || ""}
                      onChange={(e) =>
                        setSelectedCourse({ ...selectedCourse, [key]: e.target.value })
                      }
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      value={selectedCourse[key] || ""}
                      onChange={(e) =>
                        setSelectedCourse({ ...selectedCourse, [key]: e.target.value })
                      }
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoursesList;
