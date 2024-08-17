import { NavLink as Link } from "react-router-dom";
import LearnMoreArrow from "../Images/LearnMoreArrow.svg";

export default function ServicesCard({data}) {
  return (
    <div className="m-5 flex max-h-[550px] max-w-[350px] flex-col items-center justify-center rounded-xl bg-[#0f4c81] p-5 text-white">
      <div className="flex-grow flex flex-col items-center">
        <img
          src={data.image}
          alt={data.title}
          className=" min-w-12 max-w-40"
        />
        <h2 className="p-5 text-3xl font-bold text-center">{data.title}</h2>
        <p className="px-3 pb-3 text-center font-thin">
          {data.caption}
        </p>
      </div>
      <Link to="/">
        <div className="flex">
          <h6 className="p-5 text-xl font-bold">Learn More</h6>
          <img src={LearnMoreArrow} alt="" />
        </div>
      </Link>
    </div>
  );
}
