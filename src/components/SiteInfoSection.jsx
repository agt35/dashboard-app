import Container from "./Container";
import LineChart from "./LineChart";
import SiteInfoTable from "./SiteInfoTable";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import TableRowsIcon from "@mui/icons-material/TableRows";

const SiteInfoSection = ({ data, periods }) => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [filteredData, setFilteredData] = useState([{}]);
  const [showChart, setShowChart] = useState(true);

  useEffect(() => {
    const metrics = [
      ...new Set(
        data.datasets.map((metric) => {
          return metric.label
            .replace("Actual", "")
            .replace("Target", "")
            .trim();
        })
      ),
    ];
    setMetrics(metrics);
  }, [data]);

  useEffect(() => {
    const datasets = data.datasets.filter((dataset) =>
      selectedMetrics.includes(
        dataset.label.replace("Actual", "").replace("Target", "").trim()
      )
    );
    setFilteredData(datasets);
  }, [selectedMetrics]);

  const handleMetricClick = (metric) => {
    if (selectedMetrics.includes(metric)) {
      setSelectedMetrics(selectedMetrics.filter((m) => m !== metric));
    } else {
      setSelectedMetrics([...selectedMetrics, metric]);
    }
  };

  return (
    <div className="flex h-1/2">
      <Container width="w-1/4" height="h-11/12">
        <div className="">
          <h2 className="text-4xl text-slate-300">{data.label}</h2>
          <h3 className="text-slate-400">Select one or more metrics below:</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-10">
          {metrics.map((metric) => (
            <button
              className={`text-lg text-slate-300 border px-4 py-2 mb-1 flex justify-center items-center rounded-md transition-all duration-200 hover:bg-blue-600/50 active:bg-blue-950 ${
                selectedMetrics.includes(metric)
                  ? "border-blue-400"
                  : "border-blue-900 hover:border-blue-400"
              }`}
              key={metric}
              onClick={() => handleMetricClick(metric)}
            >
              {metric}
            </button>
          ))}
        </div>
        <div className="flex justify-around">
          <h3 className="text-slate-400">Select chart or table view:</h3>
          <button
            className={`mx-2 text-slate-300 border p-2 flex justify-center items-center rounded-md transition-all duration-200 hover:bg-blue-600/50 active:bg-blue-950 ${
              showChart
                ? "border-blue-400"
                : "border-blue-900 hover:border-blue-400"
            }`}
            onClick={() => setShowChart(!showChart)}
          >
            <SsidChartIcon sx={{ fontSize: 36 }} />
          </button>
          <button
            className={`mx-2 text-slate-300 border p-2 flex justify-center items-center rounded-md transition-all duration-200 hover:bg-blue-600/50 active:bg-blue-950 ${
              !showChart
                ? "border-blue-400"
                : "border-blue-900 hover:border-blue-400"
            }`}
            onClick={() => setShowChart(!showChart)}
          >
            <TableRowsIcon sx={{ fontSize: 36 }} />
          </button>
        </div>
      </Container>
      <Container width="w-3/4">
        {showChart ? (
          <LineChart labels={periods} datasets={filteredData} />
        ) : (
          <SiteInfoTable labels={periods} datasets={filteredData} />
        )}
      </Container>
    </div>
  );
};

SiteInfoSection.propTypes = {
  data: PropTypes.object.isRequired,
  periods: PropTypes.array.isRequired,
};
export default SiteInfoSection;
