import SuitcaseIcon from "@/components/atoms/icons/SuitcaseIcon";
import InboxIcon from "@/components/atoms/icons/InboxIcon";
import MagnifyingGlassIcon from "@/components/atoms/icons/MagnifyingGlassIcon";
import SettingIcon from "@/components/atoms/icons/SettingIcon";
import AuthorityIcon from "@/components/atoms/icons/AuthorityIcon";
import { IPageConfig, PagesIds } from "@/types/page";

export const Pages: Record<PagesIds, IPageConfig> = {
  [PagesIds.SERVICES]: {
    id: "services",
    route: "/services",
    dashboardTitle: "الخدمات",
    dashboardIconConfig: { icon: SuitcaseIcon, width: 48, height: 48 },
    pageTitle: "الخدمات",
    pageTitleIconConfig: {
      icon: SuitcaseIcon,
      width: 24,
      height: 24,
      strokeWidth: 4,
    },
  },
  [PagesIds.INBOX]: {
    id: "inbox",
    route: "/inbox",
    dashboardTitle: "صندوق المتابعة",
    dashboardIconConfig: { icon: InboxIcon, width: 48, height: 48 },
    pageTitle: "صندوق المتابعة",
    pageTitleIconConfig: {
      icon: InboxIcon,
      width: 24,
      height: 24,
      strokeWidth: 4,
    },
  },
  [PagesIds.INFORMATION]: {
    id: "information",
    route: "/information",
    dashboardTitle: "الإستعلامات",
    dashboardIconConfig: { icon: MagnifyingGlassIcon, width: 48, height: 48 },
    pageTitle: "الإستعلامات",
    pageTitleIconConfig: {
      icon: MagnifyingGlassIcon,
      width: 24,
      height: 24,
      strokeWidth: 4,
    },
  },
  [PagesIds.SETTING]: {
    id: "settings",
    route: "/settings/system-tables",
    dashboardTitle: "إعدادات النظام",
    dashboardIconConfig: { icon: SettingIcon, width: 48, height: 48 },
    pageTitle: "إعدادات النظام",
    pageTitleIconConfig: {
      icon: SettingIcon,
      width: 24,
      height: 24,
      strokeWidth: 4,
    },
  },
  [PagesIds.AUTHORITY]: {
    id: "authority",
    route: "/authority",
    dashboardTitle: "الصلاحيات",
    dashboardIconConfig: { icon: AuthorityIcon, width: 48, height: 48 },
    pageTitle: "الصلاحيات",
    pageTitleIconConfig: {
      icon: AuthorityIcon,
      width: 24,
      height: 24,
      strokeWidth: 4,
    },
  },
};
