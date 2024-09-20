import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  isEditMode: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  setFormData,
  isEditMode,
}) => {
  const [errors, setErrors] = useState({
    donor: '',
    panels: '',
    barcode: '',
    source: '',
    date: '',
    amount: '',
    observedBy: '',
    status: '',
  });

  // Validate fields
  const validateForm = () => {
    const newErrors = {
      donor: formData.donor ? '' : 'Donor is required',
      panels: formData.panels ? '' : 'Panels are required',
      barcode: formData.barcode ? '' : 'Barcode is required',
      source: formData.source ? '' : 'Source is required',
      date: formData.date ? '' : 'Date is required',
      amount: formData.amount ? '' : 'Amount is required',
      observedBy: formData.observedBy ? '' : 'Observed By is required',
      status: formData.status ? '' : 'Status is required',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error); 
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-bold mb-4">
          {isEditMode ? 'Edit Row' : 'Add New Row'}
        </h2>
        <form>
          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.donor ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Donor"
              value={formData.donor}
              onChange={(e) => setFormData({ ...formData, donor: e.target.value })}
            />
            {errors.donor && <p className="text-red-500 text-sm">{errors.donor}</p>}
          </div>

          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.panels ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Panels"
              value={formData.panels}
              onChange={(e) => setFormData({ ...formData, panels: e.target.value })}
            />
            {errors.panels && <p className="text-red-500 text-sm">{errors.panels}</p>}
          </div>

          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.barcode ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Barcode"
              value={formData.barcode}
              onChange={(e) => setFormData({ ...formData, barcode: e.target.value })}
            />
            {errors.barcode && <p className="text-red-500 text-sm">{errors.barcode}</p>}
          </div>

          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.source ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Source"
              value={formData.source}
              onChange={(e) => setFormData({ ...formData, source: e.target.value })}
            />
            {errors.source && <p className="text-red-500 text-sm">{errors.source}</p>}
          </div>

          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.date ? 'border-red-500' : ''}`}
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>

          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.amount ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>

          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.observedBy ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Observed By"
              value={formData.observedBy}
              onChange={(e) => setFormData({ ...formData, observedBy: e.target.value })}
            />
            {errors.observedBy && <p className="text-red-500 text-sm">{errors.observedBy}</p>}
          </div>

          <div className="mb-4">
            <input
              className={`mb-1 w-full p-2 border rounded ${errors.status ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            />
            {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2 bg-teal-500 text-white rounded"
          >
            {isEditMode ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
