import ManImage from '../assests/images/Man.png';
function First() {
    return (
      <div className="flex flex-row items-center justify-center px-8 py-6 my-2  mx-8">

        {/* Text on the left */}
        <div className="flex flex-col justify-center items-start w-1/2 ml-12 mr-0">
        <div className="text-gray-700 text-sm font-medium ">
            <span>Never Stop Learning</span>
        </div>
        <div className="text-accent text-3xl font-bold mt-2  ">
          <span>
            Upgrade your future with career Insights and Guidance.......
          </span>
          
        </div>
        <div className="text-white text-xl font-semibold bg-orange rounded-md px-4 py-2 mt-4">
         <button>Explore Now</button>
        </div>
        </div>
  
        {/* Image on the right */}
        <div className="w-1/2 ">
          <img
            src={ManImage}// Replace with your actual image URL
            alt="Career Insights"
            className="w-full h-auto object-cover rounded-md" // Adjust image size and styling as needed
          />
        </div>
      </div>
    );
  }
  
  export default First;
  