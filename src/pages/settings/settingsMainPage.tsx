import PageTitle from "@/components/molecules/pageTitle";
import TransportCities from "@/components/organisms/transportCities";
import { ISidebarRoute, settingsSidebarRoutes } from "@/consts/sidebarRoutes";
import React from "react";
import { useLocation } from "react-router-dom";

function SettingsMainPage() {
  let { pathname } = useLocation();
  const currentRoute = pathname.split("/")[pathname.split("/").length - 1];

  const page: ISidebarRoute = settingsSidebarRoutes.find(
    (pageConfig: ISidebarRoute) => pageConfig.route === currentRoute,
  )!;

  return (
    <div className="flex flex-col gap-4 p-5">
      <PageTitle pageTitle={page.displayText} pageTitleIcon={page.icon} />
      <TransportCities />
    </div>
  );
}

export default SettingsMainPage;
