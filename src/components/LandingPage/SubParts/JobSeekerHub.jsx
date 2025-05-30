import JobSeeker from "../../../assests/images/JobSeeker.png"; // Fixed "assests" typo

function JobSeekerHub() {
    return ( 
        <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-x-12">
        
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 flex justify-end">
                <img
                    src={JobSeeker}
                    alt="Job Seekers Hub"
                    className="rounded-2xl shadow-lg w-3/4 h-auto object-cover"
                />
            </div>
            
            {/* Right Side: Text */}
            <div className="w-full md:w-1/2 text-left">
                <h2 className="text-3xl font-bold text-teal-700 mb-4">
                    Job Seekers Hub
                </h2>
                <p className="text-gray-600 mb-3">
                    Upload your resume for instant analysis and personalized feedback.
                </p>
                <p className="text-gray-600 mb-3">
                    Get expert guidance on crafting strong applications and improving your chances of landing your dream job.
                </p>
                <p className="text-gray-600">
                    Explore success stories and proven strategies to accelerate your career growth.
                </p>
            </div>

        </div>
    );
}

export default JobSeekerHub;