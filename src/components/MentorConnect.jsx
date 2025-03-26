import MentorConnectImg from "../assests/images/MentorConnect.png";

const MentorConnect = () => {
    return (
        <div className="p-8 rounded-lg shadow-lg flex flex-col items-center">
            
            {/* Title - Centered */}
            <h2 className="text-3xl font-bold text-teal-700 text-center mb-4">
                Mentor Connect
            </h2>

            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-8 mt-2">
                
                {/* Left - Text Content */}
                <div className="w-full md:w-1/2 text-left ml-6">
                    <p className="text-teal-900 text-lg font-semibold mb-2">
                        "Empower students with your expertise! Accept mentorship requests, 
                        share career advice, and guide aspiring professionals toward success."
                    </p>
                </div>

                {/* Right - Image */}
                <div className="w-full md:w-1/2 flex justify-center ">
                    <img
                        src={MentorConnectImg}
                        alt="Mentor Connect"
                        className="rounded-lg  w-2/3 object-cover"
                    />
                </div>

            </div>

            {/* Cards - Centered Below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl items-center">
                <div className="bg-[#034748] p-6 rounded-lg shadow-xl text-white text-center">
                    <div className="bg-[#2C7865] p-4 rounded-lg shadow-md">
                        Accepting Student Requests
                    </div>
                </div>
                <div className="bg-[#034748] p-6 rounded-lg shadow-xl text-white text-center">
                    <div className="bg-[#2C7865] p-4 rounded-lg shadow-md">
                        Providing Personalized Guidance
                    </div>
                </div>
                <div className="bg-[#034748] p-6 rounded-lg shadow-xl text-white text-center">
                    <div className="bg-[#2C7865] p-4 rounded-lg shadow-md">
                        One-to-One Mentorship
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MentorConnect;
