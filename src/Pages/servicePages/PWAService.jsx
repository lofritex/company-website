import PWAImage from "../Images/PWA.svg";

export default function PWAService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14">
        <h1 className="text-center text-5xl">Progressive Web Application</h1>
        <h3 className="hidden bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent lg:block">
          We develop Progressive Web Applications that deliver fast, reliable,
          and engaging user experiences across all devices.
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center px-2 pt-5 lg:mb-32 lg:max-w-7xl lg:grid-cols-2">
        <p className="min-h-[80%] content-center self-center py-7 text-center text-xl px-3">
          Our PWAs are designed to combine the best of web and mobile apps,
          offering offline functionality, push notifications, and responsive
          design. We ensure your PWA provides a seamless experience that keeps
          users engaged and coming back.
        </p>
        <img
          src={PWAImage}
          className="row-start-1 min-w-[200px] max-w-[500px] lg:col-start-2 lg:min-w-[400px]"
          alt="Progressive Web Application Development Illustration"
        />
      </div>
    </section>
  );
}
