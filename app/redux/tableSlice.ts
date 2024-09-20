"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the table data
export interface TableData {
  donor: string;
  panels: string;
  barcode: string;
  source: string;
  date: string;
  amount: string;
  observedBy: string;
  status: string;
}

interface TableState {
  data: TableData[];
}

const initialState: TableState = {
  data: [
    {
      donor: 'Jimmy, Testington',
      panels: '3 Panel, 12 Panel U CUP',
      barcode: '1796202409',
      source: 'medicaid',
      date: '07/18/2023',
      amount: '$0.00',
      observedBy: 'Chavan Vishal',
      status: 'Unable to Donate',
    },
    // Add more initial rows if needed
  ],
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addRow(state, action: PayloadAction<TableData>) {
      state.data.push(action.payload);
    },
    removeRow(state, action: PayloadAction<number>) {
      state.data.splice(action.payload, 1);
    },
    updateRow(state, action: PayloadAction<{ index: number; row: TableData }>) {
      state.data[action.payload.index] = action.payload.row;
    },
  },
});

export const { addRow, removeRow, updateRow } = tableSlice.actions;
export default tableSlice.reducer;
