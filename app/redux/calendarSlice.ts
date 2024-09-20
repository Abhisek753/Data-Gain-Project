"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Define the type for the calendar events
export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  type: 'event' | 'reminder';
}

interface CalendarState {
  events: CalendarEvent[];
}

const initialState: CalendarState = {
  events: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<CalendarEvent>) {
      state.events.push(action.payload);
    },
    removeEvent(state, action: PayloadAction<number>) {
      state.events.splice(action.payload, 1);
    },
    updateEvent(state, action: PayloadAction<{ index: number; event: CalendarEvent }>) {
      state.events[action.payload.index] = action.payload.event;
    },
  },
});

export const { addEvent, removeEvent, updateEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
