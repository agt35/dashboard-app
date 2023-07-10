/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import { PropTypes } from "prop-types";
import { Line } from "react-chartjs-2";
import CircularProgress from "@mui/material/CircularProgress";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
);

const LineChart = ({ labels, title, datasets }) => {
  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          drawBorder: true,
          color: "#6b7280",
        },
        ticks: {
          color: "#cbd5e1",
        },
        title: {
          display: true,
          text: "Period",
          font: {
            size: 20,
          },
          color: "#cbd5e1",
        },
      },
      y: {
        grid: {
          drawBorder: true,
          color: "#6b7280",
        },
        ticks: {
          color: "#cbd5e1",
          //Include percentage sign
          callback: function (value) {
            return value + "%";
          },
        },
        title: {
          display: true,
          text: "Percentage",
          font: {
            size: 20,
          },
          color: "#cbd5e1",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (label) => {
            return `${label.raw}%`;
          },
        },
      },
      title: {
        display: title ? true : false,
        text: title ? title : "",
        font: {
          size: 30,
        },
        color: "#cbd5e1",
      },
    },
  };

  return (
    <div className="flex justify-center h-full">
      {datasets ? (
        <Line data={data} options={options} />
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

LineChart.propTypesropTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array,
};

export default LineChart;
