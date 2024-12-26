"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TwoColumnLayout from '@/app/ui/dashboard/customer/first-two-column';
import TransactionTable from '@/app/ui/dashboard/customer/transaction-table';
import RandomDepositModal from '@/app/ui/popup';
import TradingViewChart from '@/app/ui/dashboard/customer/tradingviewchart';
import PlanTable from '@/app/ui/dashboard/admin/plans/table';
import { fetchWallets, fetchPlans, fetchUser } from '@/app/lib/data';
import { redirect } from 'next/navigation';
import PlansListInvest from '@/app/ui/dashboard/customer/investplan';

const DashboardPage: React.FC = () => {
  // States to hold the data fetched asynchronously
  const [wallets, setWallets] = useState<any>(null);
  const [plans, setPlans] = useState<any>(null);
  const [user, setUser] = useState<any>(null);  // State for the user
  const [loading, setLoading] = useState<boolean>(true);
  const token = localStorage.getItem('jwtToken');  // Example of getting token from localStorage
        if (!token) {
          setTimeout(() => {
            redirect('/user/login'); // Redirect to login page if no token
          }, 2000);
        }

  // Fetching data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const token = localStorage.getItem('jwtToken');  // Example of getting token from localStorage
        if (!token) {
          setTimeout(() => {
            redirect('/user/login'); // Redirect to login page if no token
          }, 2000);
        }

        // Fetch wallet data and plans asynchronously
        const walletsData = await fetchWallets();
        const plansData = await fetchPlans();

        // highertoken = token?.toString() || ''

        const fetchedUser = await fetchUser(token?.toString() || ''); // Fetch user data
        if (!fetchedUser) {
          setTimeout(() => {
            redirect('/user/login'); // Redirect to login if user is not found
          }, 2000);
        }

        // Update states with fetched data
        setWallets(walletsData);
        setPlans(plansData);
        setUser(fetchedUser);  // Store the user data

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures this runs once after the first render

  // Loading state
  if (loading) {
    return <div>Loading...</div>; // Display a loading state while fetching data
  }

  // console.log(user)

  // Render the dashboard after data has been fetched
  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Dashboard Header */}
        {user && wallets && <TwoColumnLayout user={user} wallets={wallets} plans={user.plans} />}  {/* Pass the user prop to the TwoColumnLayout component */}
        {/* <PlanTable Plans={plans} /> */}
        <PlansListInvest plans={plans} user={user} token={token?.toString() || ''}/>
        <TransactionTable token={token?.toString() || ''}/>
        <RandomDepositModal />
        <TradingViewChart />
        {/* <TradingViewTicker /> */}
      </div>
    </div>
  );
};

export default DashboardPage;
