import React, { useState } from "react";

function Settings() {
  const [apiKey, setApiKey] = useState("");

  const saveSettings = () => {
    fetch("/api/save-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey }),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error("Error saving settings:", error));
  };

  return (
    <div>
      <h2>Settings</h2>
      <input
        type="text"
        placeholder="Enter API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button onClick={saveSettings}>Save</button>
    </div>
  );
}

export default Settings;