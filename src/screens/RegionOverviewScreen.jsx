import { regions } from "../data/data";
import { useEffect, useState } from "react";
import ChartCard from "../components/ChartCard";

const RegionOverviewScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  console.log(regions);
  console.log(selectedRegion);

  return (
    <div className="font-roboto flex flex-col justify-center items-center mt-2">
      <h2 className="text-6xl text-slate-100">Region</h2>
      <div className="flex mt-3">
        {regions.map((region) => (
          <button
            className={`text-xl text-slate-200 border p-2 w-48 first:rounded-l-lg last:rounded-r-lg hover:bg-blue-800/25 transition-all duration-200 active:bg-blue-950 ${
              selectedRegion === region.name
                ? "border-blue-400"
                : "border-blue-900"
            }`}
            key={region.id}
            onClick={() => setSelectedRegion(region.name)}
          >
            {region.name}
          </button>
        ))}
      </div>
      <div className="w-full ml-4">
        <ChartCard />
      </div>
    </div>
  );
};
export default RegionOverviewScreen;
