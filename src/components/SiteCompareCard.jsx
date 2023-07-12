import Container from "./Container";
import Dropdown from "./Dropdown";
import LineChart from "./LineChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDatasetsCompare } from "../data/utils";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { PropTypes } from "prop-types";

const SiteCompareCard = ({ metric, onCardDelete }) => {
  const [regions, setRegions] = useState([]);
  const [sites, setSites] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const fetchRegionList = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/regions`);
    const regions = data.map((region) => region.region);
    setRegions(regions);
  };

  const fetchSiteList = async () => {
    if (selectedRegion === "") {
      return;
    }
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/regions/${selectedRegion}/locations`
    );
    const locations = data.map((location) => location.location);
    setSites(locations);
  };

  const fetchData = async () => {
    if (location === "") {
      return;
    }
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/data_entries/${location}/${metric}`
    );
    const dataChart = getDatasetsCompare(data);
    console.log(dataChart);
    setData(dataChart);
  };

  const handleDropDownSelect = (dropdownId, item) => {
    if (dropdownId === "region") {
      if (item === null) {
        setLocation("");
        setSites([]);
        setLocation("");
      } else {
        setLocation("");
        setSelectedRegion(item);
      }
    }
    if (dropdownId === "site") {
      if (item === null) {
        setLocation("");
      } else {
        setLocation(item);
      }
    }
  };

  useEffect(() => {
    fetchRegionList();
  }, []);

  useEffect(() => {
    fetchSiteList();
  }, [selectedRegion]);

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <Container>
      <div className="flex justify-around my-2">
        <Dropdown
          placeholder={metric ? "Select a region" : "Select a metric first"}
          items={metric ? regions : []}
          buttonClasses="w-56 bg-blue-400"
          dropdownId="region"
          onSelect={handleDropDownSelect}
        />
        <Dropdown
          placeholder={selectedRegion ? "Select a site" : "Select region first"}
          items={sites}
          buttonClasses="w-56 bg-blue-400"
          dropdownId="site"
          onSelect={handleDropDownSelect}
        />
      </div>
      <div>
        {location ? (
          <LineChart labels={data.labels} datasets={data.datasets} />
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-2xl text-slate-400">
              Select a region and site to compare
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button
          className="text-slate-400 hover:text-blue-300 transition-all duration-200 ease-linear"
          onClick={onCardDelete}
        >
          <DeleteForeverRoundedIcon sx={{ fontSize: 36 }} />
        </button>
      </div>
    </Container>
  );
};
SiteCompareCard.propTypes = {
  metric: PropTypes.string,
  onCardDelete: PropTypes.func,
};
export default SiteCompareCard;
