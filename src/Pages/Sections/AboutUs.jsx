import image from "../Images/AboutUs.svg";
import Circle from "../Images/Circle.svg";
import HalfCircle from "../Images/HalfCircle.svg";

export default function AboutUs() {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-primary">
      <div className="w-half h-full flex flex-col justify-center items-center text-left relative">
        <img src={HalfCircle} alt=" " className=" absolute top-0 left-56 z-0"/>
        <div>
          <div className="w-16 h-1 bg-blue-600"></div>
          <h2 className="text-3xl font-bold leading-tight mb-4 mt-8">
            Leading companies trust us <br />{" "}
            <span className="font-extrabold">to develop software</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We add development capacity to tech teams. Our value isn't <br />
            limited to building teams but is equally distributed across the{" "}
            <br /> project lifecycle. We are a custom software development{" "}
            <br /> company that guarantees the successful delivery of your{" "}
            <br /> project.
          </p>
          <a
            href="#none"
            className="text-blue-600 flex items-center font-semibold"
          >
            See more Informations <span className="ml-2 text-xl">&#10132;</span>
          </a>
        </div>
        <img className="w-20 absolute bottom-6 ml-44" src={Circle} alt=" " />
      </div>
      <div className="flex flex-col justify-center w-half h-full items-end">
        <img className="w-20 mr-60" src={Circle} alt=" " />
        <img src={image} alt="Team" className="w-full h-pic" />
      </div>
    </section>
  );
}
