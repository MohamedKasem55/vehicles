import React from "react";
import { IColumnSchema } from "@/store/slices/tableSlice";

export interface IPageConfig {
  id: string;
  route: string;
  dashboardTitle: string;
  dashboardIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  pageTitle: string;
  pageTitleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  useTableSchema: () => IColumnSchema[];
}

export enum PagesIds {
  SERVICES = "services",
  INBOX = "inbox",
  INFORMATION = "information",
  SETTINGS = "settings",
  AUTHORITY = "authority",
}
