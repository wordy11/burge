"use client";
import { Host } from '@/app/lib/common';
import React, { useState, useEffect } from 'react';

interface FormData {
  wallet: string;
  amount: number;
  transaction_type: string; // 'deposit' or 'withdrawal'
  asset_symbol: string;
  asset_name: string;
  from_address: string;
  to_address: string;
  transaction_hash: string;
}

interface Wallet {
  id: string;
  balance: string;
  username: string;
  user_wallet: {
    id: string;
    balance: any;
  };
}

const TransactionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    wallet: '',
    amount: 0,
    transaction_type: 'deposit',
    asset_symbol: '',
    asset_name: '',
    from_address: '',
    to_address: '',
    transaction_hash: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    // Fetch wallet IDs from the API
    const fetchWallets = async () => {
      try {
        const response = await fetch(`${Host}/users-with-wallet/`); // Assuming the endpoint is '/api/wallets'
        if (!response.ok) {
          throw new Error('Failed to fetch wallets');
        }
        const data = await response.json();
        setWallets(data); // Assuming the API returns an array of wallets
      } catch (err) {
        setError('Failed to load wallets');
      }
    };

    fetchWallets();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      console.log("Form Data:", formData);
      const response = await fetch(`${Host}/api/create-transaction/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Transaction failed');
      }

      const data = await response.json();
      setSuccess('Transaction successfully created!');
      setFormData({
        wallet: '',
        amount: 0,
        transaction_type: 'deposit',
        asset_symbol: '',
        asset_name: '',
        from_address: '',
        to_address: '',
        transaction_hash: '',
      });
    } catch (err) {
      setError('Error creating transaction');
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Create Transaction</h2>

      {/* Wallet */}
      <div className="mb-4">
        <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">
          Wallet ID
        </label>
        <select
          id="wallet"
          name="wallet"
          value={formData.wallet}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select Wallet</option>
          {wallets.map((wallet) => (
  wallet.user_wallet ? (
    <option key={wallet.user_wallet.id} value={wallet.user_wallet.id}>
      {wallet.username} Balance: ${wallet.user_wallet.balance}
    </option>
  ) : null
))}

        </select>
      </div>

      {/* Amount */}
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {/* Transaction Type */}
      <div className="mb-4">
        <label htmlFor="transaction_type" className="block text-sm font-medium text-gray-700">
          Transaction Type
        </label>
        <select
          id="transaction_type"
          name="transaction_type"
          value={formData.transaction_type}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
        </select>
      </div>

      {/* Asset Symbol */}
      <div className="mb-4">
        <label htmlFor="asset_symbol" className="block text-sm font-medium text-gray-700">
          Asset Symbol
        </label>
        <input
          type="text"
          id="asset_symbol"
          name="asset_symbol"
          value={formData.asset_symbol}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {/* Asset Name */}
      <div className="mb-4">
        <label htmlFor="asset_name" className="block text-sm font-medium text-gray-700">
          Asset Name
        </label>
        <input
          type="text"
          id="asset_name"
          name="asset_name"
          value={formData.asset_name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {/* From Address */}
      <div className="mb-4">
        <label htmlFor="from_address" className="block text-sm font-medium text-gray-700">
          From Address
        </label>
        <input
          type="text"
          id="from_address"
          name="from_address"
          value={formData.from_address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {/* To Address */}
      <div className="mb-4">
        <label htmlFor="to_address" className="block text-sm font-medium text-gray-700">
          To Address
        </label>
        <input
          type="text"
          id="to_address"
          name="to_address"
          value={formData.to_address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {/* Transaction Hash */}
      <div className="mb-4">
        <label htmlFor="transaction_hash" className="block text-sm font-medium text-gray-700">
          Transaction Hash
        </label>
        <input
          type="text"
          id="transaction_hash"
          name="transaction_hash"
          value={formData.transaction_hash}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 mt-4 ${loading ? 'bg-gray-500' : 'bg-blue-600'} text-white rounded-md hover:bg-blue-700 focus:outline-none`}
        >
          {loading ? 'Processing...' : 'Submit Transaction'}
        </button>
      </div>

      {/* Success or Error Message */}
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {success && <div className="text-green-500 mt-4">{success}</div>}
    </form>
  );
};

export default TransactionForm;
