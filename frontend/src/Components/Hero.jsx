// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//     {
//         id: 1,
//         type: "video",
//         src: "/assets/food-video.mp4",
//     },
//     {
//         id: 2,
//         type: "content",
//         heading: "Special Items",
//         items: ["Pizza", "Sushi", "Burger"],
//         bg: "/assets/Foodzy.png",
//     },
//     {
//         id: 3,
//         type: "content",
//         heading: "Most Loved Items",
//         items: ["Tacos", "Noodles", "Ice Cream"],
//         bg: "/assets/Foodzy.png",
//     },
//     {
//         id: 4,
//         type: "content",
//         heading: "Pet Foods",
//         items: ["Dog Biscuits", "Cat Tuna", "Bird Seeds"],
//         bg: "/assets/Foodzy.png",
//     },
//     {
//         id: 5,
//         type: "content",
//         heading: "Special Offers",
//         items: ["Buy 1 Get 1 Free", "50% Off", "Free Delivery"],
//         bg: "/assets/Foodzy.png",
//     },
// ];

// const Hero = () => {
//     const [index, setIndex] = useState(0);
//     const currentSlide = slides[index];

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIndex((prev) => (prev + 1) % slides.length);
//         }, 5000);
//         return () => clearTimeout(timer);
//     }, [index]);

//     const goToSlide = (i) => setIndex(i);

//     return (
//         <div className="relative w-full max-w-7xl mx-auto h-135 overflow-hidden rounded-4xl shadow-lg bg-white ">

//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={index}
//                     className="w-full h-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     {currentSlide.type === "video" ? (
//                         <video
//                             src={currentSlide.src}
//                             autoPlay
//                             muted
//                             loop
//                             className="w-full h-full object-cover rounded-xl"
//                         />
//                     ) : (
//                         <div
//                             className="w-full h-full flex flex-col items-center justify-center h-full text-center p-6 bg-cover bg-center rounded-xl"
//                             style={{
//                                 backgroundImage: `url(${currentSlide.bg})`,
//                             }}
//                         >
//                             {/* <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
//                                 {currentSlide.heading}
//                             </h2> */}
//                             {/* <ul className=" flex flex-row items-center justify-center">
//                                 {currentSlide.items.map((item, i) => (
//                                     <li
//                                         key={i}
//                                         className=" text-lg text-gray-700 bg-orange-100 px-4 py-2 rounded-full"
//                                     >
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul> */}
//                         </div>
//                     )}
//                 </motion.div>
//             </AnimatePresence>

//             {/* Dot Navigation */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {slides.map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => goToSlide(i)}
//                         className={`w-3 h-3 rounded-full ${i === index ? "bg-orange-500 scale-125" : "bg-gray-300"
//                             } transition-all duration-300`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;


// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//     {
//         id: 1,
//         type: "video",
//         src: "/assets/food-video.mp4",
//     },
//     {
//         id: 2,
//         type: "content",
//         heading: "Order Now",
//         items: ["Pizza", "Sushi", "Burger"],
//         bg: "/assets/Foodzy.png",
//     },
//     {
//         id: 3,
//         type: "content",
//         heading: "Order Now",
//         items: ["Tacos", "Noodles", "Ice Cream"],
//         bg: "/assets/Foodzy.png",
//     },
//     {
//         id: 4,
//         type: "content",
//         heading: "Order Now",
//         items: ["Dog Biscuits", "Cat Tuna", "Bird Seeds"],
//         bg: "/assets/Foodzy.png",
//     },
//     {
//         id: 5,
//         type: "content",
//         heading: "Order Now",
//         items: ["Buy 1 Get 1 Free", "50% Off", "Free Delivery"],
//         bg: "/assets/Foodzy.png",
//     },
// ];

// const Hero = () => {
//     const [index, setIndex] = useState(0);
//     const currentSlide = slides[index];

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIndex((prev) => (prev + 1) % slides.length);
//         }, 5000);
//         return () => clearTimeout(timer);
//     }, [index]);

//     const goToSlide = (i) => setIndex(i);

//     return (
//         <div className="relative w-full  mx-auto h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-4xl shadow-lg bg-white">

//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={index}
//                     className="w-full h-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >

//                     {currentSlide.type === "video" ? (
//                         <video
//                             src={currentSlide.src}
//                             autoPlay
//                             muted
//                             loop
//                             className="w-full h-full object-cover rounded-xl"
//                         />

//                     ) : (
//                         <div
//                             className="w-full h-full  items-center justify-center text-center p-4 sm:p-6 bg-cover bg-center rounded-4xl"
//                             style={{
//                                 backgroundImage: `url(${currentSlide.bg})`,
//                             }}
//                         >
//                             <button className="text-2xl md:text-3xl mt-80 font-bold bg-red-500 mb-4  text-white rounded-4xl p-2 ">
//                                 {currentSlide.heading}
//                             </button>
//                             {/* <ul className=" flex flex-row items-center justify-center">
//                                 {currentSlide.items.map((item, i) => (
//                                     <li
//                                         key={i}
//                                         className=" text-lg text-gray-700 bg-orange-100 px-4 py-2 rounded-full"
//                                     >
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul> */}
//                         </div>
//                     )}
//                 </motion.div>
//             </AnimatePresence>

