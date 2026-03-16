import PageTitle from "@/components/molecules/pageTitle";
import Table from "@/components/organisms/table";
import { Pages } from "@/consts/pages";
import { ISidebarRoute, settingsSidebarRoutes } from "@/consts/sidebarRoutes";
import { IPageConfig } from "@/types/page";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

function SettingsMainPage() {
  let { pathname } = useLocation();
  const currentRoute = pathname.split("/")[pathname.split("/").length - 1];
  
  const page: ISidebarRoute = settingsSidebarRoutes.find(
    (pageConfig: ISidebarRoute) =>
      pageConfig.route === currentRoute,
  )!;
  
  return (
    <div>
      <PageTitle pageTitle={page.displayText} pageTitleIcon={page.icon} />
      {/* <Table tableSchema={page?.useTableSchema?.()!} /> */}
    </div>
  );
}

export default SettingsMainPage;
