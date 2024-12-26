import React from 'react';

type Wallet = {
  address: string;
  name: string;
  network: string;
};

interface WalletTableProps {
  wallets: Wallet[];
}

const WalletTable: React.FC<WalletTableProps> = ({ wallets }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Wallet Address</th>
            <th className="px-4 py-2">Coin Name</th>
            <th className="px-4 py-2">Coin Network</th>
          </tr>
        </thead>
        <tbody>
          {wallets.map((wallet, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{wallet.address}</td>
              <td className="px-4 py-2">{wallet.name}</td>
              <td className="px-4 py-2">{wallet.network}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletTable;
