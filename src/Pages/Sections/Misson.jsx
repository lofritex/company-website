import mission from "../Images/mission.svg";
import vision from "../Images/vision.svg";

export default function Misson() {
  return (
    <section className="h-screenSize flex w-full items-center justify-center">
      <div className="flex w-half flex-col items-center justify-center">
        <img src={mission} alt="Our Mission Pic" className="m-10 w-40" />
        <h2>OUR MISSION</h2>
        <div className="flex">
          <div className="mt-10 h-[1px] w-40 bg-blue-600"></div>
          <div className="ml-2 mt-10 h-[1px] w-40 bg-blue-600"></div>
        </div>
        <p className="w-1/2 p-10"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
          blanditiis autem quia eius id, corporis quos nam laborum beatae et
          magnam fuga dignissimos facilis ut aliquid. Minus, exercitationem
          consectetur!
        </p>
      </div>
      <div className="h-44 w-[1px] bg-black"></div>
      <div className="flex w-half flex-col items-center">
        <img src={vision} alt="Our Vision Pic" className="m-10 w-40" />
        <h2>OUR VISION</h2>
        <div className="flex">
          <div className="mt-10 h-[1px] w-40 bg-blue-600"></div>
          <div className="ml-2 mt-10 h-[1px] w-40 bg-blue-600"></div>
        </div>
        <p className="w-1/2 p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
          blanditiis autem quia eius id, corporis quos nam laborum beatae et
          magnam fuga dignissimos facilis ut aliquid. Minus, exercitationem
          consectetur!
        </p>
      </div>
    </section>
  );
}
