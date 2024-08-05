import ValueCards from "../Components/ValueCards";
import valuesPic from "../Images/valuesPic.svg";
import "./values.css";

const data = {
  index: "02",
  title: "FRIENDSHIP",
  content:
    "At the heart of our company culture is the spirit of friendship. We believe in creating a warm and welcoming environment where collaboration and mutual respect thrive. By treating each other and our clients as friends, we cultivate a supportive and positive atmosphere that enhances our collective success.",
};

export default function Values() {
  return (
    <section id="values" className="flex flex-col items-center justify-center mb-20">
      <div className="flex gap-32">
        <ValueCards value={data} />
        <ValueCards value={data} />
      </div>

      <div className="flex justify-center items-center">
        <ValueCards value={data} />
        <img
          src={valuesPic}
          alt="Values Pic"
          id="valuesPic"
          className="max-h-[600px] py-10 px-10"
        />
        <ValueCards value={data} />
      </div>
      <div className="flex gap-32">
        <ValueCards value={data} />
        <ValueCards value={data} />
      </div>
    </section>
  );
}
