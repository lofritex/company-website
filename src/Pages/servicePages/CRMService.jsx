import CRMImage from "../Images/CRMSoftware.svg";

export default function CRMService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14">
        <h1 className="text-center text-5xl">CRM Software</h1>
        <h3 className="hidden bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent lg:block">
          We build powerful CRM software that enhances customer relationships,
          streamlines workflows, and drives business growth.
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center px-2 pt-10 lg:mb-32 lg:max-w-7xl lg:grid-cols-2">
        <p className="min-h-[80%] content-center self-center py-7 text-center text-xl px-3">
          Our custom CRM solutions are designed to optimize customer interactions,
          improve sales processes, and provide insightful analytics. We ensure
          your CRM system is tailored to meet your unique business needs and
          scale with your growth.
        </p>
        <img
          src={CRMImage}
          className="row-start-1 min-w-[200px] max-w-[500px] lg:col-start-2 lg:min-w-[400px]"
          alt="CRM Software Illustration"
        />
      </div>
    </section>
  );
}
