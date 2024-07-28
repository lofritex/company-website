

export default function Cards({card}) {
  return (
    <div className="p-4 rounded-lg border border-blue-200 w-cardWidth h-height bg-white">
      <div className="mr-4">
        <img src={card.image} alt={card.title} className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-blue-500 mb-2 text-left text-gradient">{card.title}</h3>
      <p className="text-gray-700">{card.content}</p>
    </div>
  );
}
