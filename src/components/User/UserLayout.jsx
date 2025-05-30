import UserNav from "./SubParts/UserNav";
import { Outlet } from "react-router-dom";

function UserLayout() {
    return ( 
        <div className="min-h-screen bg-gray-200 flex flex-col items-center px-2 pt-4">
                    {/* Welcome Message */}
                    <div className="py-2 px-4 rounded-lg text-center w-full max-w-4xl">
                        <span className="text-black font-bold text-3xl">
                            Welcome, Future Achiever!
                        </span>
                    </div>
        
                    {/* Navigation Bar */}
                    <div className="w-full max-w-4xl mt-2">
                       <UserNav/>
                    </div>

                    <main className="w-full max-w-4xl mt-6">
                       <Outlet />
                    </main>
        </div>
     );
}

export default UserLayout;