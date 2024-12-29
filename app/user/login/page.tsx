'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Host } from '@/app/lib/common';
import AcmeLogo from '@/app/ui/acme-logo';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

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
          <AcmeLogo />
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>

          {/* Error message */}
          {error && (
            <div className="text-center text-red-600 mb-4">
              <p>{error}</p>
            </div>
          )}

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-md p-3 bg-gray-800">
                {/* Username Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c2.485 0 4.5-2.015 4.5-4.5S14.485 2 12 2 7.5 4.015 7.5 6.5 9.515 11 12 11zm0 2c-4.418 0-8 2.015-8 4.5V20h16v-2.5c0-2.485-3.582-4.5-8-4.5z"
                  />
                </svg>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 ml-3 bg-transparent focus:outline-none text-white placeholder-gray-500"
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-md p-3 bg-gray-800">
                {/* Password Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c2.485 0 4.5-2.015 4.5-4.5S14.485 2 12 2 7.5 4.015 7.5 6.5 9.515 11 12 11zm0 2c-4.418 0-8 2.015-8 4.5V20h16v-2.5c0-2.485-3.582-4.5-8-4.5z"
                  />
                </svg>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 ml-3 bg-transparent focus:outline-none text-white placeholder-gray-500"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

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
            src="/customers/wave.gif"
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
