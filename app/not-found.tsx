"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">
        The page you're looking for doesn't exist. Only the following pages are available:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>
          <Link href="/pages/calendar" className="text-teal-500 underline">
            Calendar
          </Link>
        </li>
        <li>
          <Link href="/reports" className="text-teal-500 underline">
            Reports
          </Link>
        </li>
        <li>
          <Link href="/pages/work-orders" className="text-teal-500 underline">
            Work Orders
          </Link>
        </li>
      </ul>
      <Link href="/" className="px-4 py-2 bg-teal-500 text-white rounded-md">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
