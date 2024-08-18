import PayrollImage from "../Images/PayrollSoftware.svg";

export default function PayrollService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14">
        <h1 className="text-center text-5xl">Payroll Software </h1>
        <h3 className="hidden bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent lg:block">
          We develop robust payroll software that simplifies payroll management,
          ensures compliance, and enhances financial accuracy for your business.
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center px-2 pt-10 lg:mb-32 lg:max-w-7xl lg:grid-cols-2">
        <p className="min-h-[80%] content-center self-center py-7 text-center text-xl px-3">
          Our payroll software solutions are tailored to streamline payroll
          processes, automate tax calculations, and integrate with existing
          HR systems. We focus on delivering secure, reliable, and scalable
          solutions to meet your payroll management needs.
        </p>
        <img
          src={PayrollImage}
          className="row-start-1 min-w-[200px] max-w-[500px] lg:col-start-2 lg:min-w-[400px]"
          alt="Payroll Software Illustration"
        />
      </div>
    </section>
  );
}
