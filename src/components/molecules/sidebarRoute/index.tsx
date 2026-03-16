import { ISidebarRoute } from "@/consts/sidebarRoutes";
import React from "react";
import { Link } from "react-router-dom";
import LeftChevron from "@/components/atoms/icons/LeftChevronIcon";
function SidebarRoute({
  displayText,
  icon: Icon,
  isSelected,
  route,
}: ISidebarRoute) {
  return (
    <Link to={route}>
      <div className={
        `flex flex-row justify-between items-center 
         h-11 pl-4
         ${isSelected?'text-[#0D9488] bg-[#F0FDFA]  border-r-[#0D9488]! border-r-4! pr-3':'text-[#9CA3AF] bg-white hover:opacity-60 pr-4'}
         `
      }>
        <LeftChevron />
        <div className="flex flex-row justify-between gap-4">
          <span className="font-inter font-medium text-[11.9px] leading-5 tracking-normal">{displayText}</span>
          <Icon/>
        </div>
      </div>
    </Link>
  );
}

export default SidebarRoute;
