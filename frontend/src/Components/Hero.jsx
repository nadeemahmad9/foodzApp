


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