

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import StatisticsCard from './components/StatisticsCard';
import RevenueChart from './components/RevenueChart';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {

const statistics = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$45,000",
    change: "+12.5%"
  },
  {
    id: 2,
    title: "Total Users",
    value: "2,500",
    change: "+8.2%"
  },
  {
    id: 3,
    title: "Total Orders",
    value: "1,200",
    change: "+15%"
  },
  {
    id: 4,
    title: "Total Products",
    value: "850",
    change: "+5.4%"
  }
];
const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Dashboard Overview</h1>
               
<div className="statistics-container">
  {statistics.map((item) => (
    <StatisticsCard
      key={item.id}
      title={item.title}
      value={item.value}
      change={item.change}
    />
  ))}
</div>

                <RevenueChart />
              </>
            }
          />

          <Route path="/analytics" element={<Analytics />} />
         <Route path="/users" element={<Users />} />
         <Route path="/reports" element={<Reports />} />
          <Route
  path="/settings"
  element={
    <Settings
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
