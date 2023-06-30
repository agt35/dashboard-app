import InformationCard from "../components/InformationCard";
import {
  regionalDiffToTarget,
  metricGroupDiffToTarget,
  siteDiffToTarget,
  metricNameDiffToTarget,
} from "../data/data";
import { getLabels, getDatasets } from "../data/utils";
import {
  chartDataRegion,
  chartDataMetricGroup,
  chartDataMetricName,
  chartDataSite,
} from "../data/data";
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
    selects: "metricGroup",
  },
  {
    id: 3,
    name: "Metrics",
    selects: "metric",
  },
  {
    id: 4,
    name: "Sites",
    selects: "site",
  },
];

const OverviewScreen = () => {
  const bestRegion = regionalDiffToTarget.reduce((prev, curr) =>
    prev.difference > curr.difference ? prev : curr
  );
  const worstRegion = regionalDiffToTarget.reduce((prev, curr) =>
    prev.difference < curr.difference ? prev : curr
  );
  const bestMetricGroup = metricGroupDiffToTarget.reduce((prev, curr) =>
    prev.difference > curr.difference ? prev : curr
  );
  const worstMetricGroup = metricGroupDiffToTarget.reduce((prev, curr) =>
    prev.difference < curr.difference ? prev : curr
  );

  const [selected, setSelected] = useState("region");
  const [data, setData] = useState(regionalDiffToTarget);
  const [chartLabels, setChartLabels] = useState(getLabels(chartDataRegion));
  const [chartDatasets, setChartDatasets] = useState(
    getDatasets(chartDataRegion)
  );

  useEffect(() => {
    switch (selected) {
      case "region":
        setData(regionalDiffToTarget);
        setChartLabels(getLabels(chartDataRegion));
        setChartDatasets(getDatasets(chartDataRegion));
        break;
      case "metricGroup":
        setData(metricGroupDiffToTarget);
        setChartLabels(getLabels(chartDataMetricGroup));
        setChartDatasets(getDatasets(chartDataMetricGroup));
        break;
      case "metric":
        setData(metricNameDiffToTarget);
        setChartLabels(getLabels(chartDataMetricName));
        setChartDatasets(getDatasets(chartDataMetricName));
        break;
      case "site":
        setData(siteDiffToTarget);
        setChartLabels(getLabels(chartDataSite));
        setChartDatasets(getDatasets(chartDataSite));
        break;
      default:
        setData(regionalDiffToTarget);
        setChartLabels(getLabels(chartDataRegion));
        setChartDatasets(getDatasets(chartDataRegion));
    }
  }, [selected]);

  return (
    <div className="font-roboto flex flex-col justify-center items-center mt-2">
      <h2 className="text-6xl text-slate-100">Overview</h2>
      <div className="grid grid-cols-2 md:flex w-full justify-around mt-3">
        <InformationCard title="Best Region" data={bestRegion} best />
        <InformationCard title="Worst Region" data={worstRegion} />
        <InformationCard
          title="Best Metric Group"
          data={bestMetricGroup}
          best
        />
        <InformationCard title="Worst Metric Group" data={worstMetricGroup} />
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
        <div className="flex w-full mt-2">
          <InformationList data={data} width="w-1/4" />
          <LineChart labels={chartLabels} datasets={chartDatasets} />
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
