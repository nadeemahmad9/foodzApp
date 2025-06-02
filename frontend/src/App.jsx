import React from "react";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
        Navbar
      </h1>
      <Hero />
    </div>
  );
};

export default App;
