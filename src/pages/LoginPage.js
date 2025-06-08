import { Link } from "react-router-dom";
export default function LoginPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#E2F0F1]">
            {/* Login Box */}
            <div className="w-[400px] bg-white rounded-2xl shadow-lg p-8">
                
                {/* Profile Icon */}
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                       
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="50"
                        height="50"
                        fill="gray">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                    </div>
                </div>

                <h2 className="text-center text-2xl font-semibold mt-3">WELCOME</h2>

                {/* Input Fields */}
                <div className="mt-6">
                    <label className="block text-md font-medium">Username</label>
                    <input 
                        type="text" 
                        className="text-sm w-full border-b-2 border-gray-400 focus:outline-none focus:border-teal-600 p-1 mt-1 "
                        placeholder="Enter username"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-md font-medium mb-0">Password</label>
                    <input 
                        type="password" 
                        className=" test-sm w-full border-b-2 border-gray-400 focus:outline-none focus:border-teal-600 p-1 mt-1 "
                        placeholder="Enter password"
                        required
                    />
                </div>

                {/* Forgot Password & Login Button */}
                <div className="flex justify-between text-xs mt-3 text-gray-600">
                    <a href="#" className="text-teal-600 hover:underline">Forgot Password?</a>
                </div>
                <Link to="/home">
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg mt-4 hover:bg-teal-700">
                    LOGIN
                </button>
                </Link>

                {/* Sign Up Link */}
                <p className="text-xs text-center mt-3">
                    Don't have an account? <Link to="/signup" className="text-teal-600 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
