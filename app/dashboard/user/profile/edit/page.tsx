"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCity, FaBuilding, FaRegCalendarAlt } from "react-icons/fa";

interface FormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: string;
  country: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  preferredContactMethod: string;
}

const Profile = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "John Doe",
    email: "johndoe@example.com",
    mobileNumber: "+1 (555) 123-4567",
    dateOfBirth: "March 15, 1990",
    country: "United States",
    street1: "1234 Elm Street",
    street2: "Apartment 45B",
    city: "Springfield",
    state: "Illinois",
    zipCode: "62701",
    emergencyContactName: "Jane Doe",
    emergencyContactNumber: "+1 (555) 987-6543",
    preferredContactMethod: "Email",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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
        <h3 className="text-3xl font-semibold text-center mb-8">Edit Profile</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div>
            {/* <h4 className="text-xl font-semibold mb-4 text-center">Personal Information</h4> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="text-gray-700 font-semibold">Full Name</label>
                <div className="relative mt-1">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-gray-700 font-semibold">Email Address</label>
                <div className="relative mt-1">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mobileNumber" className="text-gray-700 font-semibold">Mobile Number</label>
                <div className="relative mt-1">
                  <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="mobileNumber"
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="text-gray-700 font-semibold">Date of Birth</label>
                <div className="relative mt-1">
                  <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    placeholder="Date of Birth"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="text-gray-700 font-semibold">Country</label>
                <div className="relative mt-1">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Country"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="street1" className="text-gray-700 font-semibold">Street Address</label>
                <div className="relative mt-1">
                  <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="street1"
                    id="street1"
                    value={formData.street1}
                    onChange={handleInputChange}
                    placeholder="Street Address"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="street2" className="text-gray-700 font-semibold">Apartment/Suite</label>
                <div className="relative mt-1">
                  <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="street2"
                    id="street2"
                    value={formData.street2}
                    onChange={handleInputChange}
                    placeholder="Apartment/Suite"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="text-gray-700 font-semibold">City</label>
                <div className="relative mt-1">
                  <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="state" className="text-gray-700 font-semibold">State/Province</label>
                <div className="relative mt-1">
                  <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State/Province"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="zipCode" className="text-gray-700 font-semibold">Zip Code</label>
                <div className="relative mt-1">
                  <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="Zip Code"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Information Section */}
          <div>
            {/* <h4 className="text-xl font-semibold text-center mb-4">Additional Contact Information</h4> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emergencyContactName" className="text-gray-700 font-semibold">Emergency Contact Name</label>
                <div className="relative mt-1">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="emergencyContactName"
                    id="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleInputChange}
                    placeholder="Emergency Contact Name"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="emergencyContactNumber" className="text-gray-700 font-semibold">Emergency Contact Phone</label>
                <div className="relative mt-1">
                  <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="emergencyContactNumber"
                    id="emergencyContactNumber"
                    value={formData.emergencyContactNumber}
                    onChange={handleInputChange}
                    placeholder="Emergency Contact Phone"
                    className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
