import PageTitle from "@/components/molecules/pageTitle";
import Table from "@/components/organisms/table";
import TabGroup, { ITab } from "@/components/molecules/tabGroup";
import OutgoingIcon from "@/components/atoms/icons/OutgoingIcon";
import IncomingIcon from "@/components/atoms/icons/IncomingIcon";
import React, { useState, useEffect } from "react";
import { IPageConfig } from "@/types/page";
import { Pages } from "@/consts/pages";
import { INBOX_SCHEMA, ITEMS_PER_PAGE, fetchInboxData } from "@/mocks/inbox";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  initializeTable,
  onPageChange,
  setLoading,
  setTableData,
} from "@/store/slices/tableSlice";
import useInboxSchema from "@/hooks/dashboardHooks/useInboxSchema";

const tabs: ITab[] = [
  { id: "outgoing", label: "الطلبات الصادرة", icon: OutgoingIcon },
  { id: "incoming", label: "الطلبات الواردة", icon: IncomingIcon },
];

function Inbox() {
  const page: Partial<IPageConfig> = Pages.inbox;
  const dispatch = useAppDispatch();
  const { totalItems, itemsPerPage, currentPage, loading } = useAppSelector(
    (state) => state.table,
  );
  const [activeTab, setActiveTab] = useState("outgoing");
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setTableData([]));
    fetchInboxData(activeTab, currentPage, ITEMS_PER_PAGE).then(
      ({ data, total }) => {
        dispatch(
          initializeTable({
            itemsPerPage: ITEMS_PER_PAGE,
            totalItems: total,
          }),
        );
        dispatch(setTableData(data));
        dispatch(setLoading(false));
      },
    );
  }, [activeTab, currentPage]);

  useEffect(() => {
    dispatch(onPageChange(1)); // reset page on tab change
  }, [activeTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col p-5 gap-5">
      <PageTitle
        pageTitle={page.pageTitle}
        pageTitleIconConfig={page.pageTitleIconConfig}
      />
      <TabGroup
        tabs={tabs}
        activeTabId={activeTab}
        onTabChange={handleTabChange}
      />
      <Table tableSchema={page?.useTableSchema?.()!} />
    </div>
  );
}

export default Inbox;
