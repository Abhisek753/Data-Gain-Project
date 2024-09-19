"use client";

import React, { useState } from "react";

const ReportForm = () => {
  const [reportType, setReportType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [agency, setAgency] = useState("");
  const [format, setFormat] = useState("");
  const [useDate, setUseDate] = useState("collected");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      reportType,
      startDate,
      dueDate,
      agency,
      format,
      useDate,
    };
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <form className="p-8 bg-white border rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* Full-width Report Type */}
        <div>
          <label className="block mb-2 font-bold text-gray-700" htmlFor="reportType">
            Select Report Type
          </label>
          <select
            id="reportType"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="" disabled>
              Select Report Type
            </option>
            <option value="daily">Daily Report</option>
            <option value="monthly">Monthly Report</option>
            <option value="yearly">Yearly Report</option>
          </select>
        </div>
      </div>

      {/* Two Columns: Start Date, Due Date, Agency, Format */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Start Date */}
        <div>
          <label className="block mb-2 font-bold text-gray-700" htmlFor="startDate">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block mb-2 font-bold text-gray-700" htmlFor="dueDate">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        {/* Agency */}
        <div>
          <label className="block mb-2 font-bold text-gray-700" htmlFor="agency">
            Agency
          </label>
          <select
            id="agency"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
          >
            <option value="" disabled>
              Select Agency
            </option>
            <option value="agency1">Agency 1</option>
            <option value="agency2">Agency 2</option>
            <option value="agency3">Agency 3</option>
          </select>
        </div>

        {/* Format */}
        <div>
          <label className="block mb-2 font-bold text-gray-700" htmlFor="format">
            Select Format
          </label>
          <select
            id="format"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="" disabled>
              Select Format
            </option>
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
          </select>
        </div>
      </div>

      {/* Use Date Section */}
      <div className="mb-6">
        <label className="block mb-2 font-bold text-gray-700">
          Use Date
        </label>
        <div className="flex items-center gap-4">
          <div>
            <input
              type="radio"
              id="collected"
              name="useDate"
              value="collected"
              checked={useDate === "collected"}
              onChange={() => setUseDate("collected")}
              className="mr-2"
            />
            <label htmlFor="collected">Collected</label>
          </div>
          <div>
            <input
              type="radio"
              id="scheduled"
              name="useDate"
              value="scheduled"
              checked={useDate === "scheduled"}
              onChange={() => setUseDate("scheduled")}
              className="mr-2"
            />
            <label htmlFor="scheduled">Scheduled</label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-600"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default ReportForm;
