import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import SiteInfoSection from "../components/SiteInfoSection";
import { getDatasetsSite } from "../data/utils";

const SiteScreen = () => {
  const [regions, setRegions] = useState([]);
  const [sites, setSites] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSite, setSelectedSite] = useState("");
  const [siteData, setSiteData] = useState([]);

  const fetchRegionList = async () => {
    const { data } = await axios.get("http://localhost:8000/regions");
    const regions = data.map((region) => region.region);
    setRegions(regions);
  };

  const fetchSiteList = async (region) => {
    const { data } = await axios.get(
      `http://localhost:8000/regions/${region}/locations`
    );
    const locations = data.map((location) => location.location);
    setSites(locations);
  };

  const fetchSiteData = async (site) => {
    const { data } = await axios.get(
      `http://localhost:8000/data_entries/${site}`
    );
    console.log(getDatasetsSite(data));
    setSiteData(getDatasetsSite(data));
  };

  useEffect(() => {
    fetchRegionList();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      fetchSiteList(selectedRegion);
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedSite) {
      fetchSiteData(selectedSite);
    }
  }, [selectedSite]);

  const handleDropDownSelect = (dropdownId, item) => {
    if (dropdownId === "region") {
      if (item === null) {
        setSelectedSite("");
        setSites([]);
        setSelectedSite("");
        setSiteData([]);
      }
      setSelectedRegion(item);
      setSelectedSite("");
    } else if (dropdownId === "site") {
      if (item === null) {
        setSelectedSite("");
        setSiteData([]);
      }
      setSelectedSite("");
      setSelectedSite(item);
    }
  };

  return (
    <div className="font-roboto flex flex-col justify-start items-center h-screen overflow-scroll no-scrollbar">
      <h2 className="text-6xl text-slate-100 mb-4 mt-2">Site Deep Dive</h2>
      <div className="flex mb-2">
        <Dropdown
          placeholder="Select a Region"
          dropdownId="region"
          items={regions}
          classes="mx-12"
          onSelect={handleDropDownSelect}
        />
        <Dropdown
          placeholder={
            selectedRegion ? "Select a Site" : "Select a Region First"
          }
          dropdownId="site"
          items={sites}
          classes="mx-12"
          onSelect={handleDropDownSelect}
        />
      </div>
      <div className="flex flex-col justify-start w-full h-full overflow-scroll no-scrollbar">
        {siteData.datasets ? (
          siteData.datasets.map((data, index) => (
            <SiteInfoSection
              key={index}
              data={data}
              periods={siteData.periods}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="border border-blue-900 hover:border-blue-400 animate-pulse p-10 rounded-lg shadow flex flex-col justify-center items-center transition-all duration-500 ease-in">
              <h2 className="text-4xl text-slate-400/75">No Data Available.</h2>
              <h3 className="text-3xl text-slate-600">Please select a site.</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SiteScreen;
