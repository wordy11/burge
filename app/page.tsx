import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from 'app/ui/fonts';
import ResponsiveStrip from './ui/home-strip';
import Preview from './ui/dashboard-preview';
import TwoColumnsSection from './ui/two-sections';
import Banner from './ui/banner';
import TestimonialSection from './ui/testimonials';

export default function Page() {
  return (
    <div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-10 rounded-lg px-8 py-18 md:w-2/5 md:px-20 text-center">
          <p className={`${lusitana.className} antialiased text-5xl text-white md:text-5xl md:leading-normal`}>
            Make your life easier with crypto
          </p>
          {/* Centering the Login Button */}
          <div className="flex justify-center">
            <Link
              href="/login"
              className="flex gap-5 items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/logo.jpeg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero.png"
            width={560}
            height={600}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      <ResponsiveStrip />
      <Preview />
      <TwoColumnsSection />
      <Banner />
      <TestimonialSection />
    </div>
  );
}
