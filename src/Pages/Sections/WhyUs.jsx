import image from "../Images/AboutUs.svg";
import Circle from "../Images/Circle.svg";
import HalfCircle from "../Images/HalfCircle.svg";

export default function WhyUs() {
  return (
    <section className="flex  w-full flex-col items-center justify-center bg-primary lg:h-screen lg:flex-row">
      <div className="relative flex lg:h-full w-full flex-col items-center justify-center p-3 text-left lg:w-half">
        <img src={HalfCircle} alt=" " className="absolute left-56 top-0 z-0" />
        <div className="p-4 lg:p-40">
          <div className="h-1 w-16 bg-blue-600"></div>
          <h2 className="mb-4 mt-8 text-2xl xl:text-5xl leading-tight">
            <snap className="">Leading companies trust us </snap><br/>
            <span className="font-bold">to develop software</span>
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            We add development capacity to tech teams. Our value isn't limited
            to building teams but is equally distributed across the project
            lifecycle. We are a custom software development company that
            guarantees the successful delivery of your project.
          </p>
          <a
            href="#none"
            className="flex items-center font-semibold text-blue-600"
          >
            See more Informations <span className="ml-2 text-xl">&#10132;</span>
          </a>
        </div>
        <img className="hidden lg:absolute bottom-6 ml-44 w-20" src={Circle} alt=" " />
      </div>
      <div className="flex lg:h-full w-full flex-col items-center  justify-center p-3 lg:w-half">
        <img className="mr-60 hidden w-20 lg:visible" src={Circle} alt=" " />
        <img src={image} alt="Team" className=" hidden lg:block lg:h-pic " />
      </div>
    </section>
  );
}
