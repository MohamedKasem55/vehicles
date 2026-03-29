import PageTitle from "@/components/molecules/pageTitle";
import Table from "@/components/organisms/table";
import { ISidebarRoute, settingsSidebarRoutes } from "@/consts/sidebarRoutes";
import { IColumnSchema, initializeTable, setLoading, setTableData } from "@/store/slices/tableSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useMemo } from "react";
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
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.table);

  const page: ISidebarRoute = useMemo(()=>{
    return settingsSidebarRoutes.find(
    (pageConfig: ISidebarRoute) => pageConfig.route === currentRoute,
  )!;
  },[currentRoute])

  useEffect(() => {
    if (!page.fetchData || !page.itemsPerPage) return;
    dispatch(initializeTable({ itemsPerPage: page.itemsPerPage, totalItems: 0 }));
  }, [page.route]);

  useEffect(() => {
    if (!page.fetchData || !page.itemsPerPage) return;
    dispatch(setLoading(true));
    page.fetchData(currentPage, page.itemsPerPage).then(({ data, total }) => {
      dispatch(setTableData(data));
      dispatch(initializeTable({ itemsPerPage: page.itemsPerPage!, totalItems: total }));
      dispatch(setLoading(false));
    });
  }, [page.route, currentPage]);

  
  return (
    <div className="flex flex-col gap-5">
      {!!page.beforeTableExtraComponent && page.beforeTableExtraComponent}
      {page.useTableSchema && (
        <TableSection
          key={currentRoute}
          useTableSchema={page.useTableSchema}
          insideTableExtraComponent={page.insideTableExtraComponent}
        />
      )}
    </div>
  );
}

export default SettingsMainPage;
