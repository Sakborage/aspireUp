import AboutUs from "./SubParts/AboutUs";
import First from "./SubParts/HomeSection";
import JobListings from "./SubParts/JobListings";
import JobSeekerHub from "./SubParts/JobSeekerHub";
import MentorConnect from "./SubParts/MentorConnect";
import SecondPart from "./SubParts/SecondPart";
import TopBar from "./SubParts/Topbar";

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