import MissionCard from "../Components/MissionCard";
import mission from "../Images/mission.svg";
import vision from "../Images/vision.svg";

const missionData = {
  pic : mission,
  title : "OUR MISSION",
  content: "We aim to create an ecosystem where technological solutions are one call away.",
}


const visionData = {
  pic : vision,
  title : "OUR Vision",
  content : "To create an ecosystem where technological solutions are always within reach, empowering individuals and businesses to thrive with ease and efficiency."
}

export default function Misson() {
  return (
    <section className=" flex flex-col lg:flex-row w-full items-center justify-center py-40">
      <MissionCard data={missionData}/>
      <div className="hidden lg:flex h-44 w-[1px] bg-black"></div>
      {/* <div className="flex w-half flex-col items-center">
        <img src={vision} alt="Our Vision Pic" className="m-10 w-40" />
        <h2 className="font-bold text-3xl">OUR VISION</h2>
        <div className="flex">
          <div className="mt-10 h-[1px] w-40 bg-blue-600"></div>
          <div className="ml-2 mt-10 h-[1px] w-40 bg-blue-600"></div>
        </div>
        <p className="w-1/2 px-20 py-10 text-center">
        To create an ecosystem where technological solutions are always within reach, empowering individuals and businesses to thrive with ease and efficiency.
        </p>
      </div> */}
      <MissionCard data={visionData} reverseFlow={true}/>
    </section>
  );
}
