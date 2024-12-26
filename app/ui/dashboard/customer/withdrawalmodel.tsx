import React, { useState } from 'react';

interface WithdrawalModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  onWithdraw: (amount: number, bankDetails: string) => void; // Callback to handle withdrawal
}

const WithdrawalModal: React.FC<WithdrawalModalProps> = ({ isOpen, closeModal, title, onWithdraw }) => {
  const [amount, setAmount] = useState<string>('');
  const [bankDetails, setBankDetails] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);  // New state to handle submit button
  const [withdrawalPending, setWithdrawalPending] = useState<boolean>(false);  // New state to show "Withdrawal Pending" message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert the amount to a number
    const amountNumber = parseFloat(amount);
    
    if (amountNumber && bankDetails) {
      setIsSubmitting(true);  // Disable button while processing
      setWithdrawalPending(true); // Show "Withdrawal Pending" message
      
      // Simulate an async withdrawal process
      setTimeout(() => {
        onWithdraw(amountNumber, bankDetails); // Call the parent function to process the withdrawal
        setIsSubmitting(false); // Enable button again
        setAmount('');  // Clear the amount input field
        setBankDetails('');  // Clear bank details input field
        closeModal();  // Close the modal after submission
      }, 2000); // Simulating a delay of 2 seconds
    } else {
      alert('Please provide both amount and bank details.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        
        {withdrawalPending ? (
          <div className="text-center text-blue-500 font-semibold mt-6">
            Withdrawal Pending...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Amount Input */}
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700">Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-1"
                placeholder="Enter amount"
                required
              />
            </div>

            {/* Bank Details Input */}
            <div className="mb-4">
              <label htmlFor="bankDetails" className="block text-gray-700">Bank Details</label>
              <input
                type="text"
                id="bankDetails"
                value={bankDetails}
                onChange={(e) => setBankDetails(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-1"
                placeholder="Enter bank account details"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Withdraw'}
              </button>
            </div>
          </form>
        )}

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

export default WithdrawalModal;
