import React, { useState, useEffect } from "react";

function Dashboard() {
  const [networkTraffic, setNetworkTraffic] = useState([]);

  // Example: Fetch real-time network traffic from the backend
  useEffect(() => {
    fetch("/api/network-traffic")
      .then((response) => response.json())
      .then((data) => setNetworkTraffic(data))
      .catch((error) => console.error("Error fetching network traffic:", error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Network Traffic</h3>
      <ul>
        {networkTraffic.map((packet, index) => (
          <li key={index}>{packet}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;