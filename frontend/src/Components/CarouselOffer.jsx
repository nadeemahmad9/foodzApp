import React from "react";

const images = [
  "https://img.freepik.com/premium-vector/poster-special-special-special-meals-with-sign-that-says-special_986810-2055.jpg?uid=R180040173&ga=GA1.1.1703132662.1729686318&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/premium-vector/vibrant-food-menu-advertisement-featuring-delicious-pizza-center_992397-23273.jpg?uid=R180040173&ga=GA1.1.1703132662.1729686318&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/premium-vector/burger-ad-design_706452-30866.jpg?uid=R180040173&ga=GA1.1.1703132662.1729686318&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/premium-vector/vibrant-food-menu-advertisement-featuring-delicious-pizza-center_992397-23267.jpg?uid=R180040173&ga=GA1.1.1703132662.1729686318&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/premium-vector/burger-post_1083784-11.jpg?uid=R180040173&ga=GA1.1.1703132662.1729686318&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/premium-vector/fresh-healthy-food-menu-restaurant-story-template_459029-717.jpg?uid=R180040173&ga=GA1.1.1703132662.1729686318&semt=ais_items_boosted&w=740",
];

const CarouselOffer = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      <div
        className="flex gap-4 animate-[scrollLeft_20s_linear_infinite]"
        style={{
          minWidth: "max-content",
        }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="w-80 aspect-[3/4] rounded-xl shadow-md bg-gray-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={img}
              alt={`card-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Animation keyframes using style tag */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselOffer;
