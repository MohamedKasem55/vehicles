import { IconConfig } from "@/components/atoms/icon";
import { IColumnSchema } from "@/store/slices/tableSlice";

export interface IPageConfig {
  id: string;
  route: string;
  dashboardTitle: string;
  dashboardIconConfig: IconConfig;
  pageTitle: string;
  pageTitleIconConfig: IconConfig;
  useTableSchema: () => IColumnSchema[];
}

export enum PagesIds {
  SERVICES = "services",
  INBOX = "inbox",
  INFORMATION = "information",
  SETTING = "setting",
  AUTHORITY = "authority",
}
