"use client";
import Image from "next/image";

export default function MeetOurTeamSection() {
  return (
    <div className="w-full py-16 bg-dark-gray-blue">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading Section */}
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
          Meet Our Amazing Team
        </h2>
        <p className="text-lg sm:text-xl text-white mb-12 mx-4 sm:mx-8">
          Our company was founded in 2018. We work daily to become better, and we are ready to share best practices.
        </p>

        {/* Large Image Section */}
        <div className="relative h-80 sm:h-96 lg:h-[500px] mb-12 mt-8 sm:mt-0 mx-4 sm:mx-8">
          {/* Desktop Image */}
          <Image
            src="/team.jpg" // Replace with the actual path to your image
            alt="Team Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg hidden md:block"
          />

          {/* Mobile Image */}
          <Image
            src="/team.jpg"
            alt="Team Banner"
            width={500}
            height={600}
            className="block md:hidden mx-auto"
          />
        </div>

        {/* Team Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 sm:gap-8 px-4 sm:px-8">
          {/* Team Member 1 */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-4">
            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl text-center">
              <Image
                src="/ceo.png"
                alt="Team Member 1"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto mb-6 transition-transform duration-300 transform hover:scale-110"
              />
              <p className="text-2xl font-semibold mb-2 text-white">John Doe</p>
              <p className="text-lg text-blue-600 mb-4">CEO & Founder</p>
              <p className="text-sm sm:text-base text-gray-600">
                John is the visionary behind our platform, leading the team with a passion for innovation and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-4">
            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl text-center">
              <Image
                src="/11p.png"
                alt="Team Member 2"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto mb-6 transition-transform duration-300 transform hover:scale-110"
              />
              <p className="text-2xl font-semibold mb-2 text-white">Jane Smith</p>
              <p className="text-lg text-blue-600 mb-4">COO & Operations</p>
              <p className="text-sm sm:text-base text-gray-600">
                Jane ensures the day-to-day operations run smoothly, working tirelessly to optimize our services and customer experience.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-4">
            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl text-center">
              <Image
                src="/djp.jpg"
                alt="Team Member 3"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto mb-6 transition-transform duration-300 transform hover:scale-110"
              />
              <p className="text-2xl font-semibold mb-2 text-white">Michael Lee</p>
              <p className="text-lg text-blue-600 mb-4">CTO & Tech Lead</p>
              <p className="text-sm sm:text-base text-gray-600">
                Michael is the tech guru behind our platform, overseeing the development and ensuring our technology is cutting-edge.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}

          {/* Team Member 5 */}
          

          {/* Team Member 6 */}
          <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-4">
            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl text-center">
              <Image
                src="/amanda.png"
                alt="Team Member 6"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto mb-6 transition-transform duration-300 transform hover:scale-110"
              />
              <p className="text-2xl font-semibold mb-2 text-white">Alice Cooper</p>
              <p className="text-lg text-blue-600 mb-4">Customer Support Lead</p>
              <p className="text-sm sm:text-base text-gray-600">
                Alice is dedicated to providing excellent customer support, ensuring that our users always feel heard and valued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
