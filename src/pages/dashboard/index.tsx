import DashboardCard from "@/components/molecules/dashboardCard";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IPageConfig } from "@/types/page";
import { Pages } from "@/consts/pages";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col justify-center items-center flex-1 gap-3 ">
      <div className="text-[#104731] font-bold text-center leading-10 tracking-normal align-middle text-[30.6px]">
        مرحبا بك في نظام المركبات
      </div>
      <div className="text-[#6B7280] font-normal text-center leading-7 tracking-normal align-middle text-[15.3px]">
        اختر الخدمة التي تريدالوصول إليها
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5 w-[60%]">
        {Object.values(Pages).map((dashboardCard: Partial<IPageConfig>) => (
          <DashboardCard
            key={dashboardCard.id}
            dashboardIconConfig={dashboardCard.dashboardIconConfig!}
            id={dashboardCard.id!}
            dashboardTitle={dashboardCard.dashboardTitle!}
            route={dashboardCard.route!}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
