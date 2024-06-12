// import React from "react";
import "./index.css";

const SpeedChart = ({ min, score, max }) => {
  const scorePercentage = (((score - min) / (max - min)) * 100).toFixed(1);

  return (
    <div
      className="speed-chart-container"
      style={{ "--score": score, "--min": min, "--max": max }}
    >
      <div className="speedometer">
        <div className="needle"></div>
        <div className="score-container">
          <span className="score">{scorePercentage}%</span>
        </div>
        <div className="marker min-marker" title={`Min: ${min}`}></div>
        <div className="marker max-marker" title={`Max: ${max}`}></div>
      </div>
      {score > max && (
        <div className="exceed" style={{ "--exceed": score - max }}></div>
      )}
      <div className="white-space"></div>
    </div>
  );
};

export default SpeedChart;
