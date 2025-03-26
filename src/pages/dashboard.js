import AboutUs from "../components/AboutUs";
import First from "../components/HomeSection";
import JobListings from "../components/JobListings";
import JobSeekerHub from "../components/JobSeekerHub";
import MentorConnect from "../components/MentorConnect";
import SecondPart from "../components/SecondPart";
import TopBar from "../components/Topbar";

function DashBoard() {
    return (  
        <div className="flex flex-col gap-2 mx-2">

        <div className="bg-background mt-0 rounded-md  "id="home">
            <TopBar/>
            <First/>
        </div>
        
        <div className="bg-background rounded-md" id="career">
            <SecondPart/>
        </div>

        <div className="rounded-md" id="jobs">
            <JobListings/>
        </div>

        <div className="bg-background rounded-md" id="jobseeker">
            <JobSeekerHub/>
        </div>

        <div className="bg-background rounded-md" id="mentor">
            <MentorConnect/>
        </div>
        <div className="bg-background rounded-md" id="about">
            <AboutUs/>
        </div>
        </div>
    );
}

export default DashBoard;