//             {/* Dot Navigation */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {slides.map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => goToSlide(i)}
//                         className={`w-3 h-3 rounded-full ${i === index ? "bg-orange-500 scale-125" : "bg-gray-300"
//                             } transition-all duration-300`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Play, Heart, Gift, Star } from 'lucide-react';

// const Hero = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(true);

//     const slides = [
//         {
//             id: 1,
//             type: 'video',
//             title: 'Delicious Food Delivered Fast',
//             subtitle: 'Your favorite meals at your doorstep',
//             content: 'video'
//         },
//         {
//             id: 2,
//             type: 'special',
//             title: 'Special Items',
//             subtitle: 'Handpicked delicacies just for you',
//             items: [
//                 { name: 'Truffle Pasta', price: '₹450', image: '🍝', rating: 4.8 },
//                 { name: 'Wagyu Burger', price: '₹650', image: '🍔', rating: 4.9 },
//                 { name: 'Chicken Biryani', price: '₹280', image: '🍛', rating: 4.8 }
//             ]
//         },
//         {
//             id: 3,
//             type: 'loved',
//             title: 'Most Loved Items',
//             subtitle: 'Customer favorites that never disappoint',
//             items: [
//                 { name: 'Margherita Pizza', price: '₹320', image: '🍕', rating: 4.6, orders: '10k+' },
//                 { name: 'Chicken Biryani', price: '₹280', image: '🍛', rating: 4.8, orders: '15k+' },
//                 { name: 'Chocolate Cake', price: '₹180', image: '🍰', rating: 4.5, orders: '8k+' }
//             ]
//         },
//         {
//             id: 4,
//             type: 'pets',
//             title: 'Pet Food',
//             subtitle: 'Premium nutrition for your furry friends',
//             items: [
//                 { name: 'Royal Canin', price: '₹1200', image: '🐕', rating: 4.7 },
//                 { name: 'Whiskas Cat Food', price: '₹450', image: '🐱', rating: 4.6 },
//                 { name: 'Pet Treats', price: '₹280', image: '🦴', rating: 4.8 }
//             ]
//         },
//         {
//             id: 5,
//             type: 'offer',
//             title: 'Special Offers',
//             subtitle: 'Limited time deals you can\'t miss',
//             items: [
//                 { name: 'Combo Meal', price: '₹199', originalPrice: '₹350', image: '🍽️', discount: '43%', rating: 4.7 },
//                 { name: 'Pizza + Coke', price: '₹299', originalPrice: '₹450', image: '🍕', discount: '34%', rating: 4.5 },
//                 { name: 'Family Pack', price: '₹799', originalPrice: '₹1200', image: '🥘', discount: '33%', rating: 4.6 }
//             ]
//         }
//     ];

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 6000);

//         return () => clearInterval(timer);
//     }, [slides.length]);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     const VideoSlide = () => (
//         <div className="relative h-[600px] bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center overflow-hidden rounded-4xl">
//             <div className="absolute inset-0 bg-black/20"></div>
//             <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative z-10 text-center text-white px-8"
//             >
//                 <motion.div
//                     animate={{ rotate: [0, 360] }}
//                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                     className="w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
//                 >
//                     <Play className="w-12 h-12 text-white ml-2" />
//                 </motion.div>
//                 <h1 className="text-5xl font-bold mb-4">Delicious Food Delivered Fast</h1>
//                 <p className="text-xl mb-8 opacity-90">Your favorite meals at your doorstep</p>
//                 <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="text-6xl mb-4"
//                 >
//                     🍕🍔🍝
//                 </motion.div>
//             </motion.div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//         </div>
//     );

//     const ItemCard = ({ item, type }) => (

//         <motion.div
//             whileHover={{ scale: 1.05, y: -5 }}
//             transition={{ duration: 0.2 }}
//             className="bg-white rounded-2xl shadow-xl p-6 min-w-[280px]"
//         >
//             <div className="text-6xl text-center mb-4">{item.image}</div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
//             <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center space-x-1">
//                     <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                     <span className="text-sm text-gray-600">{item.rating}</span>
//                     {item.orders && <span className="text-xs text-gray-500">({item.orders} orders)</span>}
//                 </div>
//                 {type === 'offer' && (
//                     <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                         {item.discount} OFF
//                     </span>
//                 )}
//             </div>
//             <div className="flex items-center justify-between">
//                 <div>
//                     <span className="text-2xl font-bold text-green-600">{item.price}</span>
//                     {item.originalPrice && (
//                         <span className="text-sm text-gray-500 line-through ml-2">{item.originalPrice}</span>
//                     )}
//                 </div>
//             </div>
//         </motion.div>
//     );

