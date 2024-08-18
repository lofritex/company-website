import WebDevImage from "../Images/WebDevImage.svg";

export default function WebService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14">
        <h1 className="text-center text-5xl">Web development</h1>
        <h3 className="hidden bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent lg:block">
          We create custom websites optimized for performance, seamlessly
          integrate advanced features, and ensure scalability to support
          business growth.
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center px-2 pt-10 lg:mb-32 lg:max-w-7xl lg:grid-cols-2">
        <p className="min-h-[80%] content-center self-center py-7 text-center text-xl px-3">
          We deliver custom websites tailored to your goals, featuring seamless
          integration, SEO optimization, and scalability to grow with your
          business. Our solutions ensure both high performance and adaptability.
        </p>
        <img
          src={WebDevImage}
          className="row-start-1 min-w-[200px] max-w-[500px] lg:col-start-2 lg:min-w-[400px]"
          alt=""
        />
      </div>
    </section>
  );
}
