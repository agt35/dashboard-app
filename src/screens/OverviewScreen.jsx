import InformationCard from "../components/InformationCard";
import axios from "axios";
import { getLabels, getDatasets } from "../data/utils";
import InformationList from "../components/InformationList";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import ButtonGroup from "../components/ButtonGroup";
import Container from "../components/Container";

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

  const onButtonGroupSelect = (button) => {
    setSelected(button.selects);
  };

  useEffect(() => {
    fetchCardsData();
  }, []);

  useEffect(() => {
    fetchTableData();
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
        `http://127.0.0.1:8000/data_difference_${selected}/`
      );
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
      const metricResponse = await axios.get(
        `http://127.0.0.1:8000/summary_group/`
      );
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
        <ButtonGroup buttonList={buttons} onSelect={onButtonGroupSelect} />
        <div className="flex w-full justify-center mt-2">
          <InformationList data={data} width="w-1/4" />
          <Container width="w-2/3">
            <LineChart labels={chartLabels} datasets={chartDatasets} />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
