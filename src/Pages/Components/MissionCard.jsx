
export default function MissionCard({data, reverseFlow = false}) {
  return (
    <div className="grid grid-cols-2  justify-items-center p-2 lg:max-w-half lg:grid-cols-1">
      <div className="flex flex-col items-center">
        <img
          src={data.pic}
          alt="Our Mission Pic"
          className="min-w-10 max-w-40 p-5 lg:p-10 lg:max-w-60"
        />
        <h2 className="text-xl font-bold lg:text-3xl">{data.title}</h2>
      </div>
      <div className="mt-10 hidden items-center justify-center space-x-2 lg:flex">
        <div className="h-[1px] w-40 bg-blue-600"></div>
        <div className="h-[1px] w-40 bg-blue-600"></div>
      </div>
      <div className={`flex justify-center items-center lg:row-start-3  ${reverseFlow && "col-start-1 row-start-1 flex-row-reverse"}`} >
        <div className="visible h-44 w-[4px] bg-blue-600 lg:hidden"></div>
        <p className="px-2 text-center lg:p-10 max-w-[500px]">
            {data.content}
        </p>
      </div>
    </div>
  );
}
