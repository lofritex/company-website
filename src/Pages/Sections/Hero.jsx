import heroImage from "../Images/Hero.svg";
import ArrowCircle from "../Images/ArrowCircle.svg";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-primary lg:h-screen lg:flex-row">
      <div className="flex h-full w-full flex-col items-start justify-center lg:w-half">
        <div className="p-4 lg:py-20">
          <h2 className="mb-4 mt-8 text-3xl leading-tight xl:text-5xl">
            Great{" "}
            <span className="bg-gradient-to-b from-[#69C1FF] to-[#2013FF] bg-clip-text font-bold text-transparent">
              Product
            </span>{" "}
            is <br />{" "}
            <span className="font-bold">
              built by great{" "}
              <span className="bg-gradient-to-b from-[#69C1FF] to-[#2013FF] bg-clip-text text-transparent">
                teams
              </span>
            </span>
          </h2>
          <h3>
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </h3>
          <button>Let's Get started!</button>
        </div>
        <img
          src={ArrowCircle}
          alt=" "
          className="absolute bottom-0 left-60 hidden lg:block"
        />
      </div>
      <img src={heroImage} alt="" className="max-w-72 lg:mb-4 lg:h-pic" />
    </section>
  );
}
