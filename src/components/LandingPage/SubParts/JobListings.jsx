function JobListings() {
    return (
      <div className="flex flex-col items-center p-12">
        <h2 className="text-3xl font-bold text-teal-700 mb-6">Jobs</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-80 p-6 bg-white rounded-2xl shadow-lg text-center border border-gray-200">
            <div className="mb-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-teal-600 mx-auto"
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
            <h3 className="text-xl font-semibold text-teal-600 mb-2">Curated Listings</h3>
            <p className="text-gray-600">
              Get access to handpicked job opportunities tailored to your skills, experience, and career goals, ensuring the best matches for you.
            </p>
          </div>
          <div className="w-80 p-6 bg-white rounded-2xl shadow-lg text-center border border-gray-200">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-teal-600 mx-auto"
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
            <h3 className="text-xl font-semibold text-teal-600 mb-2">Find the Right Fit</h3>
            <p className="text-gray-600">
              Use smart filters to explore jobs based on industry, location, experience level, and work mode (remote/on-site).
            </p>
          </div>
          <div className="w-80 p-6 bg-white rounded-2xl shadow-lg text-center border border-gray-200">
            <div className="mb-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-teal-600 mx-auto"
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
            <h3 className="text-xl font-semibold text-teal-600 mb-2">AI-Powered Recommendations</h3>
            <p className="text-gray-600">
              Our intelligent system suggests jobs based on your resume, skills, and preferences.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default JobListings;
  