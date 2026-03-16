import PageTitle from "@/components/molecules/pageTitle";
import Table from "@/components/organisms/table";
import TabGroup, { ITab } from "@/components/molecules/tabGroup";
import OutgoingIcon from "@/components/atoms/icons/OutgoingIcon";
import IncomingIcon from "@/components/atoms/icons/IncomingIcon";
import React, { useState, useEffect } from "react";
import { IPageConfig } from "@/types/page";
import { Pages } from "@/consts/pages";
import { INBOX_SCHEMA, ITEMS_PER_PAGE, fetchInboxData } from "@/mocks/inbox";

const tabs: ITab[] = [
  { id: "outgoing", label: "الطلبات الصادرة", icon: OutgoingIcon },
  { id: "incoming", label: "الطلبات الواردة", icon: IncomingIcon },
];

function Inbox() {
  const page: Partial<IPageConfig> = Pages.inbox;

  const [activeTab, setActiveTab] = useState("outgoing");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchInboxData(activeTab, currentPage, ITEMS_PER_PAGE).then(
      ({ data, total }) => {
        setData(data);
        setTotalItems(total);
        setLoading(false);
      },
    );
  }, [activeTab, currentPage]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
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
      <Table
        schema={INBOX_SCHEMA}
        data={data}
        loading={loading}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Inbox;
