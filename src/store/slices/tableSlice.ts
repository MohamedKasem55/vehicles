import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IColumnSchema {
  key: string;
  label: string;
  type: "text" | "status" | "action";
  cellStatusKey?: string;
  cellCustomStyle?: string;
  icon?: React.ReactNode;
  onClick?: (item: any, col: IColumnSchema) => void;
}

interface ITableState {
  //static
  itemsPerPage: number;
  totalItems: number;
  //dynamic
  tableData: any[];
  loading: boolean;
  currentPage: number;
}

const initialState: ITableState = {
  totalItems: 0,
  itemsPerPage: 10,

  tableData: [],
  currentPage: 1,
  loading: false,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    onPageChange(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
    initializeTable(
      state,
      action: PayloadAction<{
        itemsPerPage: number;
        totalItems: number;
      }>,
    ) {
      state.itemsPerPage = action.payload.itemsPerPage;
      state.totalItems = action.payload.totalItems;
    },
  },
});

export const { onPageChange, setLoading, setTableData, initializeTable } = tableSlice.actions;
export default tableSlice.reducer;
