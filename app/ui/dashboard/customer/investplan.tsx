import { Host } from '@/app/lib/common';
import React, { useState } from 'react';

// Define the structure for the plan
type Plan = {
    id: string
    name: string
    description: string
    price: number,
    duration_in_months: number
    gain: number
};
// Define the structure for the user
interface User {
  id: string;
  name: string;
  email: string;
  balance: number;  // Example property for balance
}

// Props for the PlansList component
interface PlansListProps {
  plans: Plan[];
  user: User;
  token: string;  // User object to personalize the experience
}

const PlansListInvest: React.FC<PlansListProps> = ({ plans, user, token }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handlePostRequest = async (planId: string, token: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Make a POST request to subscribe to the plan (replace with actual API endpoint)
      const response = await fetch(`${Host}/user-plans/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ plan: planId, user: user.id }), // Pass both planId and userId
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe to the plan');
      }

      const data = await response.json();
      if (data.error.includes("already subscribed to the plan")) {
        setError('You already have an active subscription.');
      }
      setSuccess('Successfully subscribed to the plan!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Investment Plans</h2>

      {/* Display the user's information */}
      {/* <div className="mb-6">
        <h3 className="font-medium text-lg">Hello, {user.name}!</h3>
        <p className="text-gray-500">Your current balance: ${user.balance}</p>
      </div> */}

      {plans.length === 0 ? (
        <p className='text-white'>No plans available at the moment.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-dark-gray-blue text-white">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Plan Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Description</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Price ($)</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Profit ($)</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Duration ($)</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id} className="border-t text-black bg-white">
                  <td className="px-4 py-2 text-sm text-gray-800">{plan.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{plan.description}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 font-bold text-blue-600">{plan.price}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 font-bold text-blue-600">{plan.gain}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 font-bold text-blue-600">{plan.duration_in_months}</td>
                  <td className="px-4 py-2 text-sm">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                      onClick={() => handlePostRequest(plan.id, token)}
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Invest'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Error or Success Message */}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default PlansListInvest;