//     const ContentSlide = ({ slide }) => {
//         const getGradient = () => {
//             switch (slide.type) {
//                 case 'special': return 'from-purple-600 to-blue-600';
//                 case 'loved': return 'from-pink-600 to-red-600';
//                 case 'pets': return 'from-green-600 to-teal-600';
//                 case 'offer': return 'from-yellow-600 to-orange-600';
//                 default: return 'from-gray-600 to-gray-800';
//             }
//         };

//         const getIcon = () => {
//             switch (slide.type) {
//                 case 'special': return <Gift className="w-8 h-8" />;
//                 case 'loved': return <Heart className="w-8 h-8" />;
//                 case 'pets': return <span className="text-3xl">🐾</span>;
//                 case 'offer': return <span className="text-3xl">🎉</span>;
//                 default: return null;
//             }
//         };

//         return (
//             <div className={`relative h-[600px] bg-gradient-to-br ${getGradient()} overflow-hidden rounded-4xl`}>
//                 <div className="absolute inset-0 bg-black/10"></div>
//                 <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16">
//                     <motion.div
//                         initial={{ x: -100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-white mb-8"
//                     >
//                         <div className="flex items-center space-x-3 mb-4">
//                             {getIcon()}
//                             <h2 className="text-4xl lg:text-6xl font-bold">{slide.title}</h2>
//                         </div>
//                         <p className="text-xl lg:text-2xl opacity-90">{slide.subtitle}</p>
//                     </motion.div>

//                     <motion.div
//                         initial={{ y: 50, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 0.3 }}
//                         className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
//                     >
//                         {slide.items.map((item, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ scale: 0 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ duration: 0.5, delay: 0.1 * index }}
//                             >
//                                 <ItemCard item={item} type={slide.type} />
//                             </motion.div>
//                         ))}
//                     </motion.div>

//                     <motion.button
//                         initial={{ y: 50, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 0.6 }}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="mt-8 bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 self-start"
//                     >
//                         Order Now
//                     </motion.button>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="relative h-screen overflow-hidden">
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={currentSlide}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute inset-0"
//                 >
//                     {slides[currentSlide].type === 'video' ? (
//                         <VideoSlide />
//                     ) : (
//                         <ContentSlide slide={slides[currentSlide]} />
//                     )}
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Arrows */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
//             >
//                 <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
//             >
//                 <ChevronRight className="w-6 h-6" />
//             </button>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };



// export default Hero;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Hero = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isAutoPlay, setIsAutoPlay] = useState(true);

//     const slides = [
//         {
//             id: 1,
//             title: "FRENCH BREAK CHEESY PIZZA",
//             description: "Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she showing know.",
//             price: "$58",
//             discount: "50%",
//             image: "/assets/pizza.png",
//             type: "autoplay",
//             hasVideo: true
//         },
//         {
//             id: 2,
//             title: "SPECIAL ITALIAN SUPREME",
//             description: "Our chef's special creation with premium imported ingredients. Handcrafted with love and traditional Italian techniques.",
//             price: "$65",
//             discount: "40%",
//             image: "⭐",
//             type: "special",
//             hasVideo: false
//         },
//         {
//             id: 3,
//             title: "MOST LOVED PEPPERONI",
//             description: "Customer's favorite choice! Classic pepperoni with extra cheese that has won hearts of thousands of food lovers.",
//             price: "$52",
//             discount: "45%",
//             image: "❤️",
//             type: "loved",
//             hasVideo: false
//         },
//         {
//             id: 4,
//             title: "SPECIAL OFFER COMBO",
//             description: "Limited time offer! Get our signature pizza with amazing discount. Don't miss this incredible deal for food enthusiasts.",
//             price: "$48",
//             discount: "60%",
//             image: "🎁",
//             type: "offer",
//             hasVideo: false
//         }
//     ];

//     // Auto-play functionality
//     useEffect(() => {
//         if (!isAutoPlay) return;

//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 4000);

//         return () => clearInterval(interval);
//     }, [isAutoPlay, slides.length]);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     // Animation variants
//     const textVariants = {
//         hidden: {
//             y: -100,
//             opacity: 0
//         },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.8,
//                 ease: "easeOut",
//                 staggerChildren: 0.2
//             }
//         },
//         exit: {
//             y: 100,
//             opacity: 0,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeIn"
//             }
//         }
//     };

//     const imageVariants = {
//         hidden: {
//             y: -150,
//             opacity: 0,
//             scale: 0.8,
//             rotate: -10
//         },
//         visible: {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 duration: 1,
//                 ease: "easeOut",
//                 delay: 0.3
//             }
//         },
//         exit: {
//             y: 150,
//             opacity: 0,
//             scale: 0.8,
//             rotate: 10,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeIn"
//             }
//         }
//     };

//     const childVariants = {
//         hidden: { y: -50, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return (
//         <div
//             className="relative w-full h-[70vh] overflow-hidden rounded-4xl"
//             onMouseEnter={() => setIsAutoPlay(false)}
//             onMouseLeave={() => setIsAutoPlay(true)}
//             style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1662743086910-38419bbf7f34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 backgroundImage: `url('https://images.unsplash.com/photo-1626970188409-f71e532a6eaf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}
//         >
//             {/* Dark Overlay for better text readability */}
//             <div className="absolute inset-0  bg-opacity-50 backdrop-blur-[1px]"></div>

