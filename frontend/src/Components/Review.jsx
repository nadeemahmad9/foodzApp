import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const reviewdata  = [
     {
    name: "Aarav Mehta",
    title: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review: "Absolutely blown away by the speed and quality of delivery! I ordered a full meal on a rainy evening expecting delays, but it arrived in just 20 minutes. The flavors were rich, portions generous. Highly recommend who values consistency and quality."
     },
  {
    name: "Sneha Kapoor",
    title: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    review: "The healthy meal options are a big plus for someone who tracks macros like me. I especially loved the quinoa bowl with grilled veggies. The app interface is seamless and makes reordering very convenient. Delivery was prompt.",
  },
  {
    name: "Rahul Singh",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    review: "My go-to app for those long nights of coding. It’s reliable, efficient, and has a vast range of cuisines to choose from. The loyalty program is a great bonus too – I’ve redeemed several discounts just by being a regular customer. Hats off to the team!.",
  },
  {
    name: "Priya Sharma",
    title: "College Student",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    review: "Budget-friendly and tasty – two things that matter most to students. Even during peak hours like exam week, the delivery is surprisingly quick. I appreciate the customization options for spice levels and toppings too."
  },
  {
    name: "Karan Patel",
    title: "Travel Vlogger",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    rating: 5,
    review: "As someone who is constantly on the move, I rely on food delivery apps often. This one stands out for remembering my favorite dishes and suggesting great local specials. Their support team also resolved an issue with a missing item within minutes.",
  },
];

const Review = () => {
  const [centerIndex, setCenterIndex] = useState(0);
const settings = {
  dots: true,
  arrows: false, 
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2500,
  afterChange: (current) => {
    setCenterIndex(current);
  },
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1024, // for screens less than 1024px
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 916, // for screens less than 1024px
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 640, // for screens less than 640px
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
       {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
       {
        breakpoint: 384,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
  ],
};
  return (
    

 <section className="relative w-full max-w-xxs max-w-xs sm:max-w-[70vw] md:max-w-[70vw] lg:max-w-[90vw] mx-auto bg-white py-16 px-4">
  <motion.img
    src="/assets/reviewpizza.svg"
    className="absolute top-30 left-10 w-24 opacity-90 -rotate-23"
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.img
    src="/assets/reviewburger.svg"
    className="absolute top-1/4 right-5 w-25 opacity-90 -rotate-20"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.img
    src="/assets/reviewjuice.svg"
    className="absolute bottom-20 left-0 w-24 opacity-90 rotate-20"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.img
    src="/assets/reviewfries.svg"
    className="absolute bottom-10 right-0 w-22 opacity-90 -rotate-6"
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
  />
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-red-600 mb-4 animate-bounce">
     Real Stories from Our Foodies
    </h2>
    <div className="max-w-6xl mx-auto px-4 w-full">
      <Slider {...settings}>
        {reviewdata.map((data, index) => (
          <div key={index} className="px-2">
            <div
              className={`mx-auto w-full sm:max-w-[90%] md:max-w-md lg:max-w-sm rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                index === centerIndex
                  ? "bg-red-600 text-white font-100 scale-105 "
                  : "bg-red-100 text-red-800 font-100 scale-95"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={data.image}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={data.name}
                />
                <div>
                  <h3 className="font-bold">{data.name}</h3>
                </div>
              </div>
              <p className="mb-4 text-sm">{data.review}</p>
              <div className="flex justify-center">
                <div className="flex items-center gap-1 text-lg">
                  {"★".repeat(data.rating)}
                  {"☆".repeat(5 - data.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

    );
}
export default Review;