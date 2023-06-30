import { NavLink } from "react-router-dom";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import FlagTwoToneIcon from "@mui/icons-material/FlagTwoTone";
import MyLocationTwoToneIcon from "@mui/icons-material/MyLocationTwoTone";
import CompareArrowsTwoToneIcon from "@mui/icons-material/CompareArrowsTwoTone";

const Sidebar = () => {
  return (
    <div className="h-screen w-[18%] bg-blue-900/75 shadow-2xl rounded-sm z-10 flex flex-col font-roboto sticky top-0">
      <div className="flex flex-col justify-center items-center py-5">
        <SendRoundedIcon sx={{ fontSize: 100 }} className="text-zinc-200" />
        <h1 className="text-zinc-200 text-5xl text-center">Flight Plans</h1>
      </div>
      <div className="mt-2 flex flex-1 flex-col items-center justify-around">
        <div className="text-slate-300 p-2 text-2xl text-center flex-1 flex hover:text-blue-200 hover:bg-blue-500/25 active:bg-blue-900 w-full justify-center items-center transition-all duration-300 ease-in-out">
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <DashboardCustomizeRoundedIcon sx={{ fontSize: 75 }} />
            <h2>Overview</h2>
          </NavLink>
        </div>
        <div className="text-slate-300 p-2 text-2xl text-center flex-1 flex hover:text-blue-200 hover:bg-blue-500/25 active:bg-blue-900 w-full justify-center items-center transition-all duration-300 ease-in-out">
          <NavLink
            to="region"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <FlagTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Region Analysis</h2>
          </NavLink>
        </div>
        <div className="text-slate-300 p-2 text-2xl text-center flex-1 flex hover:text-blue-200 hover:bg-blue-500/25 active:bg-blue-900 w-full justify-center items-center transition-all duration-300 ease-in-out">
          <NavLink
            to="site"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <MyLocationTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Site Deep Dive</h2>
          </NavLink>
        </div>
        <div className="text-slate-300 p-2 text-2xl text-center flex-1 flex hover:text-blue-200 hover:bg-blue-500/25 active:bg-blue-900 w-full justify-center items-center transition-all duration-300 ease-in-out">
          <NavLink
            to="siteCompare"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
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