//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//                 <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30"
//                     style={{
//                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
//                         backgroundSize: '40px 40px'
//                     }}>
//                 </div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20">
//                 <div className="text-4xl md:text-5xl animate-bounce">🥬</div>
//             </div>
//             <div className="absolute bottom-10 right-10 w-12 h-12 md:w-16 md:h-16">
//                 <div className="text-2xl md:text-3xl animate-pulse">🌶️</div>
//             </div>
//             <div className="absolute top-1/3 right-20 w-10 h-10 md:w-12 md:h-12">
//                 <div className="text-xl md:text-2xl animate-bounce delay-1000">🧅</div>
//             </div>
//             <div className="absolute top-1/5 right-24 w-10 h-10 md:w-12 md:h-12">
//                 <div className="text-xl md:text-2xl animate-bounce delay-1000">🧅</div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 h-full flex items-center">
//                 <div className="container mx-auto px-4 md:px-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">

//                         {/* Text Content */}
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={`text-${currentSlide}`}
//                                 variants={textVariants}
//                                 initial="hidden"
//                                 animate="visible"
//                                 exit="exit"
//                                 className="text-white space-y-4 md:space-y-6 lg:space-y-8 order-1 lg:order-1"
//                             >
//                                 {/* Purchase Info */}
//                                 <motion.div variants={childVariants}>
//                                     <div className="inline-block bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-white border-opacity-20">
//                                         <span className="text-xs md:text-sm font-medium tracking-wider">
//                                             PURCHASE TODAY. JUST {slides[currentSlide].price}
//                                         </span>
//                                     </div>
//                                 </motion.div>

//                                 {/* Title */}
//                                 <motion.h1
//                                     variants={childVariants}
//                                     className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wide"
//                                 >
//                                     {slides[currentSlide].title}
//                                 </motion.h1>

//                                 {/* Description */}
//                                 <motion.p
//                                     variants={childVariants}
//                                     className="text-sm md:text-base lg:text-lg text-white text-opacity-90 leading-relaxed max-w-md lg:max-w-lg"
//                                 >
//                                     {slides[currentSlide].description}
//                                 </motion.p>

//                                 {/* Order Button */}
//                                 <motion.div variants={childVariants}>
//                                     <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
//                                         ORDER NOW
//                                     </button>
//                                 </motion.div>
//                             </motion.div>
//                         </AnimatePresence>

//                         {/* Image Content */}
//                         <div className="relative order-2 lg:order-2 flex justify-center items-center">
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={`image-${currentSlide}`}
//                                     variants={imageVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                     exit="exit"
//                                     className="relative"
//                                 >
//                                     {/* Discount Badge */}
//                                     <motion.div
//                                         className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20"
//                                         initial={{ scale: 0, rotate: -180 }}
//                                         animate={{ scale: 1, rotate: 0 }}
//                                         transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
//                                     >
//                                         <div className="bg-yellow-400 text-red-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-white shadow-lg">
//                                             <div className="text-center">
//                                                 <div className="text-lg md:text-xl font-bold leading-none">{slides[currentSlide].discount}</div>
//                                                 <div className="text-xs md:text-sm font-bold leading-none">Off</div>
//                                             </div>
//                                         </div>
//                                     </motion.div>

//                                     {/* Pizza Image with Video Background for first slide */}
//                                     <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px]">
//                                         {/* Video Background for first slide */}
//                                         {slides[currentSlide].hasVideo && (
//                                             <motion.div
//                                                 className="absolute inset-0 rounded-full overflow-hidden z-10"
//                                                 initial={{ opacity: 0 }}
//                                                 animate={{ opacity: 1 }}
//                                                 transition={{ delay: 0.3 }}
//                                             >
//                                                 <video
//                                                     src="/assets/pizza.png" // 🔁 Replace with your video path
//                                                     autoPlay
//                                                     loop
//                                                     muted
//                                                     playsInline
//                                                     className="w-full h-full object-cover"
//                                                 />
//                                             </motion.div>
//                                         )}


//                                         <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl opacity-30 scale-110"></div>
//                                         <div className="relative w-full h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl border-8 border-white border-opacity-20">
//                                             <div className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] filter drop-shadow-lg">
//                                                 {slides[currentSlide].image}
//                                             </div>

//                                             {/* Different effects based on slide type */}
//                                             {slides[currentSlide].type === 'special' && (
//                                                 <motion.div
//                                                     className="absolute inset-0 rounded-full"
//                                                     initial={{ opacity: 0 }}
//                                                     animate={{ opacity: 0.3 }}
//                                                     transition={{ delay: 0.8 }}
//                                                 >
//                                                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
//                                                 </motion.div>
//                                             )}

