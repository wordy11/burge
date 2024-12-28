"use client"; // Marking this as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Client-side navigation from next/navigation
import Image from 'next/image'; // Next.js Image component for optimized image rendering

// Assuming Host is exported from a shared file (adjust the import path as needed)
import { Host } from '@/app/lib/common';
import AcmeLogo from '@/app/ui/acme-logo';

const RegisterPage: React.FC = () => {
  const router = useRouter(); // Using useRouter from next/navigation for client-side navigation

  // State to store form values
  const [username, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reset error state
    setSuccessMessage(null); // Reset success message

    // Simple form validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      // Assuming we have an API to handle the registration
      const res = await fetch(`${Host}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage('Registration successful! Redirecting...');
        
        // Force a reload of the page to ensure the state is refreshed
        setTimeout(() => {
          router.push('/user/login'); // Redirect to login page after successful registration
        }, 2000); // Wait for 2 seconds to show the success message
      } else {
        setError(data.message || 'An error occurred during registration.');
      }
    } catch (error) {
      setError('An error occurred while trying to register. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-gray-blue md:flex-row">
      {/* Right Column: Register Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-dark-gray-blue p-6">
        <div className="w-full max-w-md">
          {/* Logo above the form */}
          <div className="flex justify-center mb-6">
            <AcmeLogo />
          </div>

          <h2 className="text-3xl font-semibold text-center text-white mb-6">Create an Account</h2>

          {/* Display error message */}
          {error && (
            <div className="text-center text-red-600 mb-4">
              <p>{error}</p>
            </div>
          )}

          {/* Display success message */}
          {successMessage && (
            <div className="text-center text-green-600 mb-4">
              <p>{successMessage}</p>
            </div>
          )}

          {/* Registration form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Create Account'}
              </button>
            </div>
            <div className="mt-4 text-center text-white text-sm">
            <p>
              Have an account?{' '}
              <a href="/user/login" className="text-blue-600 hover:underline">
                Login here
              </a>
            </p>
          </div>
          </form>
        </div>
      </div>

      {/* Left Column: Image */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-dark-gray-blue p-6 md:p-12">
        <div className="flex justify-center mb-6">
          <Image
            src="/account (1).webp" // Replace with your image path
            alt="Register Image"
            width={400} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
