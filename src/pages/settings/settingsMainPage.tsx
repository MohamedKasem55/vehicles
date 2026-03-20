import PageTitle from "@/components/molecules/pageTitle";
import Table from "@/components/organisms/table";
import { ISidebarRoute, settingsSidebarRoutes } from "@/consts/sidebarRoutes";
import { IColumnSchema } from "@/store/slices/tableSlice";
import React from "react";
import { useLocation } from "react-router-dom";

function TableSection({
  useTableSchema,
  insideTableExtraComponent,
}: {
  useTableSchema: () => IColumnSchema[];
  insideTableExtraComponent?: React.ReactNode;
}) {
  const schema = useTableSchema();
  return <Table tableSchema={schema}>{insideTableExtraComponent}</Table>;
}

function SettingsMainPage() {
  const { pathname } = useLocation();
  const currentRoute = pathname.split("/")[pathname.split("/").length - 1];

  const page: ISidebarRoute = settingsSidebarRoutes.find(
    (pageConfig: ISidebarRoute) => pageConfig.route === currentRoute,
  )!;

  return (
    <div className="flex flex-col gap-4 p-5">
      <PageTitle pageTitle={page.displayText} pageTitleIcon={page.icon} />
      {page.useTableSchema && (
        <TableSection
          useTableSchema={page.useTableSchema}
          insideTableExtraComponent={page.insideTableExtraComponent}
        />
      )}
    </div>
  );
}

export default SettingsMainPage;
