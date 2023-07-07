import { useEffect, useState } from "react";
import TableCard from "../components/TableCard";
import axios from "axios";
import ButtonGroup from "../components/ButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import LineChart from "../components/LineChart";
import { getLabels, getDatasetsRegionOverview } from "../data/utils";
import Container from "../components/Container";

const RegionOverviewScreen = () => {
  const [buttons, setButtons] = useState();
  const [selectedRegion, setSelectedRegion] = useState("Atlantic");
  const [data, setData] = useState();
  const [chartData, setChartData] = useState();

  const fetchRegionList = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/regions/");
      const buttons = response.data.map((region, index) => {
        return {
          id: index,
          name: region.region,
          selects: region.region,
        };
      });
      setButtons(buttons);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/data_metric/${selectedRegion}/`
      );
      const metricGroups = [
        ...new Set(response.data.map((item) => item.group)),
      ];
      const datasets = [];
      metricGroups.forEach((title) => {
        const titleDataset = {
          label: title,
          data: response.data.filter((item) => item.group === title),
        };
        datasets.push(titleDataset);
      });
      setData(datasets);
    } catch (error) {
      console.log(error);
    }
  };

  const onButtonGroupSelect = (button) => {
    setSelectedRegion(button.name);
  };

  const handleChartDataSelection = (metricGroup) => {
    console.log(metricGroup);
    const inputData = data.filter((item) => item.label === metricGroup)[0].data;
    const labels = getLabels(inputData);
    const datasets = getDatasetsRegionOverview(inputData);
    setChartData({ labels, datasets });
  };

  useEffect(() => {
    fetchRegionList();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedRegion]);

  return (
    <div className="font-roboto flex flex-col justify-start items-center h-screen overflow-scroll no-scrollbar">
      <h2 className="text-6xl text-slate-100 mt-2">Region</h2>
      <div className="flex my-3">
        {buttons ? (
          <ButtonGroup buttonList={buttons} onSelect={onButtonGroupSelect} />
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="w-full px-2 flex-grow">
        <div className="flex h-1/2">
          {data ? (
            data.map((item) => (
              <TableCard
                key={item.label}
                title={item.label}
                data={item.data}
                onSelectChartData={handleChartDataSelection}
              />
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="w-full flex justify-center h-1/2">
          {chartData ? (
            <LineChart
              datasets={chartData.datasets}
              labels={chartData.labels}
              width={"w-full"}
            />
          ) : (
            <Container>
              <h2 className="text-4xl text-slate-100 mt-2">
                Select a Metric Group to view it in chart
              </h2>
            </Container>
          )}
        </div>
      </div>
    </div>
  );
};
export default RegionOverviewScreen;
