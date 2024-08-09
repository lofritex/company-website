import { NavLink as Link } from "react-router-dom";
import LearnMoreArrow from "../Images/LearnMoreArrow.svg";
import WebDevImage from "../Images/WebDevImage.svg";

export default function ServicesCard() {
  return (
    <div className="m-5 flex max-h-[500px] max-w-[350px] flex-col items-center justify-center rounded-xl bg-[#5CA1FF] p-5 text-white">
      <img
        src={WebDevImage}
        alt="Web Developer Graphical"
        className="m-4 min-w-12 max-w-40"
      />
      <h2 className="p-5 text-3xl font-bold">Web Development</h2>
      <p className="px-7 pb-3 text-center font-thin">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page.
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
