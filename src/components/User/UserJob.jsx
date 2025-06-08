import Jobs from './SubParts/JobCards';
import JobGrid from './SubParts/JobGrid';




function UserJob() {
    return ( 
        <div>
        <div className="py-2 px-4 rounded-lg text-center w-full  flex flex-col mt-4">
            <span className="text-black font-bold text-xl">
                Find Your Jobs!
            </span>
            <span className="font-normal text-sm">One step closer to your next opportunity!</span>
        </div>

        <div className="w-full px-4 mt-4 ">
        <JobGrid/>
        </div>
        </div>
    
     );
}

export default UserJob;