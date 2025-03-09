import React, { useState } from "react";

function ToolLauncher() {
  const [tool, setTool] = useState("vulnerability-scan"); // Selected tool
  const [target, setTarget] = useState(""); // Input for vulnerability scan
  const [inputFile, setInputFile] = useState(""); // Input for file converter, log analyzer, etc.
  const [outputFile, setOutputFile] = useState(""); // Input for file converter
  const [directory, setDirectory] = useState(""); // Input for file integrity monitor
  const [scanResult, setScanResult] = useState(""); // Results of the tool execution

  // Handle tool selection change
  const handleToolChange = (e) => {
    setTool(e.target.value);
    setScanResult(""); // Clear previous results
  };

  // Run the selected tool
  const runTool = () => {
    let endpoint = "";
    let body = {};

    switch (tool) {
      case "vulnerability-scan":
        endpoint = "/api/run-vulnerability-scan";
        body = { target };
        break;
      case "file-converter":
        endpoint = "/api/convert-file";
        body = { inputFile, outputFile };
        break;
      case "log-analyzer":
        endpoint = "/api/analyze-logs";
        body = { logFile: inputFile };
        break;
      case "file-integrity-monitor":
        endpoint = "/api/monitor-files";
        body = { directory };
        break;
      case "threat-intel":
        endpoint = "/api/threat-intel";
        break;
      case "2fa":
        endpoint = "/api/generate-otp";
        body = { secret: "user-secret" }; // Replace with actual secret
        break;
      default:
        console.error("Unknown tool selected");
        return;
    }

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: Object.keys(body).length > 0 ? JSON.stringify(body) : null,
    })
      .then((response) => response.json())
      .then((data) => setScanResult(data.result))
      .catch((error) => console.error("Error running tool:", error));
  };

  return (
    <div className="ToolLauncher">
      <h2>Tool Launcher</h2>

      {/* Tool Selection Dropdown */}
      <div className="tool-selection">
        <label htmlFor="tool-select">Select Tool:</label>
        <select id="tool-select" value={tool} onChange={handleToolChange}>
          <option value="vulnerability-scan">Vulnerability Scan</option>
          <option value="file-converter">File Converter</option>
          <option value="log-analyzer">Log Analyzer</option>
          <option value="file-integrity-monitor">File Integrity Monitor</option>
          <option value="threat-intel">Threat Intelligence Feed</option>
          <option value="2fa">Two-Factor Authentication</option>
        </select>
      </div>

      {/* Dynamic Input Fields */}
      <div className="tool-inputs">
        {tool === "vulnerability-scan" && (
          <div>
            <input
              type="text"
              placeholder="Enter target IP or hostname"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
        )}

        {tool === "file-converter" && (
          <div>
            <input
              type="text"
              placeholder="Input file (e.g., input.csv)"
              value={inputFile}
              onChange={(e) => setInputFile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Output file (e.g., output.xlsx)"
              value={outputFile}
              onChange={(e) => setOutputFile(e.target.value)}
            />
          </div>
        )}

        {tool === "log-analyzer" && (
          <div>
            <input
              type="text"
              placeholder="Log file path (e.g., /path/to/logfile.log)"
              value={inputFile}
              onChange={(e) => setInputFile(e.target.value)}
            />
          </div>
        )}

        {tool === "file-integrity-monitor" && (
          <div>
            <input
              type="text"
              placeholder="Directory to monitor (e.g., /path/to/directory)"
              value={directory}
              onChange={(e) => setDirectory(e.target.value)}
            />
          </div>
        )}

        {tool === "2fa" && (
          <div>
            <input
              type="text"
              placeholder="Enter secret key"
              value={inputFile}
              onChange={(e) => setInputFile(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Run Tool Button */}
      <button onClick={runTool}>Run {tool.replace("-", " ")}</button>

      {/* Results Display */}
      {scanResult && (
        <div className="tool-results">
          <h3>Results:</h3>
          <pre>{scanResult}</pre>
        </div>
      )}
    </div>
  );
}

export default ToolLauncher;