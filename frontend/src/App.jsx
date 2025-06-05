import React from "react";
import Hero from "./Components/Hero";
import Review from "./Components/Review";

import Navbar from "./Components/Navbar";

import CarouselOffer from "./Components/CarouselOffer";
import CategorySlider from "./Components/categorySlider";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-2 px-4">
      <Navbar />
      <Hero />
      <CategorySlider />
      <CarouselOffer />
      <Review/>
    </div>
  );
};

export default App;
