import PageTitle from "@/components/molecules/pageTitle";
import SidebarRoute from "@/components/molecules/sidebarRoute";
import { Pages } from "@/consts/pages";
import { ISidebarRoute, settingsSidebarRoutes } from "@/consts/sidebarRoutes";
import { PagesIds, IPageConfig } from "@/types/page";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function SidebarRoutes() {
  let { pathname } = useLocation();
  const selectedRoute = pathname.split("/")[pathname.split("/").length - 1];
  const settingPageConfig: IPageConfig = Pages[PagesIds.SETTING];

  return (
    <div className="rounded-[11px] border-1 border-[#E5E7EB] overflow-hidden w-[288px]">
      <PageTitle {...settingPageConfig} />
      {settingsSidebarRoutes.map((route: ISidebarRoute) => (
        <SidebarRoute {...route} isSelected={selectedRoute === route.route} />
      ))}
    </div>
  );
}

export default SidebarRoutes;
