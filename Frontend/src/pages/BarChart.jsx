import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import "./index.css";

const labels = [
  "Monday",
  "Thusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Last week",
      backgroundColor: "#84aef2",
      borderColor: "#84aef2",
      hoverBackgroundColor: "#84aef2",
      hoverBorderColor: "#84aef2",
      backgroundColor: "#84aef2",
      borderColor: "#84aef2",
      hoverBackgroundColor: "#84aef2",
      hoverBorderColor: "#84aef2",
      data: [0, 10, 15, 5, 2, 20, 30, 45],
      barPercentage: 0.678,
      categoryPercentage: 0.7,
    },
    {
      label: "This week",
      backgroundColor: "#3f80ea",
      borderColor: "#3f80ea",
      hoverBackgroundColor: "#3f80ea",
      hoverBorderColor: "#3f80ea",
      data: [0, 20, 25, 15, 20, 30, 50, 55],
      barPercentage: 0.678,
      categoryPercentage: 0.7,
    },
  ],
  options: {
    maintainAspectRatio: false,
    cornerRadius: 15,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            stepSize: 20,
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "transparent",
          },
          stacked: true,
        },
      ],
    },
  },
};

function BarChart() {
  return (
    <div className="bg-white ">
      <h5 className="card-title mb-0 p-3">Voucher Exchange</h5>
      <Bar data={data}></Bar>
    </div>
  );
}
export default BarChart;
