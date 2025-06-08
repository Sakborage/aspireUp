import AspireUP from "../../User/SubParts/AspireUp";
import Second from "../../../assests/images/SecondDash.png";

function SecondPart() {
    return (
        <div className="flex flex-row items-center justify-between px-2 sm:px-4 md:px-8 py-4 my-2 mx-2 sm:mx-4 gap-x-4 sm:gap-x-6 overflow-x-auto">
            
            {/* Left Side Text */}
            <div className="flex flex-col justify-center items-start w-[60%] sm:w-1/2 ml-2 sm:ml-4">
                <AspireUP />
                
                <div className="text-accent text-lg sm:text-xl md:text-3xl font-bold mt-2 sm:mt-4 mb-1 sm:mb-2">
                    <span>Explore Career Paths</span>
                </div>

                <div className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">
                    Discover the most in-demand career opportunities, learn essential skills, 
                    and get a personalized roadmap to achieve your goals.
                </div>

                <div className="mt-4 sm:mt-6 mb-2">
                    <button className="text-white text-sm sm:text-base md:text-xl font-semibold bg-orange rounded-md px-3 py-1 sm:px-4 sm:py-2">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="w-[40%] sm:w-1/2 flex items-center justify-center pr-2 sm:pr-4">
                <div className="w-[80%] sm:w-[70%] md:w-1/2">
                    <img
                        src={Second}
                        alt="Career Insights"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default SecondPart;
