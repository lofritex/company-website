import ValueCards from "../Components/ValueCards";
import valuesPic from "../Images/valuesPic.svg";
import "./values.css";

const data = {

  loyalty :{
    index : "01",
    title : "LOYALTY",
    content : "We are dedicated to building and maintaining long-lasting relationships with our clients and partners. Our commitment to loyalty ensures that we consistently deliver on our promises and support those we work with, fostering trust and reliability in every interaction."
  },
  friendship: {
    index: "02",
    title: "FRIENDSHIP",
    content:
      "At the heart of our company culture is the spirit of friendship. We believe in creating a warm and welcoming environment where collaboration and mutual respect thrive. By treating each other and our clients as friends, we cultivate a supportive and positive atmosphere that enhances our collective success.",
  },
  expertise : {
    index: "03",
    title : "EXPERTISE",
    content : "We pride ourselves on our deep knowledge and proficiency in our field. Our team is composed of highly skilled professionals who are dedicated to continuous learning and improvement. This commitment to expertise ensures that we provide exceptional service and innovative solutions to meet the evolving needs of our clients."
  },
  integrity : {
    index : "04",
    title : "INTEGRITY",
    content : "We uphold the highest standards of integrity in all our actions. Transparency, honesty, and ethical behavior are the cornerstones of our operations, ensuring that we earn the trust and respect of our clients, partners, and the community."
  },
  accountability : {
    index : "05",
    title : "ACCOUNTABILITY",
    content :"We take responsibility for our actions and the outcomes of our work. By holding ourselves accountable, we ensure that we deliver on our commitments and maintain the trust of our stakeholders."
  },
  excellence : {
    index : "06",
    title : "EXCELLENCE",
    content : "We pursue excellence in everything we do, setting high standards for quality and performance. Through continuous improvement and a commitment to best practices, we aim to achieve outstanding results for our clients and stakeholders."
  }
};

export default function Values() {
  return (
    <section
      id="values"
      className="mb-20 flex flex-col items-center justify-center"
    >
      <div className="flex gap-32">
        <ValueCards value={data.loyalty} />
        <ValueCards value={data.friendship} />
      </div>

      <div className="flex items-center justify-center">
        <ValueCards value={data.excellence} />
        <img
          src={valuesPic}
          alt="Values Pic"
          id="valuesPic"
          className="max-h-[600px] px-10 py-10"
        />
        <ValueCards value={data.expertise} />
      </div>
      <div className="flex gap-32">
        <ValueCards value={data.accountability} />
        <ValueCards value={data.integrity} />
      </div>
    </section>
  );
}
