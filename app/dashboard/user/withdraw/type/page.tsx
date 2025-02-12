"use client";

import React from "react";
import { BanknotesIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"; // Import relevant icons
import { FaBitcoin, FaEthereum } from "react-icons/fa";

const BankTransferCards: React.FC = () => {
  // Card details with a link property for each card
  const cardDetails = [
    {
      title: "Bank Transfer",
      icon: <BanknotesIcon className="w-12 h-12 mx-auto" />,
      minAmount: "$1,000",
      maxAmount: "$100,000",
      chargeType: "Percentage",
      chargesAmount: "0%",
      duration: "24 hours",
      link: "/bank-transfer-details/1", // Example link for each card
    },
    {
      title: "USDT TRC20",
      icon: <CurrencyDollarIcon className="w-12 h-12 mx-auto" />,
      minAmount: "$1,000",
      maxAmount: "$100,000",
      chargeType: "Percentage",
      chargesAmount: "0%",
      duration: "24 hours",
      link: "/usdt-trc20-details/2", // Example link for each card
    },
    {
      title: "Ethereum",
      icon: <FaEthereum className="w-12 h-12 mx-auto" />,
      minAmount: "$1,000",
      maxAmount: "$100,000",
      chargeType: "Percentage",
      chargesAmount: "0%",
      duration: "24 hours",
      link: "/ethereum-details/3", // Example link for each card
    },
    {
      title: "Bitcoin",
      icon: <FaBitcoin className="w-12 h-12 mx-auto" />,
      minAmount: "$1,000",
      maxAmount: "$100,000",
      chargeType: "Percentage",
      chargesAmount: "0%",
      duration: "24 hours",
      link: "/bitcoin-details/4", // Example link for each card
    },
  ];

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {cardDetails.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl max-w-sm mx-auto"
        >
          <div className="p-6 text-center">
            {/* Render the icon dynamically based on the card */}
            <div className="mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>

            <div className="mt-4 space-y-4 text-sm text-gray-600">
              {/* Min Withdrawable Amount */}
              <div>
                <span className="font-medium">Min Withdrawable Amount</span>
                <div className="text-gray-800">{card.minAmount}</div>
              </div>

              {/* Max Withdrawable Amount */}
              <div>
                <span className="font-medium">Max Withdrawable Amount</span>
                <div className="text-gray-800">{card.maxAmount}</div>
              </div>

              {/* Charge Type */}
              <div>
                <span className="font-medium">Charge Type</span>
                <div className="text-gray-800">{card.chargeType}</div>
              </div>

              {/* Charges Amount */}
              <div>
                <span className="font-medium">Charges Amount</span>
                <div className="text-gray-800">{card.chargesAmount}</div>
              </div>

              {/* Duration */}
              <div>
                <span className="font-medium">Duration</span>
                <div className="text-gray-800">{card.duration}</div>
              </div>
            </div>

            {/* Button to navigate */}
            <div className="mt-6">
              <a
                href={card.link} // Link for the button, dynamically populated
                className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankTransferCards;
