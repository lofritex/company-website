import React from "react";

export default function Cards({card,index}) {
    const visibleCards = 5;
    const carouselStyle = `${index == 2 ? "text-green-500 h-full flex items-center" : ""}`

  return (
    <div
      key={index}
      className={`w-1/5 flex-shrink-0 p-4 ${carouselStyle} }`}
      style={{ minWidth: `${100 / visibleCards}%` }}
    >
      <div className="p-6 h-36 w-full bg-white shadow-md rounded-lg text-center">
        <div className="text-2xl mb-2">{card.icon}</div>
        <h3 className="text-lg font-bold mb-1">{card.title}</h3>
        <p className="text-sm text-gray-600">{card.description}</p>
      </div>
    </div>
  );
}
