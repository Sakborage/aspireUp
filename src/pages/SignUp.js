import { Link } from "react-router-dom";
export default function SignupPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100 relative">
    
            
            {/* Main Card Container */}
            <div className="relative w-[900px] h-[550px]  rounded-2xl shadow-2xl bg-accent flex overflow-hidden">
                {/* Left Section with Text and Illustration */}
                <div className="w-2/5 flex flex-col justify-center items-center text-white p-6 relative z-10">
                    <h2 className="text-2xl font-bold text-center leading-tight">
                        Your Wisdom, <br /> Their Success...!
                    </h2>
                    <img src="/illustration.png" alt="Illustration" className="w-40 mt-6" />
                </div>
                
                {/* White Curved Section */}
                <div className="absolute top-0 right-0 w-3/5 h-full bg-white rounded-l-[60px] shadow-xl flex flex-col justify-center p-10">
                    <h2 className="text-xl font-bold text-teal-700 text-center">Create Account</h2>
                    
                    {/* Form Fields */}
                    <div className="mt-5">
                        <div className="flex gap-4">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button className="w-full bg-teal-700 text-white py-2 rounded-md mt-4 hover:bg-teal-800">
                            Create Account
                        </button>
                        <p className="text-xs text-gray-600 text-center mt-3">
                            Already have an account? <Link to="/login" className="text-teal-600 hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
