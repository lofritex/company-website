
export default function ValueCards({value}) {
  return (
    <div className="w-80 border">
          <h2>
            <span>{value.index}</span>{value.title}
          </h2>
          <p>{value.content}
          </p>
        </div>
  )
}
