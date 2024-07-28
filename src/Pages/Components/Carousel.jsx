import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';
import WebDevIcon from "../Images/WebDevIcon.svg"

export default function Carousel({ cards }) {
  //   const visibleCards = 5; // Number of cards visible at a time
  // const [currentIndex, setCurrentIndex] = useState(visibleCards); // Start at first real card
  // const carouselRef = useRef(null);
  // const transitionRef = useRef(true); // To control the CSS transition
  // const totalCards = cards.length;

  // // Clone the first and last few cards to create an infinite loop effect
  // const extendedCards = [...cards.slice(-visibleCards), ...cards, ...cards.slice(0, visibleCards)];

  // // Function to move to the next set of cards
  // const nextSlide = () => {
  //   if (transitionRef.current) {
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  // // Function to move to the previous set of cards
  // const prevSlide = () => {
  //   if (transitionRef.current) {
  //     setCurrentIndex((prevIndex) => prevIndex - 1);
  //   }
  // };

  // // Handle transition end to loop back when necessary
  // const handleTransitionEnd = () => {
  //   transitionRef.current = true; // Reset transition control

  //   // Jump to real set of cards if we're at cloned slides
  //   if (currentIndex >= totalCards + visibleCards) {
  //     setCurrentIndex(visibleCards);
  //     transitionRef.current = false;
  //   } else if (currentIndex < visibleCards) {
  //     setCurrentIndex(totalCards + visibleCards - 1);
  //     transitionRef.current = false;
  //   }
  // };

  // // Auto-slide functionality
  // useEffect(() => {
  //   const intervalRef = { current: null };

  //   const startAutoSlide = () => {
  //     intervalRef.current = setInterval(() => {
  //       nextSlide();
  //     }, 3000); // Change slide every 3 seconds
  //   };

  //   startAutoSlide();

  //   // Cleanup function to clear the interval on component unmount
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [currentIndex]);

  // // Generate styles for carousel animation
  // const carouselStyle = {
  //   transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
  //   transition: transitionRef.current ? 'transform 0.5s ease-in-out' : 'none', // Conditional transition
  // };

  // return (
  //   <div className="relative w-full h-screen max-w-5xl mx-auto overflow-hidden" ref={carouselRef}>
  //     {/* Carousel Cards */}
  //     <div
  //       className="flex h-full items-center"
  //       style={carouselStyle}
  //       onTransitionEnd={handleTransitionEnd} // Handle end of CSS transition
  //     >
  //       {extendedCards.map((card, index) => (
  //         <Cards key={index} card={card} index={index} />
  //       ))}
  //     </div>

  //     {/* Left Arrow */}
  //     <button
  //       onClick={prevSlide}
  //       className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none hover:bg-gray-900 transition-colors duration-300"
  //     >
  //       &#10094;
  //     </button>

  //     {/* Right Arrow */}
  //     <button
  //       onClick={nextSlide}
  //       className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none hover:bg-gray-900 transition-colors duration-300"
  //     >
  //       &#10095;
  //     </button>

  //     {/* Indicators */}
  //     <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
  //       {Array.from({ length: totalCards }).map((_, index) => (
  //         <div
  //           key={index}
  //           className={`w-2 h-2 rounded-full ${
  //             index === (currentIndex - visibleCards) % totalCards ? 'bg-blue-600' : 'bg-gray-400'
  //           }`}
  //         ></div>
  //       ))}
  //     </div>
  //   </div>
  const data = {
    "title" : "Web Design and Development",
    "content" : "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    "image" : WebDevIcon
  }
  return (
  <section className='w-full h-screen'>
    <Cards card={data}/>
  </section>
  );
}
