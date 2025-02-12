"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Chip } from "@nextui-org/react";
import { CopyToClipboard } from "react-copy-to-clipboard"; // Import copy-to-clipboard package
import { FaCopy } from "react-icons/fa"; // Import clipboard icon from react-icons

const Confirmation: React.FC = () => {
  const searchParams = useSearchParams();
  const [currency, setCurrency] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false); // State to track if address is copied
  const [proofOfPayment, setProofOfPayment] = useState<File | null>(null); // State to handle the uploaded file

  // Access the query parameters using useSearchParams
  useEffect(() => {
    const currencyQuery = searchParams.get("method");
    if (currencyQuery) {
      setCurrency(currencyQuery); // Set the currency from the query params
    }

    const amountQuery = searchParams.get("amount");
    if (amountQuery) {
      setAmount(amountQuery); // Set the amount from the query params
    }

    const addressQuery = searchParams.get("address");
    if (addressQuery) {
      setAddress(addressQuery); // Set the address from the query params
    }
  }, [searchParams]); // Re-run the effect when the searchParams change

  // Function to handle the address copy
  const handleCopy = () => {
    setIsCopied(true); // Set copied to true
    setTimeout(() => setIsCopied(false), 2000); // Hide the popup after 2 seconds
  };

  // Handle file upload change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setProofOfPayment(file);
    }
  };

  // Function to handle form submission (for proof of payment)
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (proofOfPayment) {
      alert("Proof of payment submitted!");
      // Here you can handle the file upload, e.g., send it to an API endpoint
    } else {
      alert("Please upload your proof of payment.");
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <div className="flex justify-center">
          {/* Custom Chip container (responsive width and padding) */}
          <div className="w-full sm:w-3/5 p-2 sm:p-4 bg-blue-200 rounded-full border-2 border-blue-500 flex items-center shadow-md">
            {/* First Next UI Chip (responsive text size) */}
            <Chip color="success" variant="solid" className="text-white text-xs sm:text-sm md:text-base font-medium">
              Your Withdrawal Method
            </Chip>

            {/* Currency Text (responsive text size) */}
            <p className="ml-2 sm:ml-4 text-blue-800 font-semibold text-xs sm:text-sm md:text-base">
              {currency}
            </p>
          </div>
        </div>

        {/* Form for Proof of Payment */}
        <div className="mt-3">
          <form onSubmit={handleFormSubmit} className="p-4 sm:p-6">

            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="amount"
                className="block text-base sm:text-lg font-medium text-gray-700 mb-2 text-sm sm:text-base"
              >
                Enter amount to withdraw
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                id="amount"
                className="w-full p-3 sm:p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="otp"
                className="block text-base sm:text-lg font-medium text-gray-700 mb-2 text-sm sm:text-base"
              >
                Enter OTP
              </label>
              <input
                placeholder="Enter OTP"
                type="string"
                id="otp"
                className="w-full p-3 sm:p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            {/* Conditional rendering for the Bank Transfer Details */}
            {currency === "bank" && (
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="details"
                  className="block text-base sm:text-lg font-medium text-gray-700 mb-2 text-sm sm:text-base"
                >
                  Enter bank transfer details
                </label>
                <input
                  type="text"
                  id="details"
                  className="w-full p-3 sm:p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <div>
                  <p className="mt-2 text-sm text-gray-600">
                    Bank Transfer is not a default withdrawal option in your account, please enter the correct bank details separated by commas to receive your funds.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-1/2 bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base"
              >
                Submit Proof of Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
