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
  title : "OUR VISION",
  content : "To create an ecosystem where technological solutions are always within reach, empowering individuals and businesses to thrive with ease and efficiency."
}

export default function Misson() {
  return (
    // <section className=" flex flex-col lg:flex-row w-full items-center justify-center py-40">
    <section className=" grid lg:grid-cols-mission py-20 lg:py-40  lg:grid-flow-col justify-items-center items-center">
      <MissionCard data={missionData}/>
      <div className="hidden lg:grid h-44 w-[1px] bg-black"></div>
      <MissionCard data={visionData} reverseFlow={true}/>
    </section>
  );
}
