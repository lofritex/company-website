import heroImage from "../Images/hero.svg"

export default function Hero() {
  return (
    <section className="w-screen h-screen bg-primary flex justify-center items-center">
      <div className="w-half flex flex-col justify-center items-center">
        <h1>Great Product is built by great teams</h1>
        <h3>
          We help build and manage a team of world-class developers to bring
          your vision to life.
        </h3>
        <button>Let's Get started!</button>
      </div>
      <img src={heroImage} alt="" className="h-[80%]"/>
    </section>
  );
}
