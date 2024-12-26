import React, { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Modal from './investnowmodal';
import WithdrawalModal from './withdrawalmodel';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

// Function to generate random data (not directly used here, but can be useful for other charts)
const generateRandomData = () => {
  const data: number[] = [];
  const times = Math.floor(Math.random() * 6) + 5;
  for (let i = 0; i <= times; i++) {
    if (i === times) {
      data.push(60000);
      break;
    }
    data.push(Math.floor(Math.random() * 60000)); // Random value between 0 and 60,000
  }
  return data;
};

interface Plan {
  price: number;           // Starting price
  current_balance: number; // Final balance at the completion date
  created_at: string;      // Plan start date
  date_completed: string;  // Plan completion date
}

const generatePlanData = (plan: Plan) => {
  const createdAt = new Date(plan.created_at);
  const completedAt = new Date(plan.date_completed);
  
  // Calculate total days between created_at and date_completed
  const date1: Date = new Date('2024-01-15');
const date2: Date = new Date('2024-02-06');

// Calculate the difference in 
// milliseconds between the two dates
const differenceInMs: number = 
    Math.abs(date2.getTime() - date1.getTime());

// Define the number of milliseconds in a day
const millisecondsInDay: number = 1000 * 60 * 60 * 24;

// Calculate the difference in days by 
// dividing the difference in milliseconds by 
// milliseconds in a day
const totalDays: number = 
    Math.floor(differenceInMs / millisecondsInDay);


  // Daily increment calculation
  const dailyIncrement = (plan.current_balance - plan.price) / totalDays;

  const planData = [];

  // Loop through each day to generate the data for that day
  for (let i = 0; i < totalDays; i++) {
    const balance = plan.price + dailyIncrement * i; // Calculate the balance for each day
    planData.push(balance.toFixed(2)); // Round the balance to 2 decimal places
  }

  return planData;
};

interface TwoColumnLayoutProps {
  user: any;
  wallets: any;
  plans: Plan[];
}

function TwoColumnLayout(d: TwoColumnLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalWithdrawOpen, setIsModalWithdrawOpen] = useState(false);

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openWithdrawalModal = () => setIsModalWithdrawOpen(true);
  const closeWithdrawalModal = () => setIsModalWithdrawOpen(false);

  // If there are plans, generate the data for the first plan
  const plan = d.plans.length > 0 ? d.plans[0] : null;
  const data = plan ? generatePlanData(plan) : [];
  
  // Chart data for Line chart
  const chartData = {
    labels: Array.from({ length: data.length }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Last Month Income Spread',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.7,
        fill: true,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        shadowColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  // Chart data for Pie chart
  const pieChartData = {
    labels: Array.from({ length: data.length }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Random Data Distribution',
        data: data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 205, 86, 0.5)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleWithdraw = (amount: number, bankDetails: string) => {
    console.log("Withdrawing", amount, "to", bankDetails);
    // Process the withdrawal here (e.g., API call)
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        {/* First Column */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 md:col-span-7">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
            <div className="flex-1">
              <p className="text-gray-600 mb-2">Total portfolio</p>
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">${d.user.balance}</h2>
              <p className="text-gray-600 mb-6">
              {`You have gained $${isNaN(Number(data[data.length - 1])) ? 0 : Number(data[data.length - 1]).toFixed(2)} this month. Keep up the good work!`}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 md:w-auto my-auto">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                onClick={openModal}
              >
                Make a deposit
              </button>

              <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                title="Make a deposit into any of these wallets"
                plans={d.wallets}
              />

              <button
                onClick={openWithdrawalModal}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Make a Withdrawal
              </button>

              <WithdrawalModal
                isOpen={isModalWithdrawOpen}
                closeModal={closeWithdrawalModal}
                title="Withdrawal Form"
                onWithdraw={handleWithdraw}
              />
            </div>
          </div>

          {/* Line Chart Section */}
          <div className="bg-white p-6 rounded-lg mb-6 hidden md:block">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Monthly Data Chart</h3>
            <Line data={chartData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Second Column */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 md:col-span-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Plan Earnings distribution</h2>
          <p className="text-gray-600 mb-6">
            Distribution of present plan earnings per day.
          </p>

          {/* Pie Chart Section */}
          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Data Distribution (Pie Chart)</h3>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnLayout;
