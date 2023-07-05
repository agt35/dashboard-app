import InformationCard from "../components/InformationCard";
import axios from "axios";
import { getLabels, getDatasets } from "../data/utils";
import InformationList from "../components/InformationList";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";

const buttons = [
  {
    id: 1,
    name: "Regions",
    selects: "region",
  },
  {
    id: 2,
    name: "Metric Groups",
    selects: "group",
  },
  {
    id: 3,
    name: "Metrics",
    selects: "metric",
  },
];

const OverviewScreen = () => {
  const [cardData, setCardData] = useState({});
  const [selected, setSelected] = useState("region");
  const [data, setData] = useState();
  const [chartLabels, setChartLabels] = useState();
  const [chartDatasets, setChartDatasets] = useState();

  useEffect(() => {
    fetchTableData();
    fetchCardsData();
    fetchChartData();
  }, [selected]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/summary_${selected}/`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChartData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/data_${selected}/`
      );
      console.log(getDatasets(response.data));
      setChartLabels(getLabels(response.data));
      setChartDatasets(getDatasets(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCardsData = async () => {
    try {
      const regionResponse = await axios.get(
        `http://127.0.0.1:8000/summary_region/`
      );
      console.log(regionResponse);
      const metricResponse = await axios.get(
        `http://127.0.0.1:8000/summary_group/`
      );
      console.log(metricResponse);
      const bestRegion = regionResponse.data.reduce((prev, curr) =>
        prev.value > curr.value ? prev : curr
      );
      const worstRegion = regionResponse.data.reduce((prev, curr) =>
        prev.value < curr.value ? prev : curr
      );
      const bestMetricGroup = metricResponse.data.reduce((prev, curr) =>
        prev.value > curr.value ? prev : curr
      );
      const worstMetricGroup = metricResponse.data.reduce((prev, curr) =>
        prev.value < curr.value ? prev : curr
      );
      setCardData({
        bestRegion,
        worstRegion,
        bestMetricGroup,
        worstMetricGroup,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-roboto flex flex-col justify-start items-center h-screen overflow-scroll no-scrollbar">
      <h2 className="text-6xl text-slate-100 sticky mt-2">Overview</h2>
      <div className="grid grid-cols-2 md:flex w-full justify-around mt-3">
        <InformationCard title="Best Region" data={cardData.bestRegion} best />
        <InformationCard title="Worst Region" data={cardData.worstRegion} />
        <InformationCard
          title="Best Metric Group"
          data={cardData.bestMetricGroup}
          best
        />
        <InformationCard
          title="Worst Metric Group"
          data={cardData.worstMetricGroup}
        />
      </div>
      <div className="mt-2 w-full px-5 flex flex-col items-center">
        <div className="flex">
          {buttons.map((button) => (
            <button
              className={`text-xl text-slate-200 border p-2 w-48 first:rounded-l-lg last:rounded-r-lg hover:bg-blue-800/25 transition-all duration-200 active:bg-blue-950 ${
                selected === button.selects
                  ? "border-blue-400"
                  : "border-blue-900"
              }`}
              key={button.id}
              onClick={() => setSelected(button.selects)}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className="flex w-full justify-center mt-2">
          <InformationList data={data} width="w-1/4" />
          <LineChart labels={chartLabels} datasets={chartDatasets} />
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
