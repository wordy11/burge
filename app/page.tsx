// "use client";
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import Image from 'next/image';
// import { lusitana } from 'app/ui/fonts';
// import ResponsiveStrip from './ui/home-strip';
// import Preview from './ui/dashboard-preview';
// import TwoColumnsSection from './ui/two-sections';
// import Banner from './ui/banner';
// import TestimonialSection from './ui/testimonials';

// export default function Page() {
//   return (
//     <div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-10 rounded-lg px-8 py-18 md:w-2/5 md:px-20 text-center">
//           <p className={`${lusitana.className} antialiased text-5xl text-white md:text-5xl md:leading-normal`}>
//             Make your life easier with crypto
//           </p>
//           {/* Centering the Login Button */}
//           <div className="flex justify-center">
//             <Link
//               href="/login"
//               className="flex gap-5 items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//             >
//               <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
//             </Link>
//           </div>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           {/* Add Hero Images Here */}
//           <Image
//             src="/logo.jpeg"
//             width={1000}
//             height={760}
//             className="hidden md:block"
//             alt="Screenshots of the dashboard project showing desktop version"
//             style={{
//               transition: 'transform 0.3s ease-in-out', // Animation transition
//             }}
//             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Scale on hover
//             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
//           />
//           <Image
//             src="/hero.png"
//             width={560}
//             height={600}
//             className="block md:hidden"
//             alt="Screenshots of the dashboard project showing desktop version"
//             style={{
//               transition: 'transform 0.3s ease-in-out', // Animation transition
//             }}
//             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Scale on hover
//             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset scale
//           />
//         </div>
//         {/* <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"> */}
//           {/* Add Hero Images Here */}
//           {/* <Image
//             src="/logo.jpeg"
//             width={1000}
//             height={760}
//             className="hidden md:block"
//             alt="Screenshots of the dashboard project showing desktop version"
//           />
//           <Image
//             src="/hero.png"
//             width={560}
//             height={600}
//             className="block md:hidden"
//             alt="Screenshots of the dashboard project showing desktop version" */}
//           {/* /> */}
//         {/* </div> */}
//       </div>
//       <ResponsiveStrip />
//       <Preview />
//       <TwoColumnsSection />
//       <Banner />
//       <TestimonialSection />
//     </div>
//   );
// }



"use client";

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from 'app/ui/fonts';
import ResponsiveStrip from './ui/home-strip';
import Preview from './ui/dashboard-preview';
import TwoColumnsSection from './ui/two-sections';
import Banner from './ui/banner';
import TestimonialSection from './ui/testimonials';
import { useEffect, useRef } from 'react';
import TrustpilotWidget from './ui/trust-pilot';
import TrustPilotCarousel from './ui/trust-pilot';

export default function Page() {
  const desktopImageRef = useRef<HTMLDivElement | null>(null);
  const mobileImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animate = (element: HTMLDivElement | null) => {
      if (!element) return;

      let start: number | null = null;
      const duration = 3000; // 3 seconds
      const distance = 60; // 20px up and down

      function step(timestamp: number): void {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / duration;
        
        // Calculate vertical position using a sine wave
        const position = Math.sin(progress * 2 * Math.PI) * distance;
        
        if (element) {
          element.style.transform = `translateY(${position}px)`;
        }

        // Reset the animation when complete
        if (progress >= 1) {
          start = timestamp;
        }

        requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    };

    animate(desktopImageRef.current);
    animate(mobileImageRef.current);

    return () => {
      if (desktopImageRef.current) desktopImageRef.current.style.transform = '';
      if (mobileImageRef.current) mobileImageRef.current.style.transform = '';
    };
  }, []);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const currentTransform = e.currentTarget.style.transform;
    const translateY = currentTransform.match(/translateY\(([-\d.]+)px\)/)?.[1] || '0';
    e.currentTarget.style.transform = `translateY(${translateY}px) scale(1.1)`;
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const currentTransform = e.currentTarget.style.transform;
    const translateY = currentTransform.match(/translateY\(([-\d.]+)px\)/)?.[1] || '0';
    e.currentTarget.style.transform = `translateY(${translateY}px) scale(1)`;
  };

  return (
    <div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-10 rounded-lg px-8 py-18 md:w-2/5 md:px-20 text-center">
          <p className={`${lusitana.className} antialiased text-5xl text-white md:text-5xl md:leading-normal`}>
            Make your life easier with crypto
          </p>
          <div className="flex justify-center">
            <Link
              href="/login"
              className="flex gap-5 items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Start Investing</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div 
            ref={desktopImageRef}
            className="hidden md:block"
            style={{
              transition: 'transform 0.3s ease-in-out'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Image
              src="/hhh.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
          
          <div 
            ref={mobileImageRef}
            className="block md:hidden"
            style={{
              transition: 'transform 0.3s ease-in-out'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Image
              src="/hhh.png"
              width={560}
              height={600}
              className="block md:hidden"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
      </div>
      <ResponsiveStrip />
      <Preview />
      <TwoColumnsSection />
      <Banner />
      <TestimonialSection />
      <TrustPilotCarousel />
      <div className="bg-dark-gray-blue text-white px-6 py-10 md:px-20 md:py-16 text-center rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-sm md:text-lg mb-6">
          Join thousands of professionals leveraging our platform to achieve their goals. Start your journey with us today!
        </p>
        <div className="flex justify-center">
          <a
            href="/user/register"
            className="inline-block rounded-lg bg-white text-blue-600 px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-md"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}