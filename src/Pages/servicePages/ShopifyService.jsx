import ShopifyPluginsImage from "../Images/Shopify.svg";

export default function ShopifyService() {
  return (
    <section className="flex flex-col items-center justify-center p-4 lg:p-10">
      <div className="flex max-w-7xl flex-col items-center px-14 lg:pt-14">
        <h1 className="text-center text-4xl">Shopify Plugins</h1>
        <h3 className="hidden bg-gradient-to-r from-[#1B00FF] to-[#00AFFF] bg-clip-text pt-5 text-center text-3xl font-normal text-transparent lg:block">
          We create custom Shopify plugins to enhance your online store's
          functionality and improve the shopping experience.
        </h3>
      </div>
      <div className="grid grid-cols-1 justify-items-center px-2 pt-5 lg:mb-32 lg:max-w-7xl lg:grid-cols-2">
        <p className="min-h-[80%] content-center self-center py-7 text-center text-xl px-3">
          Our custom Shopify plugins are designed to seamlessly integrate with
          your store, offering features that boost sales, streamline operations,
          and enhance customer engagement. We ensure your store is equipped with
          the tools it needs to thrive in a competitive market.
        </p>
        <img
          src={ShopifyPluginsImage}
          className="row-start-1 min-w-[200px] max-w-[500px] lg:col-start-2 lg:min-w-[400px]"
          alt="Shopify Plugins Development Illustration"
        />
      </div>
    </section>
  );
}
