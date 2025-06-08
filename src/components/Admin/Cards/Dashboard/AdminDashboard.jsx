import DashboardStat from "./DashboardStat";
import SearchIcon from "../../../../assests/images/SearchIcon.png";
import DashboardCorsesSection from "./DashboardCoursesSection";

function AdminDashboard() {
  return (
    <div className="w-full max-w-4xl mt-6">
      {/* Summary Statistics Section */}
      <div className="flex items-center gap-3 px-4 py-3">
        <img
          src={SearchIcon}
          alt="Job Icon"
          className="w-8 h-8 bg-transparent"
        />
        <div>
          <h2 className="text-lg font-bold">
            Summary <span className="text-teal-700">Statistics</span>
          </h2>
          <p className="text-gray-600 text-sm">Your Platform in Numbers</p>
        </div>
      </div>

      <div className="py-2 px-4 rounded-lg w-full max-w-4xl mt-4">
       <DashboardStat/>
      </div>

      {/* Insights & Trends Section */}
      <div className="w-full max-w-4xl mt-6">
        <div className="flex items-center gap-3 px-4 py-3">
          <img
            src={SearchIcon}
            alt="Job Icon"
            className="w-8 h-8 bg-transparent"
          />
          <div>
            <h2 className="text-lg font-bold">
              Current <span className="text-teal-700"> Insights & Trends</span>
            </h2>
            <p className="text-gray-600 text-sm">Visual Breakdown of Platform Activity</p>
          </div>
        </div>

        <div className="w-full px-4">
        <DashboardCorsesSection/>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
