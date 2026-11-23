
import { useState } from 'react';

function Settings({ darkMode, setDarkMode }) {
  const [notifications, setNotifications] = useState(true);
  
  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <p>Manage your application preferences.</p>

      <div className="setting-item">
        <h3>Notifications</h3>
        <p>Receive updates and alerts.</p>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />
      </div>

      <div className="setting-item">
        <h3>Dark Mode</h3>
        <p>Switch between light and dark preferences.</p>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default Settings;
