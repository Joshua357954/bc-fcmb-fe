import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative my-2">
      <div className="overflow-hidden relative">
        <div className="flex transition-transform ease-in-out duration-300 transform -translate-x-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="w-screen flex-shrink-0">
              {/*<img src={item} alt={`Slide ${index + 1}`} className="w-full h-auto" />*/}
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-2/4 -translate-x-2/4 transform">
        <button className="bg-black text-white p-2 rounded-full mr-4" onClick={prevSlide}>
          &lt;
        </button>
        <button className="bg-black text-white p-2 rounded-full" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
