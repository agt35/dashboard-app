/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { PropTypes } from "prop-types";
import { Line } from "react-chartjs-2";
import Container from "./Container";
import CircularProgress from "@mui/material/CircularProgress";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const LineChart = ({ labels, datasets }) => {
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
    },
  };

  return (
    <Container width="w-2/3">
      {datasets ? (
        <Line data={data} options={options} />
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

LineChart.propTypesropTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array,
};

export default LineChart;
