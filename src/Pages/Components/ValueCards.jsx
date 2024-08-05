
export default function ValueCards({ value }) {
  return (
    <div className="max-w-80 p-3">
      <h2 className="text-2xl py-2">
        {value.index}.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#5EA5FE] to-[#2F37FF]">
          {value.title}
        </span>
      </h2>
      <p>{value.content}</p>
    </div>
  );
}
