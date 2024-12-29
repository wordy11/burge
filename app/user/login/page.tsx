'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';  // Correct useRouter import
import { Host } from '@/app/lib/common'; // Your Host URL (if needed)
import AcmeLogo from '@/app/ui/acme-logo';

const LoginPage: React.FC = () => {

  // State to store form values
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    if (!username || !password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    const res = await fetch(`${Host}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // console.log(data.access_token);
      // localStorage.setItem('jwtToken', data.access_token);
      document.cookie = `token=${data.access_token}; path=/; secure; samesite=strict; max-age=86400`;
      redirect('/dashboard/customer');
    } else {
      setError(data.message || 'An error occurred during login.');
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-gray-blue">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-dark-gray-blue overflow-hidden">
        {/* Left Column: Login Form */}
        <div className="w-full sm:w-1/2 p-6 md:p-8 flex flex-col items-center justify-center">
          {/* Logo Above the Form */}
          {/* <div className="text-center mb-6 px-auto">
            <AcmeLogo /> {/* Ensure logo is centered */}
          {/* </div> */}

          <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>

          {/* Error message */}
          {error && (
            <div className="text-center text-red-600 mb-4">
              <p>{error}</p>
            </div>
          )}

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </div>
          </form>

          {/* Link to Registration */}
          <div className="mt-4 text-center text-sm text-white">
            <p>
              Don't have an account?{' '}
              <a href="/user/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src="/customers/wave.gif" // Replace with your actual image path
            width={1000}
            height={760}
            unoptimized={true}
            alt="Login illustration"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
