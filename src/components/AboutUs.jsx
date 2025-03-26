import Footer from "./Footer";
import AboutUsImg from "../assests/images/AboutUs.png"; // Fixed "assests" typo

function AboutUs() {
    return (  
        <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Title Section */}
            <h2 className="text-3xl font-bold text-teal-700 text-center mb-4">About Us</h2>
            <div className="w-16 h-1 bg-teal-700 mx-auto mb-6"></div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-12">
                
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 flex justify-end">
                    <img
                        src={AboutUsImg}
                        alt="About Us"
                        className="rounded-2xl shadow-lg w-3/4 h-auto object-cover"
                    />
                </div>

                {/* Right Side: Text */}
                <div className="w-full md:w-1/2 text-left">
                    <p className="text-gray-700 mb-3">
                        At AspireUp, we help students and professionals build successful careers. 
                        Our platform connects job seekers with opportunities, mentors with learners, 
                        and organizations with top talent.
                    </p>
                    <p className="text-gray-700 mb-3">
                        Job seekers can find jobs, enhance skills, and create AI-powered resumes. 
                        Mentors offer guidance, while companies hire efficiently. Whether you're 
                        looking for a job, career advice, or skilled professionals, we are your 
                        go-to career hub.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6">
                <Footer />
            </div>
        </div>
    );
}

export default AboutUs;
