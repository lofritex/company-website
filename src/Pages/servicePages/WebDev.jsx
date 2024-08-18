import ERPImage from "../Images/ERPSoftware.svg";

export default function WebDev() {
  return (
    <section className="flex   flex-col items-center justify-center  p-10">
      <div className="flex max-w-7xl flex-col items-center pt-14 px-14">
        <h1 className="text-center text-5xl">ERP Software</h1>
        <h3 className="bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent">
          We design and develop custom ERP solutions that streamline your
          business operations
        </h3>
      </div>
      <div className="grid grid-cols-2 justify-items-center  max-w-7xl lg:mb-32">
        <p className=" min-h-[80%] text-xl content-center self-center text-center">
          We craft custom ERP solutions to optimize and streamline your business
          operations. Our tailored systems integrate seamlessly with your
          current infrastructure, providing robust and scalable functionality to
          address your unique requirements.
        </p>
        <img src={ERPImage} className="min-w-[400px] max-w-[500px] " alt="" />
      </div>
    </section>
  );
}
