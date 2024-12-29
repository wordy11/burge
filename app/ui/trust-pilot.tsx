import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Hardcoded reviews
const fakeReviews = [
  { name: "Alice Johnson", rating: 4, review: "Great experience!", date: "December 18, 2024" },
  { name: "Bob Smith", rating: 4, review: "Solid returns and good customer support.", date: "November 30, 2024" },
  { name: "Carol Davis", rating: 4, review: "Made great gains using this platform.", date: "October 15, 2024" },
  { name: "David Lee", rating: 5, review: "I love how simple it is to use the service.", date: "September 22, 2024" },
  { name: "Eva White", rating: 3, review: "It works well, but I wish it had more features.", date: "August 30, 2024" },
  { name: "Frank Moore", rating: 4, review: "The customer support is amazing. Highly recommended.", date: "July 12, 2024" },
  { name: "Grace Brown", rating: 5, review: "Fantastic results and easy to navigate.", date: "June 18, 2024" },
  { name: "Hannah Green", rating: 4, review: "Very reliable platform with fast transactions.", date: "May 20, 2024" },
  { name: "Irene Clark", rating: 5, review: "Exceeded my expectations. Would use again.", date: "April 25, 2024" },
  { name: "James Allen", rating: 3, review: "It's good, but could use some improvements.", date: "March 11, 2024" },
  { name: "Katie Turner", rating: 4, review: "Easy to use and very reliable.", date: "February 7, 2024" },
  { name: "Leo Scott", rating: 4, review: "Excellent platform with great customer service.", date: "January 3, 2024" },
  { name: "Megan Harris", rating: 5, review: "Fantastic service, easy to understand.", date: "December 12, 2023" },
  { name: "Nancy Walker", rating: 3, review: "A bit slow at times, but works fine.", date: "November 21, 2023" },
  { name: "Oscar King", rating: 5, review: "Perfect, couldn't ask for anything better!", date: "October 15, 2023" },
  { name: "Paul Young", rating: 4, review: "Great experience, would recommend.", date: "September 30, 2023" },
  { name: "Quincy Adams", rating: 4, review: "Great overall, but could use some improvements.", date: "August 23, 2023" },
  { name: "Riley Martinez", rating: 3, review: "The service is decent but has room to grow.", date: "July 10, 2023" },
  { name: "Samantha Rodriguez", rating: 5, review: "Amazing service. I am extremely satisfied.", date: "June 5, 2023" },
  { name: "Tyler Lee", rating: 4, review: "Really happy with the results.", date: "May 14, 2023" },
  { name: "Ursula Davis", rating: 4, review: "Overall great experience, no major issues.", date: "April 27, 2023" },
  { name: "Victor Brown", rating: 5, review: "Highly recommend this platform to anyone.", date: "March 16, 2023" },
  { name: "Willow Clark", rating: 4, review: "Everything works as expected, easy to use.", date: "February 11, 2023" },
  { name: "Xander Miller", rating: 5, review: "The best platform I've used for this type of service.", date: "January 8, 2023" },
  { name: "Yasmine Perez", rating: 4, review: "Good service, but there is room for improvement.", date: "December 25, 2022" },
  { name: "Zachary Wilson", rating: 4, review: "Excellent service overall.", date: "November 16, 2022" },
  { name: "Adam Garcia", rating: 3, review: "It's fine, but could be more user-friendly.", date: "October 10, 2022" },
  { name: "Bella Walker", rating: 5, review: "Perfect service, no complaints.", date: "September 1, 2022" },
  { name: "Chris Thompson", rating: 5, review: "The platform is seamless and easy to use.", date: "August 18, 2022" },
  { name: "Diana Moore", rating: 4, review: "Great platform, but some minor bugs.", date: "July 7, 2022" },
];

const getStars = (rating: number) => {
  const stars = [];
  let boxColor = "bg-gray-200"; // Default box color
  
  if (rating >= 4) {
    boxColor = "bg-green-500";
  } else if (rating === 3) {
    boxColor = "bg-yellow-500";
  } else {
    boxColor = "bg-red-500";
  }

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={`inline-flex items-center justify-center w-8 h-8 rounded-md text-2xl ${
          i < rating ? `${boxColor} text-white` : "bg-gray-200 text-gray-500"
        }`}
      >
        {i < rating ? "★" : "☆"}
      </span>
    );
  }
  return stars;
};

export default function TrustPilotCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedReviews = [];
  
  // Chunk reviews into sets of 1 or 3 based on screen size
  for (let i = 0; i < fakeReviews.length; i += isMobile ? 1 : 3) {
    chunkedReviews.push(fakeReviews.slice(i, i + (isMobile ? 1 : 3)));
  }

  return (
    <div className="bg-dark-gray-blue py-8">
      <h2 className="text-center text-2xl sm:text-3xl text-white font-semibold mb-6">Trustpilot Reviews</h2>
      <div className="container mx-auto px-4">
        <Carousel
          autoPlay
          infiniteLoop
          thumbWidth={20}
          stopOnHover={true}
          showThumbs={false} // Hide thumbs (circle indicators)
          showStatus={false} // Optionally hide status
          interval={3000}
          className="relative"
        >
          {chunkedReviews.map((reviews, index) => (
            <div key={index} className="flex justify-around p-6 bg-dark-gray-blue rounded-lg shadow-md">
              {reviews.map((review, idx) => (
                <div key={idx} className="max-w-xs p-4 bg-white rounded-lg shadow-sm text-center justify-center">
                  <div className="text-lg font-semibold mb-2">{review.name}</div>
                  <div className="flex space-x-1 mb-2 justify-center">
                    {getStars(review.rating)}
                  </div>
                  <p className="text-dark-gray-blue mb-4">{review.review}</p>
                  <div className="text-sm text-dark-gray-blue">Posted on {review.date}</div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
