import AppDev from "../Images/AppDev.svg";

export default function AppService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14 ">
        <h1 className="text-center text-5xl">App development</h1>
        <h3 className="hidden lg:block bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent">
          We create native and cross-platform mobile apps that deliver seamless
          user experiences
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center  lg:mb-32 lg:max-w-7xl lg:grid-cols-2 pt-10 px-2">
        <p className="min-h-[80%] content-center self-center text-center text-xl py-7 px-3">
          We design and develop both native and cross-platform mobile
          applications that ensure a seamless user experience and optimal
          performance. Our approach guarantees robust functionality and a
          polished, professional finish tailored to your specific needs.
        </p>
        <img src={AppDev} className="min-w-[200px] lg:min-w-[400px] max-w-[500px] row-start-1 lg:col-start-2 " alt="" />
      </div>
    </section>
  );
}
