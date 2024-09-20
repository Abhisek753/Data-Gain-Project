"use client";

import { configureStore } from '@reduxjs/toolkit';
// import calendarReducer from '../redux/calendarSlice';
import tableReducer from '../redux/tableSlice';

const store = configureStore({
  reducer: {
    // calendar: calendarReducer,
    table: tableReducer,
  },
});

// Export store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
