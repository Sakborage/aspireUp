function JobListings() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-6 text-center">Jobs</h2>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {[
          {
            title: "Curated Listings",
            desc: "Get access to handpicked job opportunities tailored to your skills, experience, and career goals, ensuring the best matches for you.",
          },
          {
            title: "Find the Right Fit",
            desc: "Use smart filters to explore jobs based on industry, location, experience level, and work mode (remote/on-site).",
          },
          {
            title: "AI-Powered Recommendations",
            desc: "Our intelligent system suggests jobs based on your resume, skills, and preferences.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-[90%] sm:w-72 md:w-80 p-4 sm:p-6 bg-white rounded-2xl shadow-lg text-center border border-gray-200"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 sm:w-12 h-10 sm:h-12 text-teal-600 mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6l-8 8-4-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-teal-600 mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListings;
