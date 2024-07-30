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
    <div className="flex h-full items-center">
      <button className="h-10 w-20 rotate-180" onClick={prevSlide}>
        <img src={Arrow} alt="Left Arrow" className="h-10 w-16" />
      </button>
      <div
        id="carousel-container"
        className="flex h-full items-start  overflow-hidden bg-red-300"
      >
        {data.map((card, index) => {
          let isActive;
          if (index == currentIndex + 2) isActive = true;
          else isActive = false;
          return (
            <div
              key={card.title}
              className={`flex h-cardHeight-1 w-1/5 shrink-0 transition-transform duration-1000 ease-in-out justify-center`}
              style={{
                transform: `translateX(-${currentIndex * 100}%) 
                translateY(${
                  isActive
                    ? (-1) ** currentIndex * (-1) ** index * 300
                    : (-1) ** (currentIndex + 1) * (-1) ** index * 100
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
  );
}
