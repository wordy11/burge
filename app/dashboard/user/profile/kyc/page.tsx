"use client";

import React, { useState } from "react";
import { FaIdCard, FaFileUpload } from "react-icons/fa";

interface FormData {
  identificationNumber: string;
  driversLicenseFront: File | null;
  driversLicenseBack: File | null;
  proofOfAddress: File | null;
}

const DocumentUpload = () => {
  const [formData, setFormData] = useState<FormData>({
    identificationNumber: "",
    driversLicenseFront: null,
    driversLicenseBack: null,
    proofOfAddress: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can handle your API call here
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-8">
        <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">Upload Documents</h3>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Identification Section */}
          <div>
            <label htmlFor="identificationNumber" className="text-gray-700 font-medium">Identification Number</label>
            <div className="relative mt-2">
              <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="identificationNumber"
                id="identificationNumber"
                value={formData.identificationNumber}
                onChange={handleInputChange}
                placeholder="Enter your identification number"
                className="w-full p-4 pl-12 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Drivers License Front */}
            <div>
              <label htmlFor="driversLicenseFront" className="text-gray-700 font-medium">Upload Driver's License Front</label>
              <div className="relative mt-2">
                <FaFileUpload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="file"
                  name="driversLicenseFront"
                  id="driversLicenseFront"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "driversLicenseFront")}
                  className="w-full p-4 pl-12 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Drivers License Back */}
            <div>
              <label htmlFor="driversLicenseBack" className="text-gray-700 font-medium">Upload Driver's License Back</label>
              <div className="relative mt-2">
                <FaFileUpload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="file"
                  name="driversLicenseBack"
                  id="driversLicenseBack"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "driversLicenseBack")}
                  className="w-full p-4 pl-12 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Proof of Address */}
          <div>
            <label htmlFor="proofOfAddress" className="text-gray-700 font-medium">Upload Proof of Address</label>
            <div className="relative mt-2">
              <FaFileUpload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="file"
                name="proofOfAddress"
                id="proofOfAddress"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "proofOfAddress")}
                className="w-full p-4 pl-12 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Documents
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentUpload;
