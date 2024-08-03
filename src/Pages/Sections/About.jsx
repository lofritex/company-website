import AboutPic from "../Images/About.svg";

export default function About() {
  return (
    <section className="relative flex h-screen mt-20 w-full flex-col items-center justify-center ">
      <h1 className="absolute left-[37%] top-16 text-6xl font-bold">
        ABOUT US
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex w-half items-center justify-center">
          <img src={AboutPic} alt="About pic" className="h-5/6" />
        </div>
        <div className="w-half p-20">
          <p className="px-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A fuga
            nisi consequuntur voluptas quos voluptatum iure voluptatibus non ut
            culpa voluptates dolore soluta asperiores, nihil ipsum qui at ea in.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            iusto rerum debitis rem quasi ullam magni officia quos ab. Explicabo
            laboriosam porro architecto similique, consectetur totam
            necessitatibus harum blanditiis obcaecati!
          </p>
          <p className="px-10 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A fuga
            nisi consequuntur voluptas quos voluptatum iure voluptatibus non ut
            culpa voluptates dolore soluta asperiores, nihil ipsum qui at ea in.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            iusto rerum debitis rem quasi ullam magni officia quos ab. Explicabo
            laboriosam porro architecto similique, consectetur totam
            necessitatibus harum blanditiis obcaecati!
          </p>
        </div>
      </div>
      <div className="absolute bottom-36 right-20 h-4 w-32 bg-blue-500"></div>
    </section>
  );
}
