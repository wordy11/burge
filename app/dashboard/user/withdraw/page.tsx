"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter in Next.js 13+

const PasswordConfirmation: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true); // State for password validity
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter(); // Initialize the useRouter hook

  // Handle password change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Handle form submission
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate password check (this can be replaced with an actual check)
    if (password === "YourSecurePassword") {
      // If the password is correct, perform redirection
      alert("Password is correct! Redirecting...");
      setIsPasswordCorrect(true);
      
      // Redirect to another page (e.g., "/dashboard")
      router.push("/dashboard"); // Replace "/dashboard" with your desired route

      // Optionally, reset the password state after submission
      setPassword("");
    } else {
      // Handle incorrect password
      setIsPasswordCorrect(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Secure Area Heading */}
        <h2 className="text-md md:text-xl font-semibold text-center text-gray-800 mb-6">
          This is a secure area. Please confirm your password before continuing.
        </h2>

        {/* Password Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Password Input Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Enter Password *
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message (if password is incorrect) */}
          {!isPasswordCorrect && (
            <p className="text-red-500 text-sm">Incorrect password, please try again.</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Verifying..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordConfirmation;
