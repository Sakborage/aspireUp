import { useState } from "react";

export default function AddCourse() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    domain: "",
    level: "",
    platform: "",
    price: "",
    oldPrice: "",
    link: "",
    image: null,
    syllabusPdf: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      const res = await fetch('http://localhost:5000/api/v1/courses/add', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      alert(result.message || "Course added!");
    } catch (err) {
      alert("Error adding course");
    }
  };

  return (
    <div className="min-w-full min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto ">
        <h2 className="text-xl font-bold mb-4 text-accent">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="title" placeholder="Course Title" onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full" required />
            <input type="text" name="domain" placeholder="Domain (e.g., Data Science)" onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full" />
          </div>
          <textarea name="description" placeholder="Course Description" onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full" rows="3" required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="level" placeholder="Level (Beginner/Intermediate)" onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full" />
            <input type="text" name="platform" placeholder="Platform (e.g., Coursera)" onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="price" placeholder="Current Price" onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full" />
            <input type="text" name="oldPrice" placeholder="Old Price" onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full" />
          </div>
          <input type="url" name="link" placeholder="Course Link (URL)" onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full" required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm">Course Image</span>
              <input type="file" name="image" accept="image/*" onChange={handleChange}
                className="mt-1 block w-full text-sm file:border file:rounded file:px-3 file:py-2 file:bg-gray-100 file:text-gray-700" />
            </label>
            <label className="block">
              <span className="text-sm">Syllabus PDF</span>
              <input type="file" name="syllabusPdf" accept=".pdf" onChange={handleChange}
                className="mt-1 block w-full text-sm file:border file:rounded file:px-3 file:py-2 file:bg-gray-100 file:text-gray-700" />
            </label>
          </div>
          <div className=" flex justify-center ">
            <button type="submit"
              className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition">
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
