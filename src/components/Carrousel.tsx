import React, { useState } from "react";
import { db } from "../helpers/db"; // Asegúrate de que la ruta es correcta

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = db;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-5/6 flex justify-center  h-96">
      {/* Carrusel Wrapper */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Slides */}
        <div className="relative h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 h-full flex items-center justify-center"
            >
              <img
                src={item.image}
                className=" object-cover -rotate-45 h-auto"
                alt={`Slide ${item.id}`}
              />
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-300'}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 z-30 bg-white/30 dark:bg-gray-800/30"
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          <span className="text-black dark:text-white text-2xl">&#9664;</span>
        </button>
        {/* Next Button */}
        <button
          type="button"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 z-30 bg-white/30 dark:bg-gray-800/30"
          aria-label="Next slide"
          onClick={nextSlide}
        >
          <span className="text-black dark:text-white text-2xl">&#9654;</span>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
