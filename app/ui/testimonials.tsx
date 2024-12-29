"use client";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <div className="w-full py-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-white">Testimonials</h2>
        <p className="text-4xl sm:text-6xl font-semibold mb-10 text-blue-500">What our investors are saying</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 px-4 sm:px-8">
          {/* Testimonial 1 */}
          <div className="transform transition-transform duration-500 hover:scale-105">
            <Card className="shadow-lg p-6 bg-white rounded-lg h-full">
              <CardBody className="text-center">
                <Image
                  src="/p3.png"
                  alt="Client 1"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg sm:text-xl font-semibold mb-2">John Samuel</p>
                <p className="text-gray-500 text-sm sm:text-base mb-4">This platform has completely transformed the way I invest. The process is so simple, and I can track everything easily. Highly recommend!</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {/* Rating Stars */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      <path d="M12 17.77l-6.18 3.24 1.64-7.03-5.43-4.73 7.1-.61L12 2l2.87 6.04 7.1.61-5.43 4.73 1.64 7.03L12 17.77z"/>
                    </svg>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Testimonial 2 */}
          <div className="transform transition-transform duration-500 hover:scale-105">
            <Card className="shadow-lg p-6 bg-white rounded-lg h-full">
              <CardBody className="text-center">
                <Image
                  src="/p2.png"
                  alt="Client 2"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg sm:text-xl font-semibold mb-2">Jane Smith</p>
                <p className="text-gray-500 text-sm sm:text-base mb-4">I was able to grow my crypto portfolio by 30% in just a few months. The team is very helpful and the platform is user-friendly!</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {/* Rating Stars */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      <path d="M12 17.77l-6.18 3.24 1.64-7.03-5.43-4.73 7.1-.61L12 2l2.87 6.04 7.1.61-5.43 4.73 1.64 7.03L12 17.77z"/>
                    </svg>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Testimonial 3 */}
          <div className="transform transition-transform duration-500 hover:scale-105">
            <Card className="shadow-lg p-6 bg-white rounded-lg h-full">
              <CardBody className="text-center">
                <Image
                  src="/p3.png"
                  alt="Client 3"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg sm:text-xl font-semibold mb-2">William Jones</p>
                <p className="text-gray-500 text-sm sm:text-base mb-4">The best decision I made was to start investing through this platform. It’s intuitive and the returns are impressive. A must-try!</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {/* Rating Stars */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      <path d="M12 17.77l-6.18 3.24 1.64-7.03-5.43-4.73 7.1-.61L12 2l2.87 6.04 7.1.61-5.43 4.73 1.64 7.03L12 17.77z"/>
                    </svg>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Repeat the same for other testimonials */}
        </div>
      </div>
    </div>
  );
}
