"use client";
import React, { useState } from "react";
import { Pagination } from "@nextui-org/react";

// Define the shape of the transaction data
interface Transaction {
  id: string;
  direction: string;
  date: string;
  amount: number;
  type: "debit" | "credit";
  currency: string;
  status: "Pending" | "Completed" | "Failed"; // New status field
}

const TransactionList: React.FC = () => {
  // Mock transaction data
  const transactions: Transaction[] = [
    { id: "TX123456", direction: "Sent", date: "2025-01-10", amount: 25.50, type: "debit", currency: "USD", status: "Completed" },
    { id: "TX789012", direction: "Received", date: "2025-01-09", amount: 15.00, type: "credit", currency: "USD", status: "Pending" },
    { id: "TX345678", direction: "Sent", date: "2025-01-08", amount: 100.00, type: "debit", currency: "USD", status: "Failed" },
    { id: "TX901234", direction: "Received", date: "2025-01-07", amount: 50.00, type: "credit", currency: "USD", status: "Completed" },
    { id: "TX567890", direction: "Sent", date: "2025-01-06", amount: 30.00, type: "debit", currency: "USD", status: "Pending" },
    { id: "TX112233", direction: "Received", date: "2025-01-05", amount: 75.00, type: "credit", currency: "USD", status: "Failed" },
    { id: "TX445566", direction: "Received", date: "2025-01-04", amount: 1200.00, type: "credit", currency: "USD", status: "Completed" },
    { id: "TX778899", direction: "Sent", date: "2025-01-03", amount: 45.00, type: "debit", currency: "USD", status: "Pending" },
    { id: "TX998877", direction: "Sent", date: "2025-01-02", amount: 200.00, type: "debit", currency: "USD", status: "Failed" },
    { id: "TX667788", direction: "Received", date: "2025-01-01", amount: 50.00, type: "credit", currency: "USD", status: "Completed" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 7; // Set to 7 transactions per page

  // Calculate total pages
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  // Get current transactions to display
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Handle pagination
  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      case "Failed":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Transaction History</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm text-gray-600">Transaction ID</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Direction</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Date</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Currency</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Status</th> {/* New status column */}
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition-transform transform hover:scale-105"
              >
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{transaction.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{transaction.direction}</td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{transaction.date}</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-700">
                  {transaction.type === "credit" ? `+${transaction.amount}` : `-${transaction.amount}`}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{transaction.currency}</td>
                <td className={`px-4 py-3 text-sm font-medium ${getStatusColor(transaction.status)}`}>{transaction.status}</td> {/* Status column */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Next UI Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          total={totalPages}
          initialPage={currentPage}
          onChange={handlePaginationChange}
          color="default"
        />
      </div>
    </div>
  );
};

export default TransactionList;
