import { IconConfig } from "@/components/atoms/icon";

export interface IPageConfig {
  id: string;
  route: string;
  dashboardTitle: string;
  dashboardIconConfig: IconConfig;
  pageTitle: string;
  pageTitleIconConfig: IconConfig;
}

export enum PagesIds {
  SERVICES = "services",
  INBOX = "inbox",
  INFORMATION = "information",
  SETTING = "setting",
  AUTHORITY = "authority",
}
