import { NavLink } from "react-router-dom";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import TroubleshootTwoToneIcon from "@mui/icons-material/TroubleshootTwoTone";
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
        <div className="text-zinc-400 p-2 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
          <NavLink
            to="overview"
            className={({ isActive }) => (isActive ? "text-blue-200" : "")}
          >
            <TroubleshootTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Overview</h2>
          </NavLink>
        </div>
        <div className="text-zinc-400 p-2 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
          <NavLink
            to="region"
            className={({ isActive }) => (isActive ? "text-blue-200" : "")}
          >
            <FlagTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Region Analysis</h2>
          </NavLink>
        </div>
        <div className="text-zinc-400 p-2 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
          <NavLink
            to="site"
            className={({ isActive }) => (isActive ? "text-blue-200" : "")}
          >
            <MyLocationTwoToneIcon sx={{ fontSize: 75 }} />
            <h2>Site Deep Dive</h2>
          </NavLink>
        </div>
        <div className="text-zinc-400 p-2 text-2xl text-center flex hover:text-blue-200 hover:bg-blue-500/25 w-full justify-center">
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
