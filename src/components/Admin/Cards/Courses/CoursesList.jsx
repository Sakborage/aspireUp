import React, { useState } from "react";
import python from "../../../../assests/images/python.jpg";
import database from "../../../../assests/images/Database.png";
import { useNavigate } from "react-router-dom";

const dummyCourses = [ { id: 1, title: "Product Management Basic Course", image:python, description: "Learn Product Management Networks, customer behavior & digital strategies.", price: "$380", oldPrice: "$500" },
  { id: 2, title: "BM Data Science Professional Certification", image: database, description: "Master Data Science techniques with hands-on projects and expert training.", price: "$678", oldPrice: "$900" },
  { id: 3, title: "The Science of Well-Being", image: python, description: "Explore psychology & mindfulness to enhance your well-being.", price: "$123", oldPrice: "$500" },
  { id: 4, title: "Python for Everybody Specialization", image: database, description: "Master Python programming from basics to advanced topics.", price: "$567", oldPrice: "$800" },
  { id: 5, title: "Full Stack Java Development Certification", image:python, description: "Become a full-stack Java developer with Spring Boot & React.", price: "$380", oldPrice: "$500" },
  { id: 6, title: "MERN Stack Development Certification", image:database, description: "Build modern web applications using MongoDB, Express, React, and Node.js.", price: "$678", oldPrice: "$900" },
  { id: 7, title: "Data Structures & Algorithms Certification", image:python, description: "Strengthen your problem-solving skills with DSA fundamentals.", price: "$123", oldPrice: "$500" },
  { id: 8, title: "Cloud Computing with AWS", image:database, description: "Master cloud infrastructure with AWS services and deployment.", price: "$599", oldPrice: "$850" },
];
function  CoursesList() {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate=useNavigate();

    const filteredCourses = dummyCourses.filter((course) =>
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
        <button className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition" onClick={() => navigate("/addcourse")}>
          + Add New
        </button>
      </div>

      {/* Course cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[50vh]  overflow-y-auto no-scrollbar p-2">
        
  {filteredCourses.map((course) => (
    <div
      key={course.id}
      className="border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between"
      style={{ minHeight: "280px" }} // keep cards consistent height
    >
      {/* Course Info */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={course.image}
          alt={course.title}
          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
        />
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
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-1/2 ml-2">
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