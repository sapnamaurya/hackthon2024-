import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Import Chart.js to handle charts
import "./style.css";
function ReportAnalysis() {
  const [fitnessData, setFitnessData] = useState([]);
  const [date, setDate] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  // Handle form submit to add data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && caloriesBurned) {
      setFitnessData([
        ...fitnessData,
        { date, caloriesBurned: parseInt(caloriesBurned) },
      ]);
      setDate("");
      setCaloriesBurned("");
    }
  };

  // Prepare data for chart
  const chartData = {
    labels: fitnessData.map((data) => data.date),
    datasets: [
      {
        label: "Calories Burned",
        data: fitnessData.map((data) => data.caloriesBurned),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div className="App" style={{ padding: "20px" }}>
        <h1>Fitness Report Analysis</h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Calories Burned:</label>
            <input
              type="number"
              value={caloriesBurned}
              onChange={(e) => setCaloriesBurned(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Data</button>
        </form>

        {/* Display Chart */}
        {fitnessData.length > 0 && (
          <div style={{ marginTop: "50px" }}>
            <Line data={chartData} />
          </div>
        )}
      </div>
    </>
  );
}

export default ReportAnalysis;
