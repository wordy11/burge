"use client"
import React, { useEffect } from 'react';

interface Symbol {
  description: string;
  proName: string;
}

interface WidgetConfig {
  symbols: Symbol[];
  showSymbolLogo: boolean;
  isTransparent: boolean;
  displayMode: "regular" | "adaptive" | "compact";
  colorTheme: "light" | "dark";
  locale: string;
}

const TradingViewTicker: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    
    const config: WidgetConfig = {
      symbols: [
        { description: "", proName: "BINANCE:BTCUSDT" },
        { description: "", proName: "BITSTAMP:BTCUSD" },
        { description: "", proName: "BINANCE:SOLUSDT" },
        { description: "", proName: "BINANCE:XRPUSDT" },
        { description: "", proName: "COINBASE:ETHUSD" },
        { description: "", proName: "CRYPTOCAP:USDT.D" },
        { description: "", proName: "COINBASE:XRPUSD" },
        { description: "", proName: "BINANCE:ADAUSDT" },
        { description: "", proName: "CRYPTO:SOLUSD" },
        { description: "", proName: "BINANCE:PEPEUSDT" },
        { description: "", proName: "BINANCE:UNIUSDT" },
        { description: "", proName: "BITSTAMP:USDTUSD" },
        { description: "", proName: "BINANCE:TRXUSDT" }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    };
    
    script.innerHTML = JSON.stringify(config);

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    widgetContainer?.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="text-sm text-gray-600">
      </div>
    </div>
  );
};

export default TradingViewTicker;