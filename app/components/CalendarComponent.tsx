"use client"
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaPlus, FaTrashAlt, FaDownload, FaPrint } from "react-icons/fa";

type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  type: "event" | "reminder"; 
};

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarComponent = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 
  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "event", 
  });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewEvent({ title: "", type: "event" });
  };

  const addNewEvent = () => {
    if (selectedDate && newEvent.title) {
      setEvents([
        ...events,
        {
          title: newEvent.title,
          start: selectedDate,
          end: selectedDate,
          type: newEvent.type as "event" | "reminder",
        },
      ]);
      closeModal(); 
    }
  };

  const eventStyleGetter = (event: CalendarEvent) => {
    const backgroundColor = event.type === "reminder" ? "#2563eb" : "#fbbf24"; 
    return {
      style: { backgroundColor, borderRadius: '5px', padding: '5px', color: 'white' },
    };
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">Add new schedule(s):</h2>
          <select className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="">Select Months</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-white bg-teal-500 rounded-full">
            SCHEDULE
          </button>
          <button className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded-full">
            RESET
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4 p-4 bg-gray-100 rounded-lg">
        <button className="flex items-center px-4 py-2 text-white bg-teal-500 rounded-full shadow-md">
          <FaPlus className="mr-2" /> REPLENISH
        </button>
        <button className="flex items-center px-4 py-2 text-white bg-teal-500 rounded-full shadow-md">
          <FaTrashAlt className="mr-2" /> DELETE SCHEDULE
        </button>
        <button className="flex items-center px-4 py-2 text-white bg-teal-500 rounded-full shadow-md">
          <FaDownload className="mr-2" /> EXPORT & DOWNLOAD
        </button>
        <button className="flex items-center px-4 py-2 text-white bg-teal-500 rounded-full shadow-md">
          <FaPrint className="mr-2" /> PRINT
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={(slotInfo) => handleDateClick(slotInfo.start)} 
        eventPropGetter={eventStyleGetter} 
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Add Event or Reminder</h2>

            <input
              className="px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2">Type</label>
            <select
              className="px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
            >
              <option value="event">Event</option>
              <option value="reminder">Reminder</option>
            </select>

            <div className="flex justify-between">
              <button
                className="px-4 py-2 text-white bg-teal-500 rounded-md"
                onClick={addNewEvent}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 text-gray-500 bg-gray-200 rounded-md"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
