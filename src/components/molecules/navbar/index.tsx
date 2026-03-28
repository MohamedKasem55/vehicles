import React from "react";
import LogoIcon from "@/components/atoms/icons/LogoIcon";
import NavbarButton, {
  INavbarButton,
} from "@/components/molecules/navbarButton";
import DashboardIcon from "@/components/atoms/icons/DashboardIcon";
import LogoutIcon from "@/components/atoms/icons/LogoutIcon";
import ProfileIcon from "@/components/atoms/icons/ProfileIcon";
import { useLocation } from "react-router-dom";
function Navbar() {

  
  const location = useLocation()
  const NavbarButtons: Partial<INavbarButton>[] = [
    { id: "logout", text: "تسجيل الخروج", icon: LogoutIcon },
    { id: "profile", text: "محمد خالد", icon: ProfileIcon },
    ...( location.pathname !== '/dashboard' ? [{ id: "dashboard", text: "الرئيسية", icon: DashboardIcon }] : []) ,
  ];

  const navbarButtonClickHandler = (id: string) => {

  };
  return (
    <div className="flex flex-row items-center justify-between pl-20">
      <div className="flex flex-row items-center justify-between gap-8">

      {NavbarButtons.map((navbarButton: Partial<INavbarButton>,index:number) => (
        <>
        <NavbarButton
        id={navbarButton.id!}
        icon={navbarButton.icon!}
        text={navbarButton.text!}
        clickHandler={navbarButtonClickHandler}
        />
        {(index !==NavbarButtons.length-1) && <span className="text-[#D1D5DB]">|</span>}
        </>
      ))}
      </div>
      <LogoIcon className="w-20 h-15 fill-blue-500" />
    </div>
  );
}

export default Navbar;
