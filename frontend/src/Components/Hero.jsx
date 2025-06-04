
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const slides = [
    {
        id: 1,
        type: "video",
        title: "Order Tasty &",
        subtitle: "Fresh Food",
        highlight: "anytime!",
        description: "Just confirm your order and enjoy our delicious fastest delivery.",
        videoUrl: "/placeholder-video.mp4",

    },
    {
        id: 2,
        type: "image",
        title: "Authentic",
        subtitle: "Italian Pizza",
        highlight: "delivered hot!",
        description: "Experience the taste of Italy with our wood-fired pizzas made with fresh ingredients.",
        image: "/assets/pizza2.png",

    },
    {
        id: 3,
        type: "image",
        title: "Spicy",
        subtitle: "Mexican Tacos",
        highlight: "muy delicioso!",
        description: "Savor the bold flavors of Mexico with our authentic tacos and fresh salsas.",
        image: "/assets/tacos.png",

    },
    {
        id: 4,
        type: "image",
        title: "Fresh",
        subtitle: "Steaming cup of",
        highlight: "espresso",
        description: "Awaken your senses with the bold aroma and rich flavor of our premium espresso — a true celebration of Italian coffee craftsmanship..",
        image: "/assets/espresso.png",

    },
    {
        id: 5,
        type: "image",
        title: "Aromatic",
        subtitle: "Indian Thaali",
        highlight: "bahut tasty!",
        description: "Discover the rich spices and flavors of India with our traditional curry dishes.",
        image: "/assets/thaali.png",

    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <div
            className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-blue-950 via-black to-red-900 rounded-4xl transition-all duration-1000 ease-in-out"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
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

            {/* Main Content Container */}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] flex items-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-1 lg:gap-8 xl:gap-12 items-center w-full pt-12 sm:pt-12 md:pt-12 lg:pt-0">

                    {/* Text Content */}
                    <motion.div
                        className="text-white space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-1 lg:order-1 text-center lg:text-left"
                        key={`content-${currentSlide}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-2 sm:space-y-1 md:space-y-3">
                            <h1 className="text-xl sm:text-xl md:text-2xl  lg:text-3xl xl:text-5xl font-bold leading-tight">
                                {slides[currentSlide].title}
                                <br />
                                {slides[currentSlide].subtitle}
                                <br />
                                <span className="text-red-500">{slides[currentSlide].highlight}</span>
                            </h1>
                            <p className="hidden md:block text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
                                {slides[currentSlide].description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-row sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                            <motion.button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Order Now
                            </motion.button>
                            <motion.button
                                className="text-yellow-400 hover:text-yellow-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg underline underline-offset-4 transition-colors py-2 sm:py-3 md:py-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                See Menu
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Image/Video Content */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2 py-4 sm:py-6 md:py-8 lg:py-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                className="relative"
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                transition={{ duration: 0.8 }}
                            >
                                {slides[currentSlide].type === "video" ? (
                                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden bg-white shadow-2xl">
                                        <video autoPlay muted loop className="w-full h-full object-cover">
                                            <source src={slides[currentSlide].videoUrl} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                            <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white opacity-70" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-70 xl:h-70 rounded-full overflow-hidden  shadow-2xl">
                                        <img
                                            src={slides[currentSlide].image || "/placeholder.svg"}
                                            alt={`${slides[currentSlide].subtitle} dish`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </div>

            {/* Navigation Controls - Responsive positioning */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-[5%] left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <button
                        onClick={prevSlide}
                        className="p-1.5 sm:p-2 rounded-full  bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide
                                    ? "bg-white scale-110"
                                    : "bg-white bg-opacity-40 hover:bg-opacity-60"
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="p-1.5 sm:p-2 rounded-full  bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>

    );
}