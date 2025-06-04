import React, { useState } from "react";
import { useRef } from "react";
import Sindian from "../assets/SouthIndian.avif";
import Nindian from "../assets/NorthIndian.avif";
import Chiness from "../assets/Chiness.avif";
import Muglai from "../assets/Muglai.avif";
import Italic from "../assets/Italic.jpg";
import Desserts from "../assets/Desserts.avif";
import Bevrages from "../assets/Bevrages.avif";
import Dog from "../assets/Dog.avif";
import Cat from "../assets/Cat.avif";
import High_Protien from "../assets/Diet.avif";

const categories = [
  { id: 1, name: "South Indian", image: Sindian },
  { id: 2, name: "North Indian", image: Nindian },
  { id: 3, name: "Chiness", image: Chiness },
  { id: 4, name: "Muglai", image: Muglai },
  { id: 5, name: "Italian", image: Italic },
  { id: 6, name: "Desserts", image: Desserts },
  { id: 7, name: "Beverages", image: Bevrages },
  { id: 8, name: "Dog", image: Dog },
  { id: 9, name: "Cat", image: Cat },
  { id: 10, name: "Protien Rich", image: High_Protien },
];

const SLIDES_TO_SHOW = 3;
const SLIDES_TO_SCROLL = 2;
const CategorySlider = () => {
  const [start, setStart] = useState(0);

  const handlePrev = () => {
    setStart((prev) => Math.max(prev - SLIDES_TO_SCROLL, 0));
  };
  const handleNext = () => {
    setStart((prev) =>
      Math.min(prev + SLIDES_TO_SCROLL, categories.length - SLIDES_TO_SHOW)
    );
  };

  return (
    <div className="relative w-full flex items-center ">
      <button
        onClick={handlePrev}
        disabled={start === 0}
        className="absolute left-0 z-10 bg-white rounded-full shadow p-2 disabled:opacity-50"
      >
        &#8592;
      </button>
      <div className="overflow-x-auto scrollbar-hide md:overflow-hidden w-full">
        <div
          className="flex transition-transform duration-400"
          style={{
            transform: `translateX(-${(start * 100) / SLIDES_TO_SHOW}%)`,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="w-64 h-64 bg-zinc-200 rounded-full shadow-lg shadow-zinc-600 text-center mx-4 my-8 flex-shrink-0 flex flex-col items-center justify-center"
            >
              <svg
                width="160"
                height="50"
                viewBox="0 0 192 60"
                className="mt-[-18px]"
              >
                <defs>
                  <path
                    id={`arc-${cat.id}`}
                    d="M16,50 Q96,10 176,50"
                    fill="transparent"
                  />
                </defs>
                <text fontSize="20" fill="#222" fontWeight="bold">
                  <textPath
                    href={`#arc-${cat.id}`}
                    startOffset="50%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                  >
                    {cat.name}
                  </textPath>
                </text>
              </svg>

              <img
                src={cat.image}
                alt={cat.name}
                className="w-52 h-52 mt-[-18px] object-cover rounded-full mx-auto mb-2"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        disabled={start >= categories.length - SLIDES_TO_SHOW}
        className="absolute right-0 z-10 bg-white rounded-full shadow p-2 disabled:opacity-50"
      >
        &#8594;
      </button>
    </div>
  );
};

export default CategorySlider;
