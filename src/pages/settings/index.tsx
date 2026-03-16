import { ISidebarRoute, settingsSidebarRoutes } from "@/consts/sidebarRoutes";
import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import SettingsMainPage from "./settingsMainPage";
import SidebarRoutes from "@/components/organisms/sidebar";

function Settings() {
  
  return (
    <div className="flex flex-row gap-5 p-5">
        <div className="flex-1">
            <Outlet/>
        </div>
        <SidebarRoutes/>
    </div>
  );
}

export default Settings;
