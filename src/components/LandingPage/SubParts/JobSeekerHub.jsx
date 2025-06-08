import JobSeeker from "../../../assests/images/JobSeeker.png";

function JobSeekerHub() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap sm:flex-nowrap p-2 sm:p-4 md:p-8 gap-x-2 sm:gap-x-6 md:gap-x-12">
      
      {/* Left Side: Image */}
      <div className="w-full sm:w-[45%] flex justify-center sm:justify-end px-1 sm:px-2">
        <img
          src={JobSeeker}
          alt="Job Seekers Hub"
          className="rounded-2xl shadow-lg w-[60%] sm:w-[80%] md:w-3/4 h-auto object-cover max-w-[200px] sm:max-w-none"
        />
      </div>
      
      {/* Right Side: Text */}
      <div className="w-full sm:w-[55%] text-left px-1 sm:px-3 mt-3 sm:mt-0">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-teal-700 mb-2 sm:mb-3">
          Job Seekers Hub
        </h2>
        <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-1 sm:mb-2">
          Upload your resume for instant analysis and personalized feedback.
        </p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-1 sm:mb-2">
          Get expert guidance on crafting strong applications and improving your chances of landing your dream job.
        </p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-600">
          Explore success stories and proven strategies to accelerate your career growth.
        </p>
      </div>

    </div>
  );
}

export default JobSeekerHub;
