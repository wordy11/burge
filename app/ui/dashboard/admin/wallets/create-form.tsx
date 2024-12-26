'use client';

import React, { useState } from 'react';
import { addWallet } from '@/app/lib/actions'; // Update the path as needed

const CreateWalletForm: React.FC = () => {
  // State to store form values
  const [network, setNetwork] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [name, setName] = useState<string>('');
  
  // State to store errors, success message, and loading state
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // setErrors(undefined);
    setMessage(null);

    // Prepare the form data
    const formData = new FormData();
    formData.append('network', network);
    formData.append('address', address);
    formData.append('name', name);

    // Call the addWallet function to handle the wallet creation
    const result = await addWallet(
      {}, // Empty previousState, adjust if needed
      formData
    );

    // Handle validation errors or success messages
    if (result.errors) {
  // This should now match the WalletErrors type
    } else if (result.message) {
      setMessage(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Wallet</h2>

        {/* Display success message */}
        {message && (
          <div className="text-center text-green-600 mb-4">
            <p>{message}</p>
          </div>
        )}

        {/* Display validation errors */}
        {/* {errors && (
          <div className="text-center text-red-600 mb-4">
            <ul>
              {Object.entries(errors).map(([field, fieldErrors]) => (
                <li key={field}>
                  {fieldErrors?.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {/* Form for wallet creation */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="network" className="block text-sm font-medium">
              Network
            </label>
            <input
              type="text"
              id="network"
              name="network"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Add Wallet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWalletForm;
