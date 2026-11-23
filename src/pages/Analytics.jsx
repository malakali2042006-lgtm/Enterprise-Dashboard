import UsersChart from '../components/UsersChart';
import RevenueChart from '../components/RevenueChart';
import OrdersChart from '../components/OrdersChart';
function Analytics() {
  return (
    <div className="analytics-page">
      <h1>Analytics Overview</h1>
      <p>Track and analyze your business performance.</p>

      <RevenueChart />
      <OrdersChart />
      <UsersChart />
    </div>
  );
}

export default Analytics;
