import React from 'react';

const Transactions: React.FC = () => {
  // Mock transaction data
  const transactions = [
    { id: 1, date: '2024-12-15', type: 'Deposit', amount: 2.5, currency: 'BTC' },
    { id: 2, date: '2024-12-20', type: 'Withdrawal', amount: 1.0, currency: 'BTC' },
    { id: 3, date: '2024-12-22', type: 'Deposit', amount: 0.5, currency: 'BTC' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">{transaction.date}</span>
              <span className="text-lg font-semibold">{transaction.type}</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">{transaction.amount} {transaction.currency}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
