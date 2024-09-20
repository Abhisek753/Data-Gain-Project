"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <h1 className="text-4xl font-bold text-teal-600">Welcome to the Dashboard</h1>

      <div className="flex flex-col items-center space-y-4">
        <Link href="/pages/calendar" className="px-6 py-3 bg-teal-500 text-white rounded-md text-lg hover:bg-teal-600">
          Calendar
        </Link>

        <Link href="/reports" className="px-6 py-3 bg-teal-500 text-white rounded-md text-lg hover:bg-teal-600">
          Reports
        </Link>

        <Link href="/pages/work-orders" className="px-6 py-3 bg-teal-500 text-white rounded-md text-lg hover:bg-teal-600">
          Work Orders
        </Link>
      </div>
    </div>
  );
}
