import { useState } from "react";
import Cards from "./Cards";

export default function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const nextSlide = () => {
    return setCurrentIndex((prevIndex) => {
      if (prevIndex == 5) return 5;
      else return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    return setCurrentIndex((prevIndex) => {
      if (prevIndex == 0) return 0;
      else return prevIndex - 1;
    });
  };

  return (
    <div className="flex h-[600px] items-center">
      <button className="bg-blue-800" onClick={prevSlide}>
        Left
      </button>
      <div id="carousel-container" className="flex gap-2 overflow-hidden ">
        {data.map((card) => {
          return (
            <div
              key={card.title}
              className={`w-1/3 h-full shrink-0 transition-transform duration-700 ease-in-out flex justify-center`}
              style={carouselStyle}
            >
              <Cards card={card} />
            </div>
          );
        })}
      </div>

      <button className="bg-blue-800" onClick={nextSlide}>
        Right
      </button>
    </div>
  );
}
