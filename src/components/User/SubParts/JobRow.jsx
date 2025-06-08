import React from "react";
import Jobs from "./JobCards";
import googleIcon from "../../../assests/images/google.png";
import adobeicon from "../../../assests/images/Adobe.png";
import walmartIcon from "../../../assests/images/walmart.jpg";
import microsoftIcon from "../../../assests/images/Mi.png"

const jobList = [
    {
        id: 1,
        logo: googleIcon,
        title: "Senior Software Developer",
        company: "Google",
        location: "Pune, Maharashtra, India",
        type: "Full-Time",
        salary: "$160K PA",
        description: "Design and develop scalable software solutions...",
    },
    {
        id: 2,
        logo: adobeicon,
        title: "Market Research Analyst",
        company: "Adobe",
        location: "Addis Ababa, Ethiopia",
        type: "Full-Time",
        salary: "$100K PA",
        description: "Analyze market trends and customer insights...",
    },
    {
        id: 3,
        logo: walmartIcon,
        title: "Pega Decisioning",
        company: "Walmart",
        location: "Moscow, Kazakhstan",
        type: "Full-Time",
        salary: "$93K PA",
        description: "Design and implement having knoe hbsjhg hsvjhsaf shvys decisioning...",
    },
    {
        id: 4,
        logo: microsoftIcon,
        title: "Cloud Engineer",
        company: "Microsoft",
        location: "Seattle, USA",
        type: "Full-Time",
        salary: "$120K PA",
        description: "Manage cloud infrastructure and optimize performance...",
    }
];


function JobRow()
{
  return (
    <div className="w-full overflow-hidden">
      <div className="flex space-x-4 overflow-x-auto no-scrollbar p-4 w-full flex-nowrap scroll-smooth snap-x snap-mandatory">
        {jobList.map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobRow;
