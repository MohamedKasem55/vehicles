import SuitcaseIcon from "@/components/atoms/icons/SuitcaseIcon";
import InboxIcon from "@/components/atoms/icons/InboxIcon";
import MagnifyingGlassIcon from "@/components/atoms/icons/MagnifyingGlassIcon";
import SettingIcon from "@/components/atoms/icons/SettingIcon";
import AuthorityIcon from "@/components/atoms/icons/AuthorityIcon";
import { IPageConfig, PagesIds } from "@/types/page";
import useInboxSchema from "@/hooks/useInboxSchema";

export const Pages: Record<PagesIds, IPageConfig> = {
  [PagesIds.SERVICES]: {
    id: "services",
    route: "/services",
    dashboardTitle: "الخدمات",
    dashboardIcon: SuitcaseIcon,
    pageTitle: "الخدمات",
    pageTitleIcon: SuitcaseIcon,
    useTableSchema: useInboxSchema,
  },
  [PagesIds.INBOX]: {
    id: "inbox",
    route: "/inbox",
    dashboardTitle: "صندوق المتابعة",
    dashboardIcon: InboxIcon,
    pageTitle: "صندوق المتابعة",
    pageTitleIcon: InboxIcon,
    useTableSchema: useInboxSchema,
  },
  [PagesIds.INFORMATION]: {
    id: "information",
    route: "/information",
    dashboardTitle: "الإستعلامات",
    dashboardIcon: MagnifyingGlassIcon,
    pageTitle: "الإستعلامات",
    pageTitleIcon: MagnifyingGlassIcon,
    useTableSchema: useInboxSchema,
  },
  [PagesIds.SETTING]: {
    id: "settings",
    route: "/settings/system-tables",
    dashboardTitle: "إعدادات النظام",
    dashboardIcon: SettingIcon,
    pageTitle: "إعدادات النظام",
    pageTitleIcon: SettingIcon,
    useTableSchema: useInboxSchema,
  },
  [PagesIds.AUTHORITY]: {
    id: "authority",
    route: "/authority",
    dashboardTitle: "الصلاحيات",
    dashboardIcon: AuthorityIcon,
    pageTitle: "الصلاحيات",
    pageTitleIcon: AuthorityIcon,
    useTableSchema: useInboxSchema,
  },
};