//                                             {slides[currentSlide].type === 'loved' && (
//                                                 <motion.div
//                                                     className="absolute -top-4 -right-4 text-4xl animate-bounce"
//                                                     initial={{ scale: 0 }}
//                                                     animate={{ scale: 1 }}
//                                                     transition={{ delay: 1, type: "spring" }}
//                                                 >
//                                                     💖
//                                                 </motion.div>
//                                             )}

//                                             {slides[currentSlide].type === 'offer' && (
//                                                 <motion.div
//                                                     className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
//                                                     initial={{ scale: 0, rotate: -10 }}
//                                                     animate={{ scale: 1, rotate: 0 }}
//                                                     transition={{ delay: 1.2, type: "spring" }}
//                                                 >
//                                                     LIMITED
//                                                 </motion.div>
//                                             )}

//                                             {/* Pizza Slice Effect */}
//                                             <motion.div
//                                                 className="absolute top-1/2 left-1/2 w-0 h-0 border-l-[100px] md:border-l-[120px] lg:border-l-[140px] border-l-transparent border-b-[80px] md:border-b-[96px] lg:border-b-[112px] border-b-red-600 transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-20"
//                                                 initial={{ scale: 0, rotate: 0 }}
//                                                 animate={{ scale: 1, rotate: 45 }}
//                                                 transition={{ delay: 1.2, duration: 0.8 }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </AnimatePresence>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Arrows - Always Visible */}
//             <motion.button
//                 onClick={prevSlide}
//                 className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 text-white p-3 md:p-4 rounded-full transition-all duration-300 border-2 border-white border-opacity-30 hover:scale-110 z-20 shadow-lg hover:shadow-xl"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
//             </motion.button>

//             <motion.button
//                 onClick={nextSlide}
//                 className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 text-white p-3 md:p-4 rounded-full transition-all duration-300 border-2 border-white border-opacity-30 hover:scale-110 z-20 shadow-lg hover:shadow-xl"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
//             </motion.button>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide
//                             ? 'bg-white scale-125'
//                             : 'bg-white bg-opacity-40 hover:bg-opacity-70'
//                             }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;








// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Hero = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isAutoPlay, setIsAutoPlay] = useState(true);

//     const slides = [
//         {
//             id: 1,
//             title: "FRENCH BREAK CHEESY PIZZA",
//             description: "Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she showing know.",
//             price: "$58",
//             discount: "50%",
//             image: "/assets/pizza.png",
//             type: "autoplay",
//             hasVideo: true,
//             backgroundImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
//             videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-slowly-preparing-a-pizza-43972-large.mp4",
//             dishes: [
//                 { name: "Margherita", image: "🍕", price: "$45" },
//                 { name: "Pepperoni", image: "🍕", price: "$48" },
//                 { name: "Supreme", image: "🍕", price: "$52" }
//             ]
//         },
//         {
//             id: 2,
//             title: "SPECIAL ITALIAN SUPREME",
//             description: "Our chef's special creation with premium imported ingredients. Handcrafted with love and traditional Italian techniques.",
//             price: "$65",
//             discount: "40%",
//             image: "🍝",
//             type: "special",
//             hasVideo: false,
//             backgroundImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop",
//             dishes: [
//                 { name: "Carbonara", image: "🍝", price: "$38" },
//                 { name: "Bolognese", image: "🍝", price: "$42" },
//                 { name: "Alfredo", image: "🍝", price: "$40" }
//             ]
//         },
//         {
//             id: 3,
//             title: "GOURMET BURGER DELUXE",
//             description: "Customer's favorite choice! Juicy beef patty with premium toppings that has won hearts of thousands of food lovers.",
//             price: "$52",
//             discount: "45%",
//             image: "🍔",
//             type: "loved",
//             hasVideo: false,
//             backgroundImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop",
//             dishes: [
//                 { name: "Classic", image: "🍔", price: "$28" },
//                 { name: "BBQ", image: "🍔", price: "$32" },
//                 { name: "Cheese", image: "🍔", price: "$30" }
//             ]
//         },
//         {
//             id: 4,
//             title: "SPECIAL COMBO OFFER",
//             description: "Limited time offer! Get our signature dishes with amazing discount. Don't miss this incredible deal for food enthusiasts.",
//             price: "$48",
//             discount: "60%",
//             image: "🎁",
//             type: "offer",
//             hasVideo: false,
//             backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
//             dishes: [
//                 { name: "Combo 1", image: "🍟", price: "$25" },
//                 { name: "Combo 2", image: "🥤", price: "$28" },
//                 { name: "Combo 3", image: "🍰", price: "$30" }
//             ]
//         }
//     ];

//     // Auto-play functionality
//     useEffect(() => {
//         if (!isAutoPlay) return;

//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [isAutoPlay, slides.length]);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     const handleDishClick = (dish) => {
//         //
//         alert(`Selected: ${dish.name} - ${dish.price}`);
//     };

//     // Animation variants
//     const textVariants = {
//         hidden: {
//             y: -100,
//             opacity: 0
//         },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.8,
//                 ease: "easeOut",
//                 staggerChildren: 0.2
//             }
//         },
//         exit: {
//             y: 100,
//             opacity: 0,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeIn"
//             }
//         }
//     };

