import ApplicationChart from './ApplicationChart';
import TopCoursesList from './TopCoursesList';

function DashboardCorsesSection() {
    return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left: Line Chart */}
      <div className="flex-1 bg-white rounded-2xl shadow p-4 h-[350px]">
        <h2 className="text-xl font-semibold mb-4 ">📆 Applications Trend (Last 30 Days)</h2>
       <ApplicationChart/>
       
      </div>

      {/* Right: Top Courses */}
      <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">🎓 Top Courses</h2>
        <TopCoursesList/>
      </div>
    </div>
      );
}

export default DashboardCorsesSection;