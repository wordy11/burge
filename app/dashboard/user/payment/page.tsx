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
    const currencyQuery = searchParams.get("currency");
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
            <Chip color="warning" variant="solid" className="text-white text-xs sm:text-sm md:text-base font-medium">
              Your Payment Method
            </Chip>

            {/* Currency Text (responsive text size) */}
            <p className="ml-2 sm:ml-4 text-blue-800 font-semibold text-xs sm:text-sm md:text-base">
              {currency}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <p className="mt-4 text-base sm:text-xl font-medium text-gray-700 text-sm sm:text-lg">
            You are to make a payment of <span className="text-blue-600">${amount}</span> using your selected payment method.
          </p>
          <p className="text-left mt-2 sm:mt-4 text-base sm:text-lg font-semibold text-gray-800 text-sm sm:text-base">
            {currency} Address:
          </p>

          {/* Display address and add clipboard icon for copying */}
          {address ? (
            <div className="mt-2 sm:mt-4 bg-blue-100 p-3 sm:p-4 rounded-md flex items-center shadow-md">
              {/* Address Text */}
              <p className="text-blue-800 font-medium flex-1 truncate text-sm sm:text-base">
                {address}
              </p>

              {/* Clipboard Button (positioned at the right edge) */}
              <CopyToClipboard text={address} onCopy={handleCopy}>
                <button className="ml-4 p-2 text-blue-500 hover:text-blue-700 rounded-full transition-all duration-200 ease-in-out">
                  <FaCopy />
                </button>
              </CopyToClipboard>
            </div>
          ) : (
            <p className="text-red-500 mt-4 text-sm sm:text-base">No address provided</p> // Display error if no address
          )}

          {/* Popup for address copied notification */}
          {isCopied && (
            <div className="fixed top-10 right-10 bg-white text-black p-4 rounded-lg shadow-lg border border-gray-300 z-50 transition-all duration-300 ease-in-out">
              <p className="font-semibold text-sm sm:text-base">Wallet Address Copied!</p>
            </div>
          )}
        </div>

        {/* Form for Proof of Payment */}
        <div className="mt-3">
          <form onSubmit={handleFormSubmit} className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-4 text-sm sm:text-xl">
              Submit Proof of Payment
            </h3>

            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="proof"
                className="block text-base sm:text-lg font-medium text-gray-700 mb-2 text-sm sm:text-base"
              >
                Upload Your Proof of Payment (Screenshot or PDF)
              </label>
              <input
                type="file"
                id="proof"
                accept="image/*, .pdf"
                onChange={handleFileChange}
                className="w-full p-3 sm:p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

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
