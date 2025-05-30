import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Dummy data for 30 days (simplified)
const data = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  applications: Math.floor(50 + Math.random() * 100),
}));

function ApplicationChart() {
    return (
         <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tick={false}      
            axisLine={true}
            tickLine={true}// Show every 4th day for readability
            label={{ value: "Day", position: "bottom", offset: 10 }}
          />
          <YAxis
            label={{ value: "Applications", angle: -90, position: "insideLeft", offset: 10 }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="applications" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
}

export default ApplicationChart;