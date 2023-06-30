import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import OverviewScreen from "./screens/OverviewScreen.jsx";
import RegionOverviewScreen from "./screens/RegionOverviewScreen.jsx";
import SiteScreen from "./screens/SiteScreen.jsx";
import SiteCompareScreen from "./screens/SiteCompareScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<OverviewScreen />} />
      <Route path="region" element={<RegionOverviewScreen />} />
      <Route path="site" element={<SiteScreen />} />
      <Route path="siteCompare" element={<SiteCompareScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
