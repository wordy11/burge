'use client';

import React, { useState } from 'react';
import { addPlan } from '@/app/lib/actions'; // Update the path to match your plan creation logic

const CreatePlanForm: React.FC = () => {
  // State to store form values
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0.0);
  const [durationInMonths, setDurationInMonths] = useState<number>(1);
  const [gains, setGains] = useState<number>(0.0); // New state for gains

  // State to store errors, success message, and loading state
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    // Prepare the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price.toString());
    formData.append('duration_in_months', durationInMonths.toString());
    formData.append('gain', gains.toString()); // Add gains to the form data

    // Call the addPlan function to handle the plan creation
    const result = await addPlan(
      {}, // Empty previousState, adjust if needed
      formData
    );

    // Handle validation errors or success messages
    if (result.errors) {
      // Handle errors if any
    } else if (result.message) {
      setMessage(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Plan</h2>

        {/* Display success message */}
        {message && (
          <div className="text-center text-green-600 mb-4">
            <p>{message}</p>
          </div>
        )}

        {/* Display validation errors */}
        {/* {errors && (
          <div className="text-center text-red-600 mb-4">
            <ul>
              {Object.entries(errors).map(([field, fieldErrors]) => (
                <li key={field}>
                  {fieldErrors?.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {/* Form for plan creation */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Plan Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="0"
            />
          </div>

          <div>
            <label htmlFor="duration_in_months" className="block text-sm font-medium">
              Duration (Months)
            </label>
            <input
              type="number"
              id="duration_in_months"
              name="duration_in_months"
              value={durationInMonths}
              onChange={(e) => setDurationInMonths(parseInt(e.target.value, 10))}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="1"
            />
          </div>

          {/* New Gains Field */}
          <div>
            <label htmlFor="gain" className="block text-sm font-medium">
              Gains (%)
            </label>
            <input
              type="number"
              id="gain"
              name="gain"
              value={gains}
              onChange={(e) => setGains(parseFloat(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="0"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Create Plan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlanForm;
