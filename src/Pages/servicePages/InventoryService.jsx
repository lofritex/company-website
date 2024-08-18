import InventoryImage from "../Images/InventoryManagement.svg";

export default function InventoryService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14">
        <h1 className="text-center text-5xl">Inventory Management Software</h1>
        <h3 className="hidden bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent lg:block">
          We build custom inventory management software that optimizes your
          stock levels, reduces waste, and improves efficiency.
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center px-2 pt-5 lg:mb-32 lg:max-w-7xl lg:grid-cols-2">
        <p className="min-h-[80%] content-center self-center py-7 text-center text-xl px-3">
          Our inventory management solutions are designed to provide real-time
          tracking, automate reorder processes, and integrate with your existing
          systems. We ensure your inventory is managed efficiently, minimizing
          waste and maximizing profitability.
        </p>
        <img
          src={InventoryImage}
          className="row-start-1 min-w-[200px] max-w-[500px] lg:col-start-2 lg:min-w-[400px]"
          alt="Inventory Management Software Illustration"
        />
      </div>
    </section>
  );
}
