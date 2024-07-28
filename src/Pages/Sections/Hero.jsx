import heroImage from "../Images/hero.svg";
import ArrowCircle from "../Images/ArrowCircle.svg";

export default function Hero() {
  return (
    <section className="w-screen h-screen bg-primary flex justify-center items-center">
      <div className="w-half h-full flex flex-col justify-center items-center relative">
        <div className="p-8">
          <h1>Great Product is built by great teams</h1>
          <h3>
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </h3>
          <button>Let's Get started!</button>
        </div>
        <img src={ArrowCircle} alt=" " className="absolute bottom-0" />
      </div>
      <img src={heroImage} alt="" className="h-pic" />
    </section>
  );
}
