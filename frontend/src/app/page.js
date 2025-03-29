import React from "react";
import NetworkTrafficChart from "@/components/NetworkTrafficChart";
import VulnerabilityTable from "@/components/VulnerabilityTable";
import KpiCard from "@/components/KpiCard";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cybersecurity Dashboard</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-around"
      }}>
        <KpiCard title="Total Vulnerabilities" value="120" trend="+5%" />
        <KpiCard title="Suspicious IPs Detected" value="15" trend="+10%" />
        <KpiCard title="Files Monitored" value="50" trend="+2%" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <NetworkTrafficChart />
      </div>
      <VulnerabilityTable />
    </div>
  );
};


export default App;
