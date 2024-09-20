import React from 'react';
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
          <input
            className="mb-2 w-full p-2 border rounded"
            type="text"
            placeholder="Donor"
            value={formData.donor}
            onChange={(e) => setFormData({ ...formData, donor: e.target.value })}
          />
          <input
            className="mb-2 w-full p-2 border rounded"
            type="text"
            placeholder="Panels"
            value={formData.panels}
            onChange={(e) =>
              setFormData({ ...formData, panels: e.target.value })
            }
          />
          <input
            className="mb-2 w-full p-2 border rounded"
            type="text"
            placeholder="Barcode"
            value={formData.barcode}
            onChange={(e) =>
              setFormData({ ...formData, barcode: e.target.value })
            }
          />
          <input
            className="mb-2 w-full p-2 border rounded"
            type="text"
            placeholder="Source"
            value={formData.source}
            onChange={(e) =>
              setFormData({ ...formData, source: e.target.value })
            }
          />
          <input
            className="mb-2 w-full p-2 border rounded"
            type="date"
            placeholder="Date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            className="mb-2 w-full p-2 border rounded"
            type="text"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
          <input
            className="mb-2 w-full p-2 border rounded"
            type="text"
            placeholder="Observed By"
            value={formData.observedBy}
            onChange={(e) =>
              setFormData({ ...formData, observedBy: e.target.value })
            }
          />
          <input
            className="mb-4 w-full p-2 border rounded"
            type="text"
            placeholder="Status"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          />
          <button
            type="button"
            onClick={onSubmit}
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            {isEditMode ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
