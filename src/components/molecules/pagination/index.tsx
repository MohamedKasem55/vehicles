import React from "react";
import LeftChevronIcon from "@/components/atoms/icons/LeftChevronIcon";
import RightChevronIcon from "@/components/atoms/icons/RightChevronIcon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { onPageChange } from "@/store/slices/tableSlice";


const btnStyle = {
  background: "#FFFFFF",
  border: "1px solid #E5E7EB",
  color: "#4B5563",
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "11.9px",
};

function Pagination() {
  const dispatch = useAppDispatch();
  const { totalItems, itemsPerPage, currentPage } = useAppSelector(
    (state) => state.table,
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageWindow = () => {
    let start = Math.max(1, currentPage - 1);
    const end = Math.min(start + 2, totalPages);
    start = Math.max(1, end - 2);
    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const pages = getPageWindow().reverse();

  return (
    <div
      className="flex flex-row items-center justify-between px-6 h-[67px]"
      style={{
        background: "rgba(249, 250, 251, 0.5)",
        borderTop: "1px solid #F3F4F6",
        borderRadius: "0 0 12px 12px",
      }}
      dir="rtl"
    >
      {/* Info text - right side in RTL */}
      <div
        className="flex flex-row items-center gap-1"
        style={{ fontFamily: "Inter", fontSize: "11.9px", lineHeight: "20px" }}
      >
        <span style={{ color: "#6B7280", fontWeight: 400 }}>عرض</span>
        <span style={{ color: "#111827", fontWeight: 500 }}>{from}</span>
        <span style={{ color: "#6B7280", fontWeight: 400 }}>إلى</span>
        <span style={{ color: "#111827", fontWeight: 500 }}>{to}</span>
        <span style={{ color: "#6B7280", fontWeight: 400 }}>من أصل</span>
        <span style={{ color: "#111827", fontWeight: 500 }}>{totalItems}</span>
        <span style={{ color: "#6B7280", fontWeight: 400 }}>سجل</span>
      </div>

      {/* Page buttons - left side in RTL */}
      <div className="flex flex-row items-center gap-1">
        <button
          onClick={() => dispatch(onPageChange(currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-0! flex items-center justify-center w-[32px] h-[32px] rounded-[8px] disabled:opacity-40 cursor-pointer"
          style={btnStyle}
        >
          <RightChevronIcon width={16} height={16} />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => dispatch(onPageChange(page))}
            className="p-0 flex items-center justify-center w-[32px] h-[32px] rounded-[8px] cursor-pointer"
            style={
              page === currentPage
                ? {
                    background: "#348C68",
                    boxShadow: "0px 1px 2px #99F6E4",
                    color: "#FFFFFF",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "11.9px",
                  }
                : btnStyle
            }
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => dispatch(onPageChange(currentPage - 1))}
          disabled={currentPage === 1}
          className="p-0! flex items-center justify-center w-[32px] h-[32px] rounded-[8px] disabled:opacity-40 cursor-pointer"
          style={btnStyle}
        >
          <LeftChevronIcon width={16} height={16} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
