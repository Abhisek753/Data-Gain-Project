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
} from "react-icons/fa";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation"; 

const sidebarItems: { name: string; icon: IconType; route: string }[] = [
  { name: "Face Recognition", icon: FaUser, route: "/pages/page-not-found" },
  { name: "Daily Visit", icon: FaClipboardList, route: "/pages/page-not-found" },
  { name: "Donate", icon: FaDonate, route: "/pages/page-not-found" },
  { name: "Work Orders", icon: FaFileAlt, route: "/pages/work-orders" },
  { name: "Reports", icon: FaChartPie, route: "/reports" },
  { name: "Report History", icon: FaHistory, route: "/pages/page-not-found" },
  { name: "Test History", icon: FaClipboardCheck, route: "/pages/page-not-found" },
  { name: "Calendar", icon: FaCalendar, route: "/pages/calendar" },
  { name: "Settings", icon: FaCog, route: "/pages/page-not-found" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname(); // Get the current route

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-64" : "w-20"
      } h-screen bg-teal-50 text-black border-r border-gray-300 transition-all duration-300 ease-in-out flex flex-col`}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300">
        <h1 className={`${isExpanded ? "block" : "hidden"} text-lg font-bold`}>
          Menu
        </h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      <ul className="mt-4">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center px-4 py-3 cursor-pointer hover:bg-teal-100 ${
              pathname === item.route ? "bg-teal-200 text-teal-700" : ""
            }`}
          >
            <item.icon className="text-xl" />
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
