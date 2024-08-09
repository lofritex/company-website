import { NavLink as Link } from "react-router-dom";
import LearnMoreArrow from "../Images/LearnMoreArrow.svg";

export default function ServicesCard({data}) {
  return (
    <div className="m-5 flex max-h-[500px] max-w-[350px] flex-col items-center justify-center rounded-xl bg-[#5CA1FF] p-5 text-white">
      <img
        src={data.image}
        alt="Web Developer Graphical"
        className="m-4 min-w-12 max-w-40"
      />
      <h2 className="p-5 text-3xl font-bold text-center">{data.title}</h2>
      <p className="px-3 pb-3 text-center font-thin">
        {data.caption}
      </p>
      <Link to="/">
        <div className="flex">
          <h6 className="p-5 text-xl font-bold">Learn More</h6>
          <img src={LearnMoreArrow} alt="" />
        </div>
      </Link>
    </div>
  );
}
