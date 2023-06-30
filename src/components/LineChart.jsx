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
        ticks: {
          color: "#cbd5e1",
        },
        title: {
          display: true,
          text: "Period",
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          color: "#cbd5e1",
          //Include percentage sign
          callback: function (value, index, values) {
            return value + "%";
          },
        },
        title: {
          display: true,
          text: "Percentage",
          font: {
            size: 20,
          },
        },
      },
    },
  };

  return (
    <Container width="w-2/3">
      <Line data={data} options={options} />
    </Container>
  );
};

LineChart.propTypesropTypes = {
  labels: PropTypes.array.isRequired,
  datasets: PropTypes.array.isRequired,
};

export default LineChart;
