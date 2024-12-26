// components/Hero.tsx
import Image from "next/image";
import TradingViewCharts from "./tradingview2";
export default function Preview() {
    return (
      <div className="w-fulltext-white py-7 px-4">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-3 mt-3">
          <div className="w-full text-center md:text-center mb-6 md:mb-0 ">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Invest and watch your portfolio grow
            </h1>
            <h3 className="text-3xl mt-4 mb-2 md:text-xl text-white">
              Tried and trusted by investors around the world!!!
            </h3>
          </div>
        </div>
  
        {/* Second Row */}
        <div className="flex flex-col md:flex-rowmb-3 mt-3">
          <TradingViewCharts />
          {/* <div className="w-full flex justify-center"> */}
          {/* <Image
            src="/preview.png"
            width={1500}
            height={1300}
            className="hidden md:block mb-3"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/preview.png"
            width={600}
            height={600}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          /> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
  