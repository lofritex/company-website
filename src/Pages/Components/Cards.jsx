export default function Cards({ card, isActive }) {
  return (
    <div
      className={`max-h-80 w-full lg:w-cardWidth rounded-lg bg-white py-3 px-4 transition-transform duration-1000 ease-in-out ${isActive && "transition-colors duration-5000 ease-in-out border-2 border-blue-700"} `}
    >
      <img src={card.image} alt={card.title} className="h-12 w-12" />
      <h3 className={`"text-gradient my-3 text-left text-xl font-bold ${isActive && "transition duration-500 ease-in-out text-blue-600"}`}>
        {card.title}
      </h3>
      <p className="text-gray-700 py-2">{card.caption}</p>
    </div>
  );
}
