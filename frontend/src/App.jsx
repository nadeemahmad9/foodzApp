import React from "react";
import Hero from "./Components/Hero";

import Navbar from "./Components/Navbar";

import CarouselOffer from "./Components/CarouselOffer";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-2 px-4">
      <Navbar />
      <Hero />
      <CarouselOffer />
    </div>
  );
};

export default App;
