import MentorConnectImg from "../../../assests/images/MentorConnect.png";

const MentorConnect = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 py-6 rounded-lg shadow-lg flex flex-col items-center">
            
            {/* Title - Centered */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-700 text-center mb-4">
                Mentor Connect
            </h2>

            {/* Text + Image in single row (always) */}
            <div className="flex flex-row items-center justify-between w-full max-w-6xl gap-x-4 flex-wrap sm:flex-nowrap mb-6">
                
                {/* Left - Text */}
                <div className="w-full sm:w-[55%] text-left px-2 sm:px-4">
                    <p className="text-sm sm:text-base md:text-lg text-teal-900 font-semibold">
                        "Empower students with your expertise! Accept mentorship requests, 
                        share career advice, and guide aspiring professionals toward success."
                    </p>
                </div>

                {/* Right - Image */}
                <div className="w-full sm:w-[45%] flex justify-center mt-4 sm:mt-0 px-2">
                    <img
                        src={MentorConnectImg}
                        alt="Mentor Connect"
                        className="rounded-lg w-[80%] sm:w-2/3 md:w-1/2 object-cover"
                    />
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
                {[
                    "Accepting Student Requests",
                    "Providing Personalized Guidance",
                    "One-to-One Mentorship",
                ].map((text, index) => (
                    <div
                        key={index}
                        className="bg-[#034748] p-4 sm:p-6 rounded-lg shadow-xl text-white text-center"
                    >
                        <div className="bg-[#2C7865] p-3 sm:p-4 rounded-lg shadow-md text-sm sm:text-base font-medium">
                            {text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorConnect;
