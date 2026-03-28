import { IColumnSchema } from "@/store/slices/tableSlice";
import React, { useCallback } from "react";

function useInboxTableSchema(): IColumnSchema[] {
  const onEditHandler = useCallback((row: any) => {
    console.log(`عرض: ${row.requester}`);
  }, []);

  return [
    {
      key: "orderNumber",
      label: "رقم الطلب",
      type: "text",
      cellCustomStyle:
        "font-mono font-normal text-[10.2px] leading-4 tracking-normal align-middle",
    },
    {
      key: "serviceName",
      label: "اسم الخدمة",
      type: "text",
      cellCustomStyle:
        "font-inter font-medium text-[11.9px] leading-5 tracking-normal align-middle",
    },
    { key: "requester", label: "مقدم الطلب", type: "text" },
    { key: "requestDate", label: "تاريخ الطلب", type: "text" },
    { key: "details", label: "التفاصيل", type: "text" },
    {
      key: "decision",
      label: "القرار المتخذ",
      type: "status",
      cellStatusKey: "decision",
    },
    { key: "decisionDate", label: "تاريخ اتخاذ القرار", type: "text" },
    {
      key: "edit",
      label: "تعديل",
      type: "action",
      onClick: onEditHandler,
    },
    {
      key: "view",
      label: "عرض",
      type: "action",
      onClick: (row: any) => alert(`عرض: ${row.requester}`),
    },
  ];
}

export default useInboxTableSchema;
