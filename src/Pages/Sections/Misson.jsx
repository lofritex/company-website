import mission from "../Images/mission.svg";
import vision from "../Images/vision.svg";

export default function Misson() {
  return (
    <section className=" flex w-full items-center justify-center py-40">
      <div className="flex w-half flex-col items-center justify-center">
        <img src={mission} alt="Our Mission Pic" className="m-10 w-40" />
        <h2 className="font-bold text-3xl">OUR MISSION</h2>
        <div className="flex">
          <div className="mt-10 h-[1px] w-40 bg-blue-600"></div>
          <div className="ml-2 mt-10 h-[1px] w-40 bg-blue-600"></div>
        </div>
        <p className="w-1/2 px-20 pt-10 pb-20"> 
        We aim to create an ecosystem where technological solutions are one call away.
        </p>
      </div>
      <div className="h-44 w-[1px] bg-black"></div>
      <div className="flex w-half flex-col items-center">
        <img src={vision} alt="Our Vision Pic" className="m-10 w-40" />
        <h2 className="font-bold text-3xl">OUR VISION</h2>
        <div className="flex">
          <div className="mt-10 h-[1px] w-40 bg-blue-600"></div>
          <div className="ml-2 mt-10 h-[1px] w-40 bg-blue-600"></div>
        </div>
        <p className="w-1/2 px-20 py-10">
        To create an ecosystem where technological solutions are always within reach, empowering individuals and businesses to thrive with ease and efficiency.
        </p>
      </div>
    </section>
  );
}
