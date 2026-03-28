import { ISidebarRoute, settingsSidebarRoutes } from "@/consts/sidebarRoutes";
import React, { useMemo, useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import SettingsMainPage from "./settingsMainPage";
import SidebarRoutes from "@/components/organisms/sidebar";
import PageTitle from "@/components/molecules/pageTitle";

function Settings() {
  const { pathname } = useLocation();
  const currentRoute = pathname.split("/")[pathname.split("/").length - 1];

  const page: ISidebarRoute = settingsSidebarRoutes.find(
    (pageConfig: ISidebarRoute) => pageConfig.route === currentRoute,
  )!;

  return (
    <div className="flex flex-row gap-5 p-5">
      <div className="flex-1 flex flex-col gap-4 ">
        <PageTitle pageTitle={page.displayText} pageTitleIcon={page.icon} />
        <Outlet />
      </div>
      <SidebarRoutes />
    </div>
  );
}

export default Settings;
