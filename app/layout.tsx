import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import {Providers} from "./providers";
import NavbarComponent from './ui/navbar';
import Footer from './ui/footer';
import TradingViewComponent from './ui/tickertape';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-dark-gray-blue`}>
        <Providers>
          <NavbarComponent />
          <TradingViewComponent />
          <div className="lg:ml-20 lg:mr-20 md:ml-10 md:mr-10 sm:ml-5 sm:mr-5 space-4 bg-dark-gray-blue">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
