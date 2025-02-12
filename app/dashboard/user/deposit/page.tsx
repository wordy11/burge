"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook from Next.js

interface Crypto {
  id: number;
  name: string;
  icon: string;
  paymentAddress: string; // Added the paymentAddress field
}

const Deposit: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const router = useRouter(); // Get the Next.js router instance

  // Example cryptocurrencies, each with a payment address
  const cryptos: Crypto[] = [
    { id: 1, name: "Bitcoin", icon: "/images/bitcoin-icon.png", paymentAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { id: 2, name: "Ethereum", icon: "/images/ethereum-icon.png", paymentAddress: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88" },
    { id: 3, name: "Ripple", icon: "/images/ripple-icon.png", paymentAddress: "r3LUMh2EXKopjS2Fji7BdUo4Wc3fgXe8HR" },
    { id: 4, name: "VCoin", icon: "/images/vcoin-icon.png", paymentAddress: "VZC9wDZn27nQb8QYZf5yVo3qFzD6pQ3FCh" },
  ];

  const balance: number = 5000; // Example user balance

  // Handle input change for deposit amount
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  // Handle currency selection
  const handleCryptoSelect = (crypto: Crypto) => {
    setSelectedCrypto(crypto);
    setAlertOpen(true); // Show the alert when a crypto is selected
  };

  // Close alert after 3 seconds
  useEffect(() => {
    if (alertOpen) {
      const timer = setTimeout(() => {
        setAlertOpen(false);
      }, 3000); // Close the alert after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [alertOpen]);

  // Handle form submission and redirect to another page
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedCrypto && amount) {
      // Ensure the values are strings and pass the correct pathname
      router.push( "/dashboard/user/payment",{
        query: {
          amount: String(amount), // Ensure the amount is a string
          selectedCrypto: selectedCrypto.name, // selectedCrypto as a string
          paymentAddress: selectedCrypto.paymentAddress, // paymentAddress from selectedCrypto
        },
      });
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white">Fund Your Account</h1>
      </div>
      <div className="p-8 mx-auto bg-white rounded-xl">
        {/* Fund Your Account Header */}

        {/* User Balance and Deposit Amount Section (Side by Side) */}
        <div className="mb-8 p-6 flex items-center justify-between space-x-8">
          <div className="flex-1">
            <h2 className="text-md sm:text-lg font-semibold text-gray-700">Total Deposits</h2>
            <p className="text-xl sm:text-2xl font-bold text-green-600">${balance}</p>
          </div>

          <div className="flex-1">
            <h2 className="text-md sm:text-lg font-semibold text-gray-700">Deposit Amount</h2>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="w-full p-4 text-xl sm:text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm sm:placeholder:text-xs md:placeholder:text-sm"
              placeholder="Enter amount"
            />
          </div>
        </div>

        {/* Currency Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptos.length === 0 ? (
            <p className="text-center text-gray-500">No currencies available</p>
          ) : (
            cryptos.map((crypto) => (
              <div
                key={crypto.id}
                className={`bg-white p-6 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 
                ${selectedCrypto?.id === crypto.id ? "border-2 border-blue-500" : "border border-gray-300"}`}
                onClick={() => handleCryptoSelect(crypto)}
              >
                <h3 className="text-lg sm:text-base font-semibold text-gray-800">{crypto.name}</h3>
              </div>
            ))
          )}
        </div>

        {/* Deposit Section Submit Button */}
        <div className="mt-8">
          <button
            disabled={!selectedCrypto || !amount}
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-400 transition-colors hover:bg-blue-700"
          >
            Deposit
          </button>
        </div>

        {/* Green Notification at Top Right */}
        {alertOpen && selectedCrypto && (
          <div className="fixed top-4 right-4 bg-green-200 text-green-800 p-3 rounded-lg shadow-lg max-w-xs z-50">
            <p className="text-sm font-medium">
              You have chosen to pay with <span className="font-semibold">{selectedCrypto.name}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deposit;
