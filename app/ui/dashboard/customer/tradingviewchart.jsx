"use client"

import React, { useEffect } from 'react';

const TradingViewCharts = ({ symbol = "BTCUSD", interval = "60", containerId = "tradingview_chart", theme = "dark" }) => {
  
  useEffect(() => {
    // Load the TradingView widget script
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js"; // TradingView Widget JS
    script.async = true;
    script.onload = () => {
      // Initialize the TradingView chart widget once the script is loaded
      new window.TradingView.widget({
        container_id: containerId, // The container where the chart will appear
        autosize: true, // Resize to fit the container
        symbol: symbol, // Symbol to display (e.g., "BTCUSD")
        interval: interval, // Chart interval (e.g., "60" for 1-hour chart)
        timezone: "Etc/UTC", // Timezone
        theme: theme, // Theme ("light" or "dark")
        style: "1", // Line chart (1) or candlestick chart (3)
        locale: "en", // Locale (language)
        toolbar_bg: "#f1f3f6", // Toolbar background color
        enable_publishing: false, // Disable publishing button
        allow_symbol_change: true, // Allow users to change the symbol
        withdateranges: true, // Allow date ranges
        hide_side_toolbar: false, // Show or hide the side toolbar
        hideideas: true, // Hide the idea button
        save_image: false // Disable saving chart as an image
      });

      // Initialize the TradingView Crypto Top Performers widget
      new window.TradingView.widget({
        container_id: "crypto_top_performers", // The container for the top performers widget
        width: "100%",
        height: 400,
        layout: "vertical",
        colorTheme: theme, // Theme of the widget ("light" or "dark")
        displayMode: "compact",
        market: "crypto", // Market type (crypto)
        symbols: [
          ["BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:XRPUSDT", "BINANCE:ADAUSDT", "BINANCE:LTCUSDT"] // Example crypto symbols
        ],
        chartOnly: false // Whether to show chart only or also include performance details
      });
    };

    document.body.appendChild(script); // Add script to the body

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script); // Clean up script on component unmount
    };
  }, [symbol, interval, containerId, theme]);

  return (
    <div>
      
      {/* Main TradingView chart */}
      <div
        id={containerId}
        style={{ height: "500px", width: "100%", marginBottom: "30px" }} // Set height and width for the chart
      />
      
      {/* Crypto Top Performer Widget */}
      {/* <h2>Top Performing Cryptos</h2>
      <div
        id="crypto_top_performers"
        style={{ height: "400px", width: "100%" }} // Set height for the top performer widget
      /> */}
    </div>
  );
};

export default TradingViewCharts;
