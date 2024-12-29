"use client"; // Marking this as a Client Component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Client-side navigation from next/navigation
import Image from 'next/image'; // Next.js Image component for optimized image rendering
import { Host } from '@/app/lib/common'; // Assuming Host is exported from a shared file
import AcmeLogo from '@/app/ui/acme-logo';
import { FaUser, FaEnvelope, FaLock, FaGlobe, FaRegIdBadge } from 'react-icons/fa'; // Importing icons

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'India', 'Germany', 'France', 'Italy', 'Spain', 'Mexico',
  'Brazil', 'South Korea', 'Japan', 'China', 'Russia', 'South Africa', 'Nigeria', 'Argentina', 'Egypt', 'Saudi Arabia',
  'Sweden', 'Norway', 'Netherlands', 'Denmark', 'Finland', 'Belgium', 'Switzerland', 'Austria', 'Poland', 'Portugal'
];

const RegisterPage: React.FC = () => {
  const router = useRouter();

  // State for form values
  const [username, setName] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [referralId, setReferralId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!username || !fullname || !email || !password || !confirmPassword || !country) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    if (!acceptedTerms) {
      setError('You must agree to the Terms and Conditions.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${Host}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fullname, email, password, country, referralId }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage('Registration successful! Redirecting...');
        setTimeout(() => {
          router.push('/user/login');
        }, 2000);
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
          <div className="flex justify-center mb-6">
            <AcmeLogo />
          </div>

          <h2 className="text-3xl font-semibold text-center text-white mb-6">Create an Account</h2>

          {error && (
            <div className="text-center text-red-600 mb-4">
              <p>{error}</p>
            </div>
          )}

          {successMessage && (
            <div className="text-center text-green-600 mb-4">
              <p>{successMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input with Icon */}
            <div className="relative">
              <FaRegIdBadge className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Username Input with Icon */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
                required
              />
            </div>

            {/* Email Input with Icon */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
                required
              />
            </div>

            {/* Password Input with Icon */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
            </div>

            {/* Confirm Password Input with Icon */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Country Dropdown with Icon */}
            <div className="relative">
              <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <select
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select your country</option>
                {countries.map((countryName, index) => (
                  <option key={index} value={countryName}>{countryName}</option>
                ))}
              </select>
            </div>

            {/* Referral ID Input with Icon */}
            <div className="relative">
              <FaRegIdBadge className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                id="referralId"
                name="referralId"
                value={referralId}
                onChange={(e) => setReferralId(e.target.value)}
                className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Referral ID (Optional)"
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                className="mr-2"
                required
              />
              <label htmlFor="terms" className="text-sm text-white">
                I agree to the{' '}
                <a href="/terms" target="_blank" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
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
            src="/account (1).webp"
            alt="Register Image"
            width={600} // Adjusted width for larger image on desktop
            height={450} // Adjusted height for larger image on desktop
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
