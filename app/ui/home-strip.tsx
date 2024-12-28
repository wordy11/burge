// components/ResponsiveStrip.js
import Image from 'next/image';

export default function ResponsiveStrip() {
  return (
    <div className="w-full rounded-md p-2">
      <div className="flex flex-wrap justify-between space-x-1 border-solid border-gray-200">
        {/* First image div */}
        <div className="w-1/5 sm:w-1/5">
          <Image
            src="/strip1.png"
            width={500}
            height={500}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/strip1.png"
            width={200}
            height={200}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        {/* Second image div */}
        <div className="w-1/5 sm:w-1/5">
          <Image
            src="/strip4.png"
            width={500}
            height={500}
            className="hidden md:block mb-3"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/strip4.png"
            width={110}
            height={110}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        {/* Third image div */}
        <div className="w-1/5 sm:w-1/5 sm:pt-3 justify-right">
          <Image
            src="/strip2.png"
            width={300}
            height={300}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/strip2.png"
            width={80}
            height={80}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        <div className="w-1/5 sm:w-1/5 sm:pt-3 justify-right">
          <Image
            src="/strip3.png"
            width={300}
            height={300}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/strip3.png"
            width={80}
            height={80}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </div>
  );
}
