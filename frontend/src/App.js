import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import ToolLauncher from "./components/ToolLauncher";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import Notifications from "./components/Notifications";
import "./App.css";

function App() {
  const [activeTool, setActiveTool] = useState("dashboard");
  const [notifications, setNotifications] = useState([]);

  // Example: Fetch notifications from the backend
  useEffect(() => {
    fetch("/api/notifications")
      .then((response) => response.json())
      .then((data) => setNotifications(data))
      .catch((error) => console.error("Error fetching notifications:", error));
  }, []);

  return (
    <div className="App">
      <nav>
        <button onClick={() => setActiveTool("dashboard")}>Dashboard</button>
        <button onClick={() => setActiveTool("tool-launcher")}>Tools</button>
        <button onClick={() => setActiveTool("reports")}>Reports</button>
        <button onClick={() => setActiveTool("settings")}>Settings</button>
      </nav>

      <Notifications notifications={notifications} />

      {activeTool === "dashboard" && <Dashboard />}
      {activeTool === "tool-launcher" && <ToolLauncher />}
      {activeTool === "reports" && <Reports />}
      {activeTool === "settings" && <Settings />}
    </div>
  );
}

export default App; // Ensure this line is present