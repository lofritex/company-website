import { useState } from "react";
import Cards from "./Cards";
import Arrow from "../Images/Arrow.svg";

export default function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative h-full w-full">
      <h1 className="absolute top-12 w-full text-center text-5xl font-bold">
        Services we offer
      </h1>
      <div className="flex h-full items-center">
        <button className="h-10 w-20 rotate-180" onClick={prevSlide}>
          <img src={Arrow} alt="Left Arrow" className="h-10 w-16" />
        </button>
        <div
          id="carousel-container"
          className="flex h-full items-start overflow-hidden pt-20"
        >
          {data.map((card, index) => {
            let isActive;
            if (index == currentIndex + 2) isActive = true;
            else isActive = false;
            return (
              <div
                key={card.title}
                className={`flex h-cardHeight-1 w-1/5 shrink-0 justify-center transition-transform duration-1000 ease-in-out`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%) 
                translateY(${
                  isActive
                    ? (-1) ** currentIndex * (-1) ** index * 200
                    : (-1) ** (currentIndex + 1) * (-1) ** index * 80
                }px)
                scale(${isActive ? "1.1" : "0.8"})`,
                }}
              >
                <Cards card={card} isActive={isActive} />
              </div>
            );
          })}
        </div>

        <button className="h-40 w-20" onClick={nextSlide}>
          <img src={Arrow} alt="Rigth Arrow" className="h-10 w-16" />
        </button>
      </div>
      <div
        id="indicator "
        className="absolute bottom-8 flex w-full justify-center gap-1"
      >
        <div
          className={`ease-in-out" rounded-full border border-gray-300 transition-all duration-1000 ${currentIndex == 0 ? "h-4 w-4 bg-blue-500" : "h-3 w-3"}`}
        ></div>
        <div
          className={`ease-in-out" rounded-full border border-gray-300 transition-all duration-1000 ${currentIndex == 1 ? "h-4 w-4 bg-blue-500" : "h-3 w-3"}`}
        ></div>
        <div
          className={`ease-in-out" rounded-full border border-gray-300 transition-all duration-1000 ${currentIndex == 2 ? "h-4 w-4 bg-blue-500" : "h-3 w-3"}`}
        ></div>
        <div
          className={`ease-in-out" rounded-full border border-gray-300 transition-all duration-1000 ${currentIndex == 3 ? "h-4 w-4 bg-blue-500" : "h-3 w-3"}`}
        ></div>
        <div
          className={`ease-in-out" rounded-full border border-gray-300 transition-all duration-1000 ${currentIndex == 4 ? "h-4 w-4 bg-blue-500" : "h-3 w-3"}`}
        ></div>
        <div
          className={`ease-in-out" rounded-full border border-gray-300 transition-all duration-1000 ${currentIndex == 5 ? "h-4 w-4 bg-blue-500" : "h-3 w-3"}`}
        ></div>
      </div>
    </div>
  );
}
