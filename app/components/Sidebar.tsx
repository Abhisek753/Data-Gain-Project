"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaClipboardList,
  FaFileAlt,
  FaChartPie,
  FaCalendar,
  FaCog,
  FaHistory,
  FaDonate,
  FaClipboardCheck,
} from "react-icons/fa"; // Import necessary icons
import { IconType } from "react-icons"; // For type safety with icons

// Sidebar items with icons and names
const sidebarItems: { name: string; icon: IconType; route: string }[] = [
  { name: "Face Recognition", icon: FaUser, route: "/face-recognition" },
  { name: "Daily Visit", icon: FaClipboardList, route: "/daily-visit" },
  { name: "Donate", icon: FaDonate, route: "/donate" },
  { name: "Work Orders", icon: FaFileAlt, route: "/pages/work-orders" },
  { name: "Reports", icon: FaChartPie, route: "/reports" },
  { name: "Report History", icon: FaHistory, route: "/report-history" },
  { name: "Test History", icon: FaClipboardCheck, route: "/test-history" },
  { name: "Calendar", icon: FaCalendar, route: "/calendar" },
  { name: "Settings", icon: FaCog, route: "/settings" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-64" : "w-20"
      } h-screen bg-white text-black border-r border-gray-300 transition-all duration-300 ease-in-out flex flex-col`}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300">
        <h1 className={`${isExpanded ? "block" : "hidden"} text-lg font-bold`}>
          Menu
        </h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* Sidebar items */}
      <ul className="mt-4">
        {sidebarItems.map((item, index) => (
          <li key={index} className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer">
            {/* Icon */}
            <item.icon className="text-xl" />
            {/* Link and text (hidden when collapsed) */}
            <Link href={item.route} className={`ml-4 ${isExpanded ? "block" : "hidden"}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
