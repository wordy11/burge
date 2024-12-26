import React from 'react';

type Plan = {
    name: string
    description: string
    price: number,
    duration_in_months: number
    gain: number
};

interface PlanTableProps {
  Plans: Plan[];
}

const PlanTable: React.FC<PlanTableProps> = ({ Plans }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Plan Name</th>
            <th className="px-4 py-2">Plan Description</th>
            <th className="px-4 py-2">Plan Duration (Days)</th>
            <th className="px-4 py-2">Plan Price</th>
            <th className="px-4 py-2">Return</th>
          </tr>
        </thead>
        <tbody>
          {Plans.map((Plan, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{Plan.name}</td>
              <td className="px-4 py-2">{Plan.description}</td>
              <td className="px-4 py-2">{Plan.duration_in_months}</td>
              <td className="px-4 py-2">{Plan.price}</td>
              <td className="px-4 py-2">{Plan.gain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanTable;
