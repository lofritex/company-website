export default function Cards({ card, isActive }) {
  return (
    <div
      className={`h-full w-cardWidth rounded-lg bg-white p-3 transition-transform duration-1000 ease-in-out ${isActive && "transition-colors duration-1000 ease-in-out border-2 border-blue-700"} `}
    >
      <img src={card.image} alt={card.title} className="h-12 w-12" />
      <h3 className={`"text-gradient my-3 text-left text-xl font-bold ${isActive && "transition duration-500 ease-in-out text-blue-600"}`}>
        {card.title}
      </h3>
      <p className="text-gray-700">{card.content}</p>
    </div>
  );
}
