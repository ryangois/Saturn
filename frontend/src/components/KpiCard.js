import React from "react";

const KpiCard = ({ title, value, trend }) => {
    return (
      <div style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        width: "200px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"

        
      }}>
        <h3 style={{ fontSize: "18px", color: "#333" }}>{title}</h3>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>{value}</p>
        <p style={{ color: trend.startsWith("+") ? "green" : "red" }}>{trend}</p>
      </div>
    );
  };

export default KpiCard;
