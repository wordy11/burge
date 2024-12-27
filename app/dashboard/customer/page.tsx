"use client";

import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { cookies } from 'next/headers';
import TwoColumnLayout from '@/app/ui/dashboard/customer/first-two-column';
import TransactionTable from '@/app/ui/dashboard/customer/transaction-table';
import RandomDepositModal from '@/app/ui/popup';
import TradingViewChart from '@/app/ui/dashboard/customer/tradingviewchart';
import PlansListInvest from '@/app/ui/dashboard/customer/investplan';
import { fetchWallets, fetchPlans, fetchUser } from '@/app/lib/data';
import { redirect } from 'next/navigation';

const DashboardPage: React.FC = () => {
  const [wallets, setWallets] = useState<any>(null);
  const [plans, setPlans] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Get token from HTTP-only cookie
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1];

        if (!token) {
          setTimeout(() => {
            redirect('/user/login');
          }, 2000);
          return;
        }

        const walletsData = await fetchWallets();
        const plansData = await fetchPlans();
        const fetchedUser = await fetchUser(token);

        if (!fetchedUser) {
          setTimeout(() => {
            redirect('/user/login');
          }, 2000);
          return;
        }

        setWallets(walletsData);
        setPlans(plansData);
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {user && wallets && <TwoColumnLayout user={user} wallets={wallets} plans={user.plans} />}
        <PlansListInvest plans={plans} user={user} token={document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1] || ''}/>
        <TransactionTable token={document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1] || ''}/>
        <RandomDepositModal />
        <TradingViewChart />
      </div>
    </div>
  );
};

export default DashboardPage;