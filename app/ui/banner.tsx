import { FaCheckCircle, FaBolt, FaDollarSign } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative py-10 text-white">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-semibold mb-10 sm:text-3xl">Services we provide</h1>
        
        {/* Feature Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:gap-16 gap-8 mb-12">
          {/* Best Prices */}
          <div className="flex items-center space-x-4">
            <FaCheckCircle className="w-12 h-12 text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Best Prices</h3>
              <p className="text-sm sm:text-base">Get the most competitive prices in the market.</p>
            </div>
          </div>

          {/* Fully Automated */}
          <div className="flex items-center space-x-4">
            <FaBolt className="w-12 h-12 text-yellow-400" />
            <div>
              <h3 className="text-xl font-semibold">Fully Automated</h3>
              <p className="text-sm sm:text-base">Enjoy a seamless and hands-off experience.</p>
            </div>
          </div>

          {/* No Trading Fees */}
          <div className="flex items-center space-x-4">
            <FaDollarSign className="w-12 h-12 text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold">No Trading Fees</h3>
              <p className="text-sm sm:text-base">Trade without any additional fees.</p>
            </div>
          </div>
        </div>

        {/* Cards Section (commented out) */}
        {/* <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8"> */}
          {/* Card 1 */}
          {/* <div className="transform transition-transform duration-500 hover:scale-105 p-6 bg-white text-black rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Card 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Card Title 1</h3>
            <p className="mt-2">This is a description for card 1. The card has a nice hover effect.</p>
          </div> */}

          {/* Card 2 */}
          {/* <div className="transform transition-transform duration-500 hover:scale-105 p-6 bg-white text-black rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Card 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Card Title 2</h3>
            <p className="mt-2">This is a description for card 2. It also has a nice hover effect.</p>
          </div> */}

          {/* Card 3 */}
          {/* <div className="transform transition-transform duration-500 hover:scale-105 p-6 bg-white text-black rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300" alt="Card 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Card Title 3</h3>
            <p className="mt-2">This is a description for card 3. It has the same hover effect as the others.</p>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Banner;
