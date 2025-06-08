function DashboardStat() {
    const stats = [
    { title: "Total Jobs", value: 124 },
    { title: "Total Users", value: 5823 },
    { title: "Total Applications", value: 8932 },
  ];
    return (  
    <div className="w-full h-min flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full px-4 py-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
            <p className="mt-3 text-3xl font-bold text-teal-700">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default DashboardStat;