"use client";
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addRow, removeRow, updateRow } from '../redux/tableSlice';
import Modal from './Modal';

const Table = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tableData = useSelector((state: RootState) => state.table.data); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentRowIndex, setCurrentRowIndex] = useState<number | null>(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null); 

  const [formData, setFormData] = useState({
    donor: '',
    panels: '',
    barcode: '',
    source: '',
    date: '',
    amount: '',
    observedBy: '',
    status: '',
  });

  const openAddModal = () => {
    setFormData({
      donor: '',
      panels: '',
      barcode: '',
      source: '',
      date: '',
      amount: '',
      observedBy: '',
      status: '',
    });
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (index: number) => {
    setFormData(tableData[index]);
    setCurrentRowIndex(index);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  // Handle form submission for adding or updating rows
  const handleSubmit = () => {
    if (isEditMode && currentRowIndex !== null) {
      dispatch(updateRow({ index: currentRowIndex, row: formData }));
    } else {
      dispatch(addRow(formData));
    }
    setIsModalOpen(false);
  };

  // Handle deleting a row
  const handleDelete = (index: number) => {
    dispatch(removeRow(index));
  };

  // Toggle the dropdown for a specific row
  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); // Toggle between opening and closing the dropdown
  };

  return (
    <div className="w-[98%] p-6 bg-white border rounded-lg shadow-lg relative h-[95vh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Table Data</h2>
        <button onClick={openAddModal} className="px-4 py-2 bg-teal-500 text-white rounded-full">
          Add New Row
        </button>
      </div>
      <div className="">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Donor</th>
              <th className="px-4 py-2">Panels</th>
              <th className="px-4 py-2">Barcode</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount($)</th>
              <th className="px-4 py-2">Observed By</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={`${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } border-b`}>
                <td className="px-4 py-2 text-teal-500 underline cursor-pointer">
                  {row.donor}
                </td>
                <td className="px-4 py-2">{row.panels}</td>
                <td className="px-4 py-2 text-teal-500 underline cursor-pointer">
                  {row.barcode}
                </td>
                <td className="px-4 py-2">{row.source}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.amount}</td>
                <td className="px-4 py-2">{row.observedBy}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2 relative">
                  <button
                    className="px-3 py-1 rounded-full text-teal-500"
                    onClick={() => toggleDropdown(index)}
                  >
                    <FaEllipsisV />
                  </button>
                  {openDropdownIndex === index && ( // Show dropdown only for the open row
                    <div className="absolute mt-2 right-0 bg-white border rounded shadow-md z-50"> {/* Higher z-index */}
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => openEditModal(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding/Editing Row */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isEditMode={isEditMode}
      />
    </div>
  );
};

export default Table;
