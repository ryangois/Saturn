import React, { useState, useEffect } from "react";

function Reports() {
  const [reports, setReports] = useState([]);

  // Example: Fetch reports from the backend
  useEffect(() => {
    fetch("/api/reports")
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <strong>{report.title}</strong>: {report.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;