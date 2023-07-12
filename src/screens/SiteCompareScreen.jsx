import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import SiteCompareCard from "../components/SiteCompareCard";
import AddIcon from "@mui/icons-material/Add";

const SiteCompareScreen = () => {
  const [metricGroups, setMetricGroups] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedMetric, setSelectedMetric] = useState("");
  const [siteList, setSiteList] = useState([1, 2]);
  const nextCardId = useRef(3);

  useEffect(() => {
    fetchMetricGroups();
  }, []);

  useEffect(() => {
    fetchMetrics(selectedGroup);
  }, [selectedGroup]);

  const fetchMetricGroups = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/metric_groups/`
      );
      setMetricGroups(data.map((item) => item.name));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMetrics = async (metricGroup) => {
    if (metricGroup === "") {
      return;
    }
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/metric_groups/${metricGroup}/metrics/`
      );
      setMetrics(data.map((item) => item.name));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropdownSelect = (dropdownId, item) => {
    if (dropdownId === "metricGroup") {
      setSelectedGroup(item);
      setSelectedMetric("");
    }
    if (dropdownId === "metric") {
      setSelectedMetric(item);
    }
  };

  const handleCardAddition = () => {
    setSiteList((prev) => [...prev, nextCardId.current]);
    nextCardId.current++;
  };

  const handleCardDeletion = (cardId) => {
    setSiteList((prev) => prev.filter((id) => id !== cardId));
  };

  return (
    <div className="font-roboto flex flex-col justify-start items-center h-screen mx-2 overflow-scroll no-scrollbar">
      <h2 className="text-6xl text-slate-100 mb-4 mt-2">Site Compare</h2>
      <div className="flex">
        <Dropdown
          placeholder="Select a Metric Group"
          items={metricGroups}
          dropdownId="metricGroup"
          classes="mx-12"
          buttonClasses="w-72"
          onSelect={handleDropdownSelect}
        />
        <Dropdown
          placeholder={
            selectedGroup ? "Select a metric" : "Select a metric group first"
          }
          items={metrics}
          dropdownId="metric"
          classes="mx-12"
          buttonClasses="w-72"
          onSelect={handleDropdownSelect}
        />
      </div>
      <div className="w-full h-full overflow-scroll no-scrollbar mt-6">
        <div className="grid grid-cols-2">
          {siteList.map((siteId) => (
            <SiteCompareCard
              key={siteId}
              metric={selectedMetric}
              onCardDelete={() => handleCardDeletion(siteId)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-slate-400 rounded-full bg-slate-700/50 hover:bg-slate-700 disabled:bg-slate-800 disabled:text-slate-700"
            onClick={handleCardAddition}
          >
            <AddIcon sx={{ fontSize: 96 }} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SiteCompareScreen;
