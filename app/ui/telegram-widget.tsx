"use client"

import { FC, useEffect } from 'react';
import Script from 'next/script';

const TelegramChatWidget: FC = () => {
  useEffect(() => {
    // Dynamically load the script after component mount
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Telegram chat widget loaded');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Chat with Us on Telegram</h1>

      {/* Telegram Chat Widget */}
      <div id="telegram-chat-widget-container">
        <div
          data-telegram-chat="your_username" // Replace with the username of the user or group
          data-size="large"
          data-radius="10"
        ></div>
      </div>
    </div>
  );
};

export default TelegramChatWidget;
