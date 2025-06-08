import Footer from "./Footer";
import AboutUsImg from "../../../assests/images/AboutUs.png";

function AboutUs() {
    return (  
        <div className="bg-white px-2 sm:px-4 md:px-8 py-4 sm:py-6 rounded-lg shadow-lg">
            
            {/* Title Section */}
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-teal-700 text-center mb-2 sm:mb-4">About Us</h2>
            <div className="w-10 sm:w-16 h-1 bg-teal-700 mx-auto mb-4 sm:mb-6"></div>

            {/* Content Section */}
            <div className="flex flex-row items-center justify-between gap-x-2 sm:gap-x-6 md:gap-x-12">

                {/* Left Side: Image */}
                <div className="w-1/2 flex justify-end">
                    <img
                        src={AboutUsImg}
                        alt="About Us"
                        className="rounded-2xl shadow-lg w-[80%] sm:w-3/4 md:w-[85%] h-auto object-cover"
                    />
                </div>

                {/* Right Side: Text */}
                <div className="w-1/2 text-left px-1 sm:px-4">
                    <p className="text-gray-700 text-[10px] sm:text-sm md:text-base mb-2">
                        At AspireUp, we help students and professionals build successful careers. 
                        Our platform connects job seekers with opportunities, mentors with learners, 
                        and organizations with top talent.
                    </p>
                    <p className="text-gray-700 text-[10px] sm:text-sm md:text-base">
                        Job seekers can find jobs, enhance skills, and create AI-powered resumes. 
                        Mentors offer guidance, while companies hire efficiently. Whether you're 
                        looking for a job, career advice, or skilled professionals, we are your 
                        go-to career hub.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6">
                <Footer/>
            </div>
        </div>
    );
}

export default AboutUs;
