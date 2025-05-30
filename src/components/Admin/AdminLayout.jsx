// AdminLayout.jsx
import { Outlet } from "react-router-dom";
import AdminNav from "./Cards/AdminNav";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center px-2 pt-4">
      {/* Welcome Message */}
      <div className="py-2 px-4 rounded-lg text-center w-full max-w-4xl mt-4">
        <span className="text-black font-bold text-3xl">
          Welcome Back, Admin! Let's shape the future today!
        </span>
      </div>

      {/* Navigation Bar */}
      <div className="w-full max-w-4xl mt-2 flex items-center justify-center">
        <AdminNav/>
      </div>

      {/* Main content will render here */}
      <main className="w-full max-w-4xl mt-6">
        <Outlet />
      </main>
    </div>
  );
}
