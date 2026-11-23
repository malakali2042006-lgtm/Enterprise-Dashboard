
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Enterprise</h2>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/analytics">Analytics</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
