import SystemTablesIcon from "@/components/atoms/icons/sidebar/SystemTablesIcon";
import VehicleCompaniesIcon from "@/components/atoms/icons/sidebar/VehicleCompaniesIcon";
import VehicleModelsIcon from "@/components/atoms/icons/sidebar/VehicleModelsIcon";
import VehicleOwnersIcon from "@/components/atoms/icons/sidebar/VehicleOwnersIcon";
import DepartmentCodingIcon from "@/components/atoms/icons/sidebar/DepartmentCodingIcon";
import InsuranceCompaniesIcon from "@/components/atoms/icons/sidebar/InsuranceCompaniesIcon";
import TrafficOfficialsIcon from "@/components/atoms/icons/sidebar/TrafficOfficialsIcon";
import MaintenanceOfficialsIcon from "@/components/atoms/icons/sidebar/MaintenanceOfficialsIcon";
import HajjVehiclesIcon from "@/components/atoms/icons/sidebar/HajjVehiclesIcon";
import TransportDriversIcon from "@/components/atoms/icons/sidebar/TransportDriversIcon";
import TransportCitiesIcon from "@/components/atoms/icons/sidebar/TransportCitiesIcon";
import VehicleRegistrationIcon from "@/components/atoms/icons/sidebar/VehicleRegistrationIcon";
import VehicleAssignmentIcon from "@/components/atoms/icons/sidebar/VehicleAssignmentIcon";
import PrintPermitsIcon from "@/components/atoms/icons/sidebar/PrintPermitsIcon";
import React from "react";
import TransportCities from "@/components/organisms/transportCities";
import { IColumnSchema } from "@/store/slices/tableSlice";
import useTransportCitiesTableSchema from "@/hooks/settingsTableSchemas/useTransportCitiesTableSchema";
import useSystemTablesTableSchema from "@/hooks/settingsTableSchemas/useSystemTablesTableSchema";
import useVehicleCompaniesTableSchema from "@/hooks/settingsTableSchemas/useVehicleCompaniesTableSchema";
import { fetchSystemTablesData, SYSTEM_TABLES_ITEMS_PER_PAGE } from "@/mocks/systemTables";
import { fetchVehicleCompaniesData, VEHICLE_COMPANIES_ITEMS_PER_PAGE } from "@/mocks/vehicleCompanies";
import { fetchTransportCitiesData, TRANSPORT_CITIES_ITEMS_PER_PAGE } from "@/mocks/transportCities";

export interface ISidebarRoute {
  route: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  displayText: string;
  isSelected: boolean;
  insideTableExtraComponent?: React.ReactNode;
  beforeTableExtraComponent?: React.ReactNode;
  afterTableExtraComponent?: React.ReactNode;
  useTableSchema?: () => IColumnSchema[];
  fetchData?: (page: number, perPage: number) => Promise<{ data: any[]; total: number }>;
  itemsPerPage?: number;
  hasTable?: boolean;
}

export const settingsSidebarRoutes: ISidebarRoute[] = [
  {
    route: "system-tables",
    icon: SystemTablesIcon,
    displayText: "جداول النظام",
    isSelected: false,
    hasTable: true,
    useTableSchema: useSystemTablesTableSchema,
    fetchData: fetchSystemTablesData,
    itemsPerPage: SYSTEM_TABLES_ITEMS_PER_PAGE,
  },
  {
    route: "vehicle-companies",
    icon: VehicleCompaniesIcon,
    displayText: "شركات المركبات",
    isSelected: false,
    hasTable: true,
    useTableSchema: useVehicleCompaniesTableSchema,
    fetchData: fetchVehicleCompaniesData,
    itemsPerPage: VEHICLE_COMPANIES_ITEMS_PER_PAGE,
  },
  {
    route: "vehicle-models",
    icon: VehicleModelsIcon,
    displayText: "طراز المركبات",
    isSelected: false,
  },
  {
    route: "vehicle-owners",
    icon: VehicleOwnersIcon,
    displayText: "بيانات مالكي المركبات",
    isSelected: false,
  },
  {
    route: "department-coding",
    icon: DepartmentCodingIcon,
    displayText: "ترميز الإدارات لشريحة واعي",
    isSelected: false,
  },
  {
    route: "insurance-companies",
    icon: InsuranceCompaniesIcon,
    displayText: "شركات التأمين",
    isSelected: false,
  },
  {
    route: "traffic-officials",
    icon: TrafficOfficialsIcon,
    displayText: "مسؤولي الحركة",
    isSelected: false,
  },
  {
    route: "maintenance",
    icon: MaintenanceOfficialsIcon,
    displayText: "مسؤولي الصيانة",
    isSelected: false,
  },
  {
    route: "hajj-vehicles",
    icon: HajjVehiclesIcon,
    displayText: "مسؤولي مركبات الحج",
    isSelected: false,
  },
  {
    route: "transport-drivers",
    icon: TransportDriversIcon,
    displayText: "سائقي نقل الأصناف",
    isSelected: false,
  },
  {
    route: "transport-cities",
    icon: TransportCitiesIcon,
    displayText: "مدن نقل الأصناف",
    isSelected: false,
    hasTable: true,
    insideTableExtraComponent: <TransportCities />,
    useTableSchema: useTransportCitiesTableSchema,
    fetchData: fetchTransportCitiesData,
    itemsPerPage: TRANSPORT_CITIES_ITEMS_PER_PAGE,
  },
  {
    route: "vehicle-registration",
    icon: VehicleRegistrationIcon,
    displayText: "تسجيل المركبات",
    isSelected: false,
  },
  {
    route: "vehicle-assignment",
    icon: VehicleAssignmentIcon,
    displayText: "اسناد المركبة لمسؤول",
    isSelected: false,
  },
  {
    route: "print-permits",
    icon: PrintPermitsIcon,
    displayText: "طباعة تصاريح المركبات",
    isSelected: false,
  },
];
