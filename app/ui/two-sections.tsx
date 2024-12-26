"use client";
import Image from "next/image";

export default function TwoColumnsSection() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-1 md:gap-3">
          {/* Left Column */}
          <div className="flex-1 flex justify-center items-center sm:mr-3">
            <div className="bg-dark-gray-blue sm:shadow-none sm:rounded-none md:shadow-lg md:rounded-lg p-6 sm:mx-4 md:mx-4 sm:mb-4 md:mb-0 w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-blue-500 sm:text-center md:text-center">
                Earn Crypto
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl mb-4 text-gray-200 sm:text-center md:text-center">
                Deposit crypto and earn passive income
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-2 text-gray-400 sm:text-center md:text-center">
                Choose from 10 cryptocurrencies
              </p>
              <p className="text-xl sm:text-2xl md:text-2xl mb-2 text-blue-400 sm:text-center md:text-center">
                65% APY
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/cc2.png"
              width={1000}
              height={400}
              className="hidden md:block mb-3"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/cc3.jpeg"
              width={600}
              height={600}
              className="block md:hidden"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
