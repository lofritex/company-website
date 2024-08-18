import BlockchainImage from "../Images/Blockchain.svg";

export default function BlockchainService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14">
        <h1 className="text-center text-5xl">Web3 & Blockchain Development</h1>
        <h3 className="hidden bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent lg:block">
          We specialize in developing decentralized applications and blockchain
          solutions that empower the next generation of the internet.
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center px-2 pt-5 lg:mb-32 lg:max-w-7xl lg:grid-cols-2">
        <p className="min-h-[80%] content-center self-center py-7 text-center text-xl px-3">
          Our Web3 and blockchain solutions are designed to bring transparency,
          security, and efficiency to your business operations. From smart
          contracts to decentralized apps, we deliver scalable and robust
          blockchain systems that drive innovation and trust.
        </p>
        <img
          src={BlockchainImage}
          className="row-start-1 min-w-[200px] max-w-[500px] lg:col-start-2 lg:min-w-[400px]"
          alt="Web3 and Blockchain Development Illustration"
        />
      </div>
    </section>
  );
}
