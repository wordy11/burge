import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
      <Image
        src="/logo.jpeg"
        width={160}
        height={160}
        // className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      {/* <p className="text-[46px]">FGT</p> */}
    </div>
  );
}
