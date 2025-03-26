import Jobs from "../components/JobCards";
import UserNav from "../components/UserNav";



function UserJob() {
    return ( 
        <div className="min-h-screen bg-gray-200 flex flex-col items-center px-6 pt-4">
        {/* Welcome Message */}
        <div className="py-2 px-4 rounded-lg text-center w-full max-w-4xl">
            <span className="text-black font-bold text-xl">
                Welcome, Future Achiever!
            </span>
        </div>

        {/* Navigation Bar */}
        <div className="w-full max-w-4xl mt-2">
            <UserNav/>
        </div>
        <div className="py-2 px-4 rounded-lg text-center w-full max-w-4xl flex flex-col mt-4">
            <span className="text-black font-bold text-xl">
                Find Your Jobs!
            </span>
            <span className="font-normal text-sm">One step closer to your next opportunity!</span>
        </div>

        <div className="w-full px-4 mt-4">
         <Jobs/>
        </div>
        </div>
     );
}

export default UserJob;