//     const dishVariants = {
//         hidden: {
//             x: 200,
//             opacity: 0,
//             scale: 0.5
//         },
//         visible: {
//             x: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.8,
//                 ease: "easeOut",
//                 staggerChildren: 0.1
//             }
//         },
//         exit: {
//             x: -200,
//             opacity: 0,
//             scale: 0.5,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeIn"
//             }
//         }
//     };

//     const dishItemVariants = {
//         hidden: {
//             x: 50,
//             opacity: 0,
//             scale: 0.8
//         },
//         visible: {
//             x: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     const childVariants = {
//         hidden: { y: -50, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return (
//         <div
//             className="relative w-full h-[70vh] overflow-hidden rounded-4xl transition-all duration-1000 ease-in-out"
//             onMouseEnter={() => setIsAutoPlay(false)}
//             onMouseLeave={() => setIsAutoPlay(true)}
//             style={{
//                 backgroundImage: `url('${slides[currentSlide].backgroundImage}')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}
//         >
//             {/* Dark Overlay for better text readability */}
//             <div className="absolute inset-0  bg-opacity-60 backdrop-blur-[1px]"></div>

//             {/* Video Background for first slide */}
//             {slides[currentSlide].hasVideo && (
//                 <div className="absolute inset-0 z-0">
//                     <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className="w-full h-full object-cover opacity-30"
//                     >
//                         <source src={slides[currentSlide].videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}

//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//                 <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30"
//                     style={{
//                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
//                         backgroundSize: '40px 40px'
//                     }}>
//                 </div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20">
//                 <div className="text-4xl md:text-5xl animate-bounce">🥬</div>
//             </div>
//             <div className="absolute bottom-10 left-10 w-12 h-12 md:w-16 md:h-16">
//                 <div className="text-2xl md:text-3xl animate-pulse">🌶️</div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 h-full flex items-center">
//                 <div className="container mx-auto px-4 md:px-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">

//                         {/* Text Content */}
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={`text-${currentSlide}`}
//                                 variants={textVariants}
//                                 initial="hidden"
//                                 animate="visible"
//                                 exit="exit"
//                                 className="text-white space-y-4 md:space-y-6 lg:space-y-8 order-1 lg:order-1"
//                             >
//                                 {/* Purchase Info */}
//                                 <motion.div variants={childVariants}>
//                                     <div className="inline-block bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-white border-opacity-20">
//                                         <span className="text-xs md:text-sm font-medium tracking-wider">
//                                             PURCHASE TODAY. JUST {slides[currentSlide].price}
//                                         </span>
//                                     </div>
//                                 </motion.div>

//                                 {/* Title */}
//                                 <motion.h1
//                                     variants={childVariants}
//                                     className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-wide"
//                                 >
//                                     {slides[currentSlide].title}
//                                 </motion.h1>

//                                 {/* Description */}
//                                 <motion.p
//                                     variants={childVariants}
//                                     className="text-sm md:text-base lg:text-lg text-white text-opacity-90 leading-relaxed max-w-md lg:max-w-lg"
//                                 >
//                                     {slides[currentSlide].description}
//                                 </motion.p>

//                                 {/* Order Button */}
//                                 <motion.div variants={childVariants}>
//                                     <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
//                                         ORDER NOW
//                                     </button>
//                                 </motion.div>
//                             </motion.div>
//                         </AnimatePresence>

//                         {/* Dishes Section */}
//                         <div className="relative order-2 lg:order-2 flex flex-col items-center space-y-6">
//                             {/* Main Featured Dish */}
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={`main-dish-${currentSlide}`}
//                                     initial={{ scale: 0, rotate: -180 }}
//                                     animate={{ scale: 1, rotate: 0 }}
//                                     exit={{ scale: 0, rotate: 180 }}
//                                     transition={{ duration: 0.8, type: "spring" }}
//                                     className="relative"
//                                 >
//                                     {/* Discount Badge */}
//                                     <motion.div
//                                         className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20"
//                                         initial={{ scale: 0, rotate: -180 }}
//                                         animate={{ scale: 1, rotate: 0 }}
//                                         transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
//                                     >
//                                         <div className="bg-yellow-400 text-red-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-white shadow-lg">
//                                             <div className="text-center">
//                                                 <div className="text-lg md:text-xl font-bold leading-none">{slides[currentSlide].discount}</div>
//                                                 <div className="text-xs md:text-sm font-bold leading-none">Off</div>
//                                             </div>
//                                         </div>
//                                     </motion.div>

//                                     {/* Main Dish Circle */}
//                                     <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
//                                         <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl opacity-30 scale-110"></div>
//                                         <div className="relative w-full h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl border-8 border-white border-opacity-20">
//                                             <div className="text-6xl md:text-7xl lg:text-8xl filter drop-shadow-lg">
//                                                 {slides[currentSlide].image}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </AnimatePresence>

