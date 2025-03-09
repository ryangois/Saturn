const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// Example API endpoints
app.get("/api/network-traffic", (req, res) => {
  res.json(["Packet 1", "Packet 2", "Packet 3"]); // Replace with real data
});

app.post("/api/run-vulnerability-scan", (req, res) => {
    const { target } = req.body;
    exec(`python vulnerability_scanner/scanner.py --target ${target}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: "Failed to run scan" });
      }
      res.json({ result: stdout });
    });
  });

  app.post("/api/convert-file", (req, res) => {
    const { inputFile, outputFile } = req.body;
    exec(`python file_converter/converter.py --input ${inputFile} --output ${outputFile}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: "Failed to convert file" });
      }
      res.json({ result: stdout });
    });
  });

  app.post("/api/analyze-logs", (req, res) => {
    const { logFile } = req.body;
    exec(`python log_analyzer/analyzer.py --log ${logFile}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: "Failed to analyze logs" });
      }
      res.json({ result: stdout });
    });
  }); 

  app.post("/api/monitor-files", (req, res) => {
    const { directory } = req.body;
    exec(`cargo run --manifest-path=file_integrity/Cargo.toml --directory ${directory}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: "Failed to monitor files" });
      }
      res.json({ result: stdout });
    });
  });

  app.get("/api/threat-intel", (req, res) => {
    exec(`python threat_intel/feed.py`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: "Failed to fetch threat intelligence" });
      }
      res.json({ result: stdout });
    });
  });

  app.post("/api/generate-otp", (req, res) => {
    const { secret } = req.body;
    exec(`python auth/2fa.py --generate --secret ${secret}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: "Failed to generate OTP" });
      }
      res.json({ result: stdout });
    });
  });

app.get("/api/reports", (req, res) => {
  res.json([{ title: "Vulnerability Scan", description: "Found 3 issues" }]);
});

app.post("/api/save-settings", (req, res) => {
  const { apiKey } = req.body;
  // Save the API key (e.g., to a .env file)
  res.json({ message: "Settings saved successfully!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});