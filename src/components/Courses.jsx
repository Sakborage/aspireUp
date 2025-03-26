import React from "react";
import python from "../assests/images/python.jpg";
import database from "../assests/images/Database.png";


const courses = [
  { id: 1, title: "Product Management Basic Course", image:python, description: "Learn Product Management Networks, customer behavior & digital strategies.", price: "$380", oldPrice: "$500" },
  { id: 2, title: "BM Data Science Professional Certification", image: database, description: "Master Data Science techniques with hands-on projects and expert training.", price: "$678", oldPrice: "$900" },
  { id: 3, title: "The Science of Well-Being", image: python, description: "Explore psychology & mindfulness to enhance your well-being.", price: "$123", oldPrice: "$500" },
  { id: 4, title: "Python for Everybody Specialization", image: database, description: "Master Python programming from basics to advanced topics.", price: "$567", oldPrice: "$800" },
  { id: 5, title: "Full Stack Java Development Certification", image:python, description: "Become a full-stack Java developer with Spring Boot & React.", price: "$380", oldPrice: "$500" },
  { id: 6, title: "MERN Stack Development Certification", image:database, description: "Build modern web applications using MongoDB, Express, React, and Node.js.", price: "$678", oldPrice: "$900" },
  { id: 7, title: "Data Structures & Algorithms Certification", image:python, description: "Strengthen your problem-solving skills with DSA fundamentals.", price: "$123", oldPrice: "$500" },
  { id: 8, title: "Cloud Computing with AWS", image:database, description: "Master cloud infrastructure with AWS services and deployment.", price: "$599", oldPrice: "$850" },
];

function CourseGrid() {
  return (
    <div className="mx-auto w-[900px] p-2 bg-white rounded-2xl shadow-lg mb-4 py-4">
      {/* Search & Filter Row */}
      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          placeholder="Search Courses..."
          className="border border-gray-300 rounded-md p-2 text-sm w-1/2 focus:ring-2 focus:ring-teal-400 outline-none"
        />
        <button className="bg-teal-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-md hover:bg-teal-700 transition">
          Filter
        </button>
      </div>

      {/* Grid Container with Vertical Scroll */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[50vh] overflow-y-auto no-scrollbar p-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 relative flex flex-col"
          >
         <img
  src={course.image}
  alt={course.title}
  className="w-full h-28 rounded-lg mb-2"
  style={{ objectFit: "contain", width: "100%", height: "112px" }} 
/>

            {/* Title */}
            <h4 className="text-lg font-semibold mb-2">{course.title}</h4>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-2">{course.description}</p>

            {/* Price */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold text-teal-600">{course.price}</span>
              <span className="text-gray-400 line-through">{course.oldPrice}</span>
            </div>

            {/* Button */}
            <button className="mt-auto bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseGrid;


