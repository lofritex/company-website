import AboutPic from "../Images/About.svg";

export default function About() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center">
      <h1 className="p-10 text-6xl font-bold">ABOUT US</h1>
      <div className="flex items-center justify-center">
        <div className="flex w-half items-center justify-center">
          <img src={AboutPic} alt="About pic" className="h-6/7" />
        </div>
        <div className="w-half p-20">
          <p className="px-10">
            Welcome to Lofritex, where our commitment to Loyalty, Friendship,
            Technology, and Expertise defines everything we do. Our name stands
            as a testament to these core values, guiding us in every aspect of
            our business.
            <br/>
            At Lofritex, we are driven by our loyalty towards our
            clients and technology. We believe in bringing our technological
            expertise to every project, ensuring that we deliver innovative
            solutions that meet the unique needs of our clients. Our dedicated
            team of professionals works tirelessly to build strong, lasting
            relationships with our partners, clients, and the community.
          </p>
        </div>
      </div>
      <div className="absolute bottom-36 right-20 h-4 w-32 bg-blue-500"></div>
    </section>
  );
}
