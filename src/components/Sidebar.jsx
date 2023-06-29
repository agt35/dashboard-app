import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import TroubleshootTwoToneIcon from "@mui/icons-material/TroubleshootTwoTone";
import FlagTwoToneIcon from "@mui/icons-material/FlagTwoTone";
import MyLocationTwoToneIcon from "@mui/icons-material/MyLocationTwoTone";
import CompareArrowsTwoToneIcon from "@mui/icons-material/CompareArrowsTwoTone";

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div className="h-screen w-[18%] bg-blue-900 shadow-2xl rounded-sm z-10 flex flex-col font-roboto">
      <h1 className="text-zinc-200 text-5xl text-center h-[10%] mt-10">
        Flight Plans
      </h1>
      <div className="mt-8 flex flex-col items-center">
        <div className="text-zinc-400 p-6 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
          <NavLink
            to="overview"
            className={({ isActive }) => (isActive ? "text-blue-200" : "")}
          >
            <TroubleshootTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Overview</h2>
          </NavLink>
        </div>
        <div className="text-zinc-400 p-6 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
          <NavLink
            to="region"
            className={({ isActive }) => (isActive ? "text-blue-200" : "")}
          >
            <FlagTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Region Analysis</h2>
          </NavLink>
        </div>
        <div className="text-zinc-400 p-6 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
          <NavLink
            to="site"
            className={({ isActive }) => (isActive ? "text-blue-200" : "")}
          >
            <MyLocationTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Site Deep Dive</h2>
          </NavLink>
        </div>
        <div className="text-zinc-400 p-6 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
          <NavLink
            to="siteCompare"
            className={({ isActive }) => (isActive ? "text-blue-200" : "")}
          >
            <CompareArrowsTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Site Comparison</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
