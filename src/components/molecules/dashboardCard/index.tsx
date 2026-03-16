import IconWrapper from "@/components/atoms/iconWrapper";
import { IPageConfig } from "@/types/page";
import React from "react";
import { Link } from "react-router-dom";

function DashboardCard({
  dashboardIconConfig,
  dashboardTitle,
  id,
  route,
}: Partial<IPageConfig>) {
  return (
    <Link to={route!}>
      <div
        key={id}
        className="bg-[#3D5A50] w-72 h-48 opacity-100 rounded-2xl flex flex-row justify-center items-center cursor-pointer hover:opacity-70"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <IconWrapper
            iconConfig={dashboardIconConfig!}
            customClasses={
              "bg-[#506A62] w-20 h-20 rounded-[16px] text-[#C5A059]"
            }
          />
          <span className="font-bold text-center leading-7 tracking-normal align-middle text-[17px] text-white">
            {dashboardTitle}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default DashboardCard;
