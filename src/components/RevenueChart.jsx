

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import data from '../data/revenueData.json';

function RevenueChart() {
  

  return (
    <div className="chart-container">
  <h2>Revenue Analytics</h2>

  <div className="chart">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#6366f1"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>
  );
}

export default RevenueChart;



