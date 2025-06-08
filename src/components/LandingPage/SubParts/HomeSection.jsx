import ManImage from '../../../assests/images/Man.png';

function First() {
  return (
    <div className="flex flex-row items-center justify-between px-2 sm:px-4 md:px-8 py-4 sm:py-6 mx-2 sm:mx-4 md:mx-8 gap-x-2 sm:gap-x-6">
      
      {/* Text on the left */}
      <div className="flex flex-col justify-center w-1/2">
        <div className="text-gray-700 text-[10px] sm:text-sm font-medium">
          Never Stop Learning
        </div>
        <div className="text-accent text-base sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2">
          Upgrade your future with career Insights and Guidance.......
        </div>
        <div className="mt-3 sm:mt-4">
          <button className="text-white text-xs sm:text-sm md:text-base font-semibold bg-orange px-3 sm:px-4 py-1.5 sm:py-2 rounded-md">
            Explore Now
          </button>
        </div>
      </div>

      {/* Image on the right */}
      <div className="w-1/2 flex justify-center">
        <img
          src={ManImage}
          alt="Career Insights"
          className="w-[80%] sm:w-[90%] md:w-full h-auto object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default First;
