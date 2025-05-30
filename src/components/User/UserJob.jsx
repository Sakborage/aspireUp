import Jobs from './SubParts/JobCards';




function UserJob() {
    return ( 
        <div>
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