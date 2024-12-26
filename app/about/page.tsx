// pages/about.tsx
import React from 'react';
import ResponsiveStrip from '../ui/home-strip';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 bg-dark-gray-blue">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">
          About Us
        </h1>
        {/* Paragraph */}
        <p className="mt-4 text-lg sm:text-xl text-white">
          We are a leading crypto investment platform, empowering individuals and institutions to securely grow their wealth through innovative blockchain-based investment strategies. Since our inception in 2018, we've been dedicated to providing trusted and professional services to our clients.
        </p>

        {/* Image Section */}
        <div className="mt-12 mb-12">
          <img
            src="/team3.png" // Replace with the actual image path
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Mission Section */}
        <div className="mt-12 bg-dark-gray-blue">
          <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
          <p className="mt-4 text-lg text-white">
            Our mission is to revolutionize the world of investment by providing secure and profitable solutions through cutting-edge cryptocurrency technologies. We aim to make investing in crypto simple, safe, and accessible for everyone.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mt-12 bg-dark-gray-blue">
          <h2 className="text-3xl font-semibold text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div className="text-center">
              <div className="text-4xl text-blue-500">🔒</div>
              <h3 className="mt-4 text-xl font-semibold text-white">Security</h3>
              <p className="mt-2 text-white">We prioritize the security of our users’ investments and data with the latest encryption technologies and secure wallets.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-500">📈</div>
              <h3 className="mt-4 text-xl font-semibold text-white">Growth</h3>
              <p className="mt-2 text-white">We believe in continuous growth. We provide strategies that maximize returns and minimize risks for our users.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-yellow-500">🌍</div>
              <h3 className="mt-4 text-xl font-semibold text-white">Innovation</h3>
              <p className="mt-2 text-white">We are always ahead of the curve in the rapidly evolving crypto market, leveraging new technologies and strategies to deliver optimal results.</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <ResponsiveStrip />

        {/* Video Section */}
        <div className="mt-16 bg-dark-gray-blue">
        <h2 className="text-3xl font-semibold text-white">Learn More About Crypto Investment</h2>
        <p className="mt-4 text-lg text-white">
            Watch our video below to learn more about how crypto investment platform works and why we're the trusted choice for investors.
        </p>
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/LGHsNaIv5os" // Replace with your video URL
                title="Crypto Investment Platform"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </div>
        </div>
        </div>


        {/* Call to Action Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-white bg-dark-gray-blue">Get Started Today</h2>
          <p className="mt-4 text-lg text-white">
            Ready to start your crypto investment journey? Sign up now and take control of your financial future with our trusted platform.
          </p>
          <div className="mt-6">
            <a
              href="/signup"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300"
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
