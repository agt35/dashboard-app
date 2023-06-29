import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);
const OverviewScreen = () => {
  const labels = [1, 2, 3, 4, 5, 6, 7];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "green",
        backgroundColor: "green",
        pointBorderColor: "green",
        tension: 0.05,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
      customCanvasBackgroundColor: {
        color: "green",
      },
    },
    scales: {
      y: {
        min: 50,
        max: 100,
      },
    },
  };

  return (
    <div className="font-roboto flex flex-col justify-center items-center mt-2">
      <h2 className="text-6xl text-slate-100">Overview</h2>
      <ButtonGroup
        variant="contained"
        aria-label="contained primary button group"
        size="large"
        color="secondary"
        className="my-4"
      >
        <Button>Financials</Button>
        <Button>Processing</Button>
        <Button>Packaging</Button>
      </ButtonGroup>
      <Line data={data} options={options}></Line>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default OverviewScreen;
