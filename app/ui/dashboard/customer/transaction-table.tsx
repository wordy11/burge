import { Host } from '@/app/lib/common';
import React, { useEffect, useState } from 'react';

// Define the structure of a single transaction
interface Transaction {
  id: number;
  transaction_type: string;
  amount: string;  // Amount is a string to represent large numbers with precision
  asset_name: string;
  asset_symbol: string;
  from_address: string | null;
  to_address: string | null;
  transaction_hash: string;
  status: string;
  created_at: string; // ISO 8601 format date string
  updated_at: string; // ISO 8601 format date string
  wallet: number; // Wallet ID
}

// Define the state structure of the component
interface TransactionTableState {
  transactions: Transaction[];  // List of transactions
  loading: boolean;              // Loading state
  error: string | null;          // Error message state
}

const TransactionTable: React.FC<{token: string}> = ({token}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch transaction data when the component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`${Host}/api/wallet/transactions/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
    
        const data = await response.json();
        console.log(data); // Log the API response to inspect the structure
    
        // Access the 'transactions' property if it exists
        if (Array.isArray(data.transactions)) {
          setTransactions(data.transactions);
        } else {
          throw new Error('Invalid data format');
        }
    
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
        setLoading(false);
      }
    };
    

    fetchTransactions();
  }, [token]); // Added token as a dependency to re-fetch when token changes

  if (loading) {
    return <div>Loading transactions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-dark-gray-blue text-white">
            <th className="px-4 py-2 text-sm sm:text-base">Transaction ID</th>
            <th className="px-4 py-2 text-sm sm:text-base">Type</th>
            <th className="px-4 py-2 text-sm sm:text-base">Amount</th>
            <th className="px-4 py-2 text-sm sm:text-base">Asset</th>
            <th className="px-4 py-2 text-sm sm:text-base">From Address</th>
            <th className="px-4 py-2 text-sm sm:text-base">To Address</th>
            <th className="px-4 py-2 text-sm sm:text-base">Transaction Hash</th>
            <th className="px-4 py-2 text-sm sm:text-base">Status</th>
            <th className="px-4 py-2 text-sm sm:text-base">Created At</th>
            <th className="px-4 py-2 text-sm sm:text-base">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="bg-dark-gray-blue text-white">
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.id}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.transaction_type}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.amount}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.asset_name} ({transaction.asset_symbol})</td>
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.from_address || 'N/A'}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.to_address || 'N/A'}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.transaction_hash}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{transaction.status}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{new Date(transaction.created_at).toLocaleString()}</td>
              <td className="px-4 py-2 text-sm sm:text-base">{new Date(transaction.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