//                             {/* 3 Clickable Dishes */}
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={`dishes-${currentSlide}`}
//                                     variants={dishVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                     exit="exit"
//                                     className="flex space-x-4 md:space-x-6"
//                                 >
//                                     {slides[currentSlide].dishes.map((dish, index) => (
//                                         <motion.button
//                                             key={`${currentSlide}-${index}`}
//                                             variants={dishItemVariants}
//                                             onClick={() => handleDishClick(dish)}
//                                             className="group relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl cursor-pointer"
//                                             whileHover={{ scale: 1.1, y: -5 }}
//                                             whileTap={{ scale: 0.95 }}
//                                         >
//                                             {/* Dish Emoji */}
//                                             <div className="text-2xl md:text-3xl lg:text-4xl mb-1">
//                                                 {dish.image}
//                                             </div>

//                                             {/* Price */}
//                                             <div className="text-xs md:text-sm font-bold text-white">
//                                                 {dish.price}
//                                             </div>

//                                             {/* Hover Effect */}
//                                             <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                                             {/* Tooltip */}
//                                             <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                                                 {dish.name}
//                                             </div>
//                                         </motion.button>
//                                     ))}
//                                 </motion.div>
//                             </AnimatePresence>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Arrows */}
//             <motion.button
//                 onClick={prevSlide}
//                 className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 text-white p-3 md:p-4 rounded-full transition-all duration-300 border-2 border-white border-opacity-30 hover:scale-110 z-20 shadow-lg hover:shadow-xl"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
//             </motion.button>

//             <motion.button
//                 onClick={nextSlide}
//                 className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 text-white p-3 md:p-4 rounded-full transition-all duration-300 border-2 border-white border-opacity-30 hover:scale-110 z-20 shadow-lg hover:shadow-xl"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
//             </motion.button>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide
//                             ? 'bg-white scale-125'
//                             : 'bg-white bg-opacity-40 hover:bg-opacity-70'
//                             }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;






