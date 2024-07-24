import image1 from "../images/home-section-image1.svg"

export default function HomePage() {
  return (
    <section className="w-screen h-section bg-red-300 flex ">
      <div className="w-half flex flex-col justify-center items-center">
        <h1>Great Product is built by great teams</h1>
        <h3>
          We help build and manage a team of world-class developers to bring
          your vision to life.
        </h3>
        <button>Let's Get started!</button>
      </div>
      <img src={image1} alt="" />
    </section>
  );
}
