"use client"
import React from 'react';
import TradingViewTicker from '@/app/ui/tickertape';
import Navbar from '@/app/ui/user/navbar';
import DashCard from '@/app/ui/user/dashcard';
import TradingViewCharts from '@/app/ui/dashboard/customer/tradingviewchart';

const OverlayLayout = () => {
  return (
    <div>
          <div>
            <TradingViewTicker />
          </div>
          {/* Main content passed from child pages */}
          <div className="mt-4 mb-5">
            {/* <h2 className="text-2xl font-bold"></h2> */}
          </div>
          <DashCard />
          {/* You can uncomment the TradingViewCharts component if necessary */}
          {/* <TradingViewCharts /> */}

          {/* Render the passed child content here */}
    </div>
  );
};

export default OverlayLayout;