import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const slides = [
        {
            id: 1,
            title: "FRENCH BREAK CHEESY PIZZA",
            description: "Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she showing know.",
            price: "$58",
            discount: "50%",
            image: "/assets/pizza2.png", // Replace with your main pizza image
            type: "autoplay",
            hasVideo: true,
            backgroundImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-slowly-preparing-a-pizza-43972-large.mp4",
            dishes: [
                { name: "Margherita", image: "/assets/margherita.png", price: "$45" },
                { name: "Pepperoni", image: "/assets/pepperoni.png", price: "$48" },
                { name: "Supreme", image: "/assets/supreme.png", price: "$52" }
            ]
        },
        {
            id: 2,
            title: "SPECIAL ITALIAN SUPREME",
            description: "Our chef's special creation with premium imported ingredients. Handcrafted with love and traditional Italian techniques.",
            price: "$65",
            discount: "40%",
            image: "/assets/images/pasta-main.png", // Replace with your main pasta image
            type: "special",
            hasVideo: false,
            backgroundImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop",
            dishes: [
                { name: "Carbonara", image: "/assets/images/carbonara.png", price: "$38" },
                { name: "Bolognese", image: "/assets/images/bolognese.png", price: "$42" },
                { name: "Alfredo", image: "/assets/images/alfredo.png", price: "$40" }
            ]
        },
        {
            id: 3,
            title: "GOURMET BURGER DELUXE",
            description: "Customer's favorite choice! Juicy beef patty with premium toppings that has won hearts of thousands of food lovers.",
            price: "$52",
            discount: "45%",
            image: "/assets/burger.png", // Replace with your main burger image
            type: "loved",
            hasVideo: false,
            backgroundImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop",
            dishes: [
                { name: "Classic", image: "/assets/burger.png", price: "$28" },
                { name: "BBQ", image: "/assets/burger.png", price: "$32" },
                { name: "Cheese", image: "/assets/burger.png", price: "$30" }
            ]
        },
        {
            id: 4,
            title: "SPECIAL COMBO OFFER",
            description: "Limited time offer! Get our signature dishes with amazing discount. Don't miss this incredible deal for food enthusiasts.",
            price: "$48",
            discount: "60%",
            image: "/assets/combo1.png", // Replace with your main combo image
            type: "offer",
            hasVideo: false,
            backgroundImage: "https://images.unsplash.com/photo-1670063648721-768ca3e57342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            dishes: [
                { name: "Combo 1", image: "/assets/combo1.png", price: "$25" },
                { name: "Combo 2", image: "/assets/combo1.png", price: "$28" },
                { name: "Combo 3", image: "/assets/combo1.png", price: "$30" }
            ]
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleDishClick = (dish) => {
        alert(`Selected: ${dish.name} - ${dish.price}`);
    };

    // Animation variants
    const textVariants = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        },
        exit: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };

    const dishVariants = {
        hidden: {
            x: 200,
            opacity: 0,
            scale: 0.5
        },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        exit: {
            x: -200,
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };

    const dishItemVariants = {
        hidden: {
            x: 50,
            opacity: 0,
            scale: 0.8
        },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const childVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div
            className="relative w-full h-[70vh] overflow-hidden rounded-4xl transition-all duration-1000 ease-in-out"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            style={{
                backgroundImage: `url('${slides[currentSlide].backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0  bg-opacity-60 backdrop-blur-[1px]"></div>

            {/* Video Background for first slide */}
            {slides[currentSlide].hasVideo && (
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                    >
                        <source src={slides[currentSlide].videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 left-10 w-16 h-16 md:w-20 md:h-20">
                <div className="text-4xl md:text-5xl animate-bounce">🥬</div>
            </div>
            <div className="absolute top-6 right-50  w-12 h-12 md:w-16 md:h-16">
                <div className="text-2xl md:text-3xl animate-pulse">🍟</div>
            </div>
            <div className="absolute bottom-3 left-4 w-12 h-12 md:w-16 md:h-16">
                <div className="text-2xl md:text-3xl animate-pulse">🌶️</div>
            </div>
            <div className="absolute bottom-10 right-10 w-12 h-12 md:w-16 md:h-16">
                <div className="text-2xl md:text-3xl animate-bounce">🧅</div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex items-center p-17">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">

                        {/* Text Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`text-${currentSlide}`}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="text-white space-y-4 md:space-y-6 lg:space-y-8 order-1 lg:order-1"
                            >
                                {/* Purchase Info */}
                                <motion.div variants={childVariants}>
                                    <div className="inline-block bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-white border-opacity-20">
                                        <span className="text-xs md:text-sm font-medium tracking-wider">
                                            PURCHASE TODAY. JUST {slides[currentSlide].price}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.h1
                                    variants={childVariants}
                                    className="text-3xl text-red-500 md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-wide"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    variants={childVariants}
                                    className="text-sm md:text-base lg:text-lg text-white text-opacity-90 leading-relaxed max-w-md lg:max-w-lg"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                {/* Order Button */}
                                <motion.div variants={childVariants}>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                        ORDER NOW
                                    </button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Dishes Section */}
                        <div className="relative order-2 lg:order-2 flex flex-col items-center space-y-6">
                            {/* Main Featured Dish */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`main-dish-${currentSlide}`}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 180 }}
                                    transition={{ duration: 0.8, type: "spring" }}
                                    className="relative"
                                >
                                    {/* Discount Badge */}
                                    <motion.div
                                        className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                                    >
                                        <div className="bg-yellow-400 text-red-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 border-white shadow-lg">
                                            <div className="text-center">
                                                <div className="text-lg md:text-xl font-bold leading-none">{slides[currentSlide].discount}</div>
                                                <div className="text-xs md:text-sm font-bold leading-none">Off</div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Main Dish Circle */}
                                    <div className="relative w-40 h-40 md:w-32 md:h-32 lg:w-50 lg:h-50">
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl opacity-30 scale-110"></div>
                                        <div className="relative w-full h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl   border-opacity-20 overflow-hidden">
                                            <img
                                                src={slides[currentSlide].image}
                                                alt={slides[currentSlide].title}
                                                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain filter drop-shadow-lg"
                                                onError={(e) => {
                                                    // Fallback to emoji if image fails to load
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'block';
                                                }}
                                            />
                                            <div className="text-6xl md:text-7xl lg:text-9xl filter drop-shadow-lg hidden">
                                                🍽️
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* 3 Clickable Dishes */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`dishes-${currentSlide}`}
                                    variants={dishVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="flex space-x-4 md:space-x-6"
                                >
                                    {slides[currentSlide].dishes.map((dish, index) => (
                                        <motion.button
                                            key={`${currentSlide}-${index}`}
                                            variants={dishItemVariants}
                                            onClick={() => handleDishClick(dish)}
                                            className="group relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex flex-col items-center justify-center shadow-xl border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl cursor-pointer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {/* Dish Image */}
                                            <img
                                                src={dish.image}
                                                alt={dish.name}
                                                className="w-12 h-12 md:w-16  md:h-16 lg:w-20 lg:h-20 object-contain mb-1"
                                                onError={(e) => {
                                                    // Fallback to emoji if image fails to load
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'block';
                                                }}
                                            />
                                            <div className="text-5xl md:text-6xl lg:text-7xl mb-1 hidden">
                                                🍽️
                                            </div>

                                            {/* Price */}
                                            <div className="text-xs md:text-sm font-bold text-black">
                                                {dish.price}
                                            </div>

                                            {/* Hover Effect */}
                                            <div className="absolute inset-0  bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Tooltip */}
                                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-black font-bold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                {dish.name}
                                            </div>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <motion.button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 bottom-40 transform -translate-y-1/2 bg-opacity-30  hover:bg-opacity-50 text-white p-3 md:p-4 rounded-full transition-all duration-300 border-2 border-white border-opacity-30 hover:scale-110 z-20 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </motion.button>

            <motion.button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 bottom-40 transform -translate-y-1/2  bg-opacity-30  hover:bg-opacity-50 text-white p-3 md:p-4 rounded-full transition-all duration-300 border-2 border-white border-opacity-30 hover:scale-110 z-20 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white bg-opacity-40 hover:bg-opacity-70'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;