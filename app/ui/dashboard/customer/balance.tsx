import React from 'react';

const Balance: React.FC = () => {
  // Mock balance data
  const balanceData = {
    totalBalance: 15000, // in USD
    cryptoBalance: 5,     // 5 BTC
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Balance</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Total USD Balance</span>
          <span className="text-xl font-semibold text-gray-800">${balanceData.totalBalance}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Crypto Balance (BTC)</span>
          <span className="text-xl font-semibold text-gray-800">{balanceData.cryptoBalance} BTC</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
