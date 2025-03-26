import AspireUP from "./AspireUp";
import Second from "../assests/images/SecondDash.png";

function SecondPart() {
    return (  
        <div className="flex flex-row items-center justify-center px-8 py-6 my-2 mx-8 gap-x-6">
            
            <div className="flex flex-col justify-center items-start w-1/2 ml-12 mr-0">
                <AspireUP/>
                <div className="text-accent text-3xl font-bold mt-4 mb-2">
                    <span>
                        Explore Career Paths
                    </span>
                </div>
                <div className="text-gray-700 text-lg font-medium ">
                    Discover the most in-demand career opportunities, learn essential skills, 
                    and get a personalized roadmap to achieve your goals.
                </div>
                <div className="text-white text-xl font-semibold bg-orange rounded-md px-4 py-2 mt-6 mb-4">
                    <button>Get Started</button>
                </div>
            </div>

            {/* Image Container */}
            <div className="w-1/2 flex items-center justify-center">
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        src={Second} // Replace with your actual image URL
                        alt="Career Insights"
                        className="w-full h-full object-cover rounded-md" // Adjust image size and styling as needed
                    />
                </div>
            </div>

        </div>
    );
}

export default SecondPart;
