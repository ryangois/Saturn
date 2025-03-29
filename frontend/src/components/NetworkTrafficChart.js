"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios";

const NetworkTrafficChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/network-traffic")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching network traffic:", error));
  }, []);

  return (
    <div>
      <h2>Network Traffic</h2>
      {loading ? (
        <Skeleton height={300} width={600} />
      ) : (
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      )}
    </div>
  );
};

export default NetworkTrafficChart;
