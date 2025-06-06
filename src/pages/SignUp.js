import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="relative w-[900px] h-[550px] rounded-2xl shadow-2xl bg-accent flex overflow-hidden">
        <div className="w-2/5 flex flex-col justify-center items-center text-white p-6 relative z-10">
          <h2 className="text-2xl font-bold text-center leading-tight">
            Your Wisdom, <br /> Their Success...!
          </h2>
          <img src="/illustration.png" alt="Illustration" className="w-40 mt-6" />
        </div>
        <div className="absolute top-0 right-0 w-3/5 h-full bg-white rounded-l-[60px] shadow-xl flex flex-col justify-center p-10">
          <h2 className="text-xl font-bold text-teal-700 text-center">Create Account</h2>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-3 focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <button type="submit" className="w-full bg-teal-700 text-white py-2 rounded-md mt-4 hover:bg-teal-800">Create Account</button>
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            <p className="text-xs text-gray-600 text-center mt-3">
              Already have an account? <Link to="/login" className="text-teal-600 hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
