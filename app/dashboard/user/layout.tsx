"use client";

import React, { useEffect } from 'react';
import Navbar from '@/app/ui/user/navbar';

const OverlayLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Add Google Translate Script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    const initializeGoogleTranslate = () => {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
            includedLanguages: '', // empty string means all languages
            dropdownStyle: 'select'
          },
          'google_translate_element'
        );
      };

      addScript();
    };

    // Ensure the script is loaded properly before initialization
    if (window.google && window.google.translate) {
      initializeGoogleTranslate();
    } else {
      // Add script and initialize when the script is loaded
      window.googleTranslateElementInit = initializeGoogleTranslate;
      addScript();
    }

    // Cleanup on component unmount
    return () => {
      const script = document.querySelector('script[src*="translate_a/element.js"]');
      if (script) {
        script.remove();
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="h-screen relative">
      {/* Base container with top and bottom sections */}
      <div className="h-full grid grid-rows-2 z-0">
        {/* Top section */}
        <div className="bg-blue-500 flex justify-center items-center text-white rounded-t-lg" />
        
        {/* Bottom section */}
        <div className="bg-white flex justify-center items-center rounded-b-lg" />
      </div>

      {/* Main content column - adjust height based on content */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-11/12 sm:w-2/3 flex flex-col items-center z-20 pt-2 sm:pt-4">
        <div className="w-full rounded-lg shadow-lg p-4 sm:p-6 relative">
          <Navbar />
          {children}

          {/* Footer with Google Translate Widget and Copyright Text in the same row */}
          <div className="flex justify-between items-center w-full mt-4 sm:mt-8 mb-2 sm:mb-4">
            {/* Copyright Text */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
              All Rights Reserved © Fortis Global Traders
            </p>

            {/* Google Translate Widget */}
            <div
              id="google_translate_element"
              className="translate-dropdown sm:w-32 md:w-48 lg:w-64" // Make it smaller on mobile
            />
          </div>

          {/* Custom styles for the translate dropdown */}
          <style jsx global>{`
            .translate-dropdown select {
              padding: 6px;
              border-radius: 6px;
              border: 1px solid #e2e8f0;
              background-color: white;
              color: #1a202c;
              font-size: 12px; /* Default small font */
              cursor: pointer;
              outline: none;
              min-width: 180px;
            }

            /* Adjust size for smaller screens */
            @media (max-width: 640px) { /* Mobile */
              .translate-dropdown select {
                font-size: 10px; /* Smaller text on mobile */
                padding: 4px; /* Smaller padding */
                min-width: 150px; /* Smaller width */
              }
            }

            @media (min-width: 640px) and (max-width: 1024px) { /* Tablet */
              .translate-dropdown select {
                font-size: 12px; /* Medium size on tablet */
                padding: 5px; /* Slightly smaller padding */
                min-width: 180px; /* Adjust width */
              }
            }

            /* Ensure visibility of the translate dropdown */
            #google_translate_element {
              display: inline-block;
            }

            .translate-dropdown select:hover {
              border-color: #cbd5e0;
            }

            .goog-te-combo {
              margin: 0 !important;
            }

            .VIpgJd-ZVi9od-l4eHX-hSRGPd,
            .VIpgJd-ZVi9od-ORHb-OEVmcd {
              display: none !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default OverlayLayout;
