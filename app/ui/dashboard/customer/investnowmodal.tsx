import React from 'react';

interface Plan {
  id: string;
  name: string;
  network: string;  // Added network field
  address: string;  // Added address field
}

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  plans: Plan[];  // Plans prop to display in the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, title, plans }) => {
  if (!isOpen) return null;  // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-7xl w-full overflow-auto">
        <h2 className="text-xl font-semibold mb-4 center-text">{title}</h2>

        {/* Plans Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Network</th>
                <th className="px-4 py-2 text-left">Address</th>
              </tr>
            </thead>
            <tbody>
              {plans.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-4 py-2 text-center text-gray-500">
                    No plans available.
                  </td>
                </tr>
              ) : (
                plans.map((plan) => (
                  <tr key={plan.id} className="border-t">
                    <td className="px-4 py-2">{plan.name}</td>
                    <td className="px-4 py-2">{plan.network}</td>
                    <td className="px-4 py-2">{plan.address}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Close Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
