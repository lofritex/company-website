import WebDevImage from "../Images/WebDevImage.svg";

export default function ServicesCard() {
  return (
    <div className="m-5 flex max-w-[400px] flex-col items-center justify-center bg-[#5CA1FF] p-5  text-white">
      <img
        src={WebDevImage}
        alt="Web Developer Graphical"
        className="min-w-12 max-w-40"
      />
      <h2>Web Development</h2>
      <p>
        With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page.
      </p>
    </div>
  );
}
///* Graphic Design */


