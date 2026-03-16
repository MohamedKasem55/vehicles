import StatusBadge from "@/components/molecules/statusBadge";
import Pagination from "@/components/molecules/pagination";
import Spinner from "@/components/atoms/spinner";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import { IColumnSchema } from "@/store/slices/tableSlice";

function Table({ tableSchema }: { tableSchema: IColumnSchema[] }) {
  const { tableData, loading, currentPage, itemsPerPage } = useAppSelector(
    (state) => state.table,
  );

  const renderCell = (item: any, col: any) => {
    if (col.type === "text") return item[col.key] || "-";
    else if (col.type === "action")
      return (
        <div
          className="bg-transparent hover:opacity-60 cursor-pointer"
          onClick={() => col.onClick(item, col)}
        >
          {col.icon || "-"}
        </div>
      );
    else if (col.type === "status")
      return <StatusBadge status={item[col.cellStatusKey]} />;
  };

  return (
    <div
      className="flex-1 overflow-hidden border-[#E5E7EB] border-1 rounded-[10px] shadow-sm"
      dir="rtl"
    >
      <table className="flex-1 w-full">
        <thead>
          <tr className="bg-[#F9FAFB] h-[50px]">
            <th className="font-inter font-bold text-[11.9px] leading-5 tracking-normal align-middle">
              #
            </th>
            {tableSchema.map((col: any) => (
              <th
                key={col.key}
                className="font-inter font-bold text-[11.9px] leading-5 tracking-normal align-middle"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {loading ? (
            <tr>
              <td colSpan={tableSchema.length + 1} className="h-[335px]">
                <Spinner />
              </td>
            </tr>
          ) : (
            tableData.map((item: any, index: number) => (
              <tr
                key={item.id ?? index}
                className={`hover:opacity-60 cursor-pointer ${index !== tableData.length - 1 ? "border-b-[1px] border-b-[#F3F4F6]" : ""}`}
              >
                <td className="text-center h-[67px] w-[64px]">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                {tableSchema.map((col: any) => (
                  <td
                    key={col.key}
                    className={`text-center h-[67px] ${col.cellCustomStyle ?? ""}`}
                  >
                    {renderCell(item, col)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default Table;
