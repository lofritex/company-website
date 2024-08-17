import Carousel from "../Components/Carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Cards from "../Components/Cards";
import WebDevIcon from "../Images/WebDevIcon.svg"


export default function Services() {
  const data = [
    {
      title: "Web Development",
      caption: "We craft responsive and modern websites tailored to your needs. Ensure your online presence stands out with cutting-edge design.",
      image: WebDevIcon,
    },
    {
      title: "App Development",
      caption: "Build user-friendly mobile apps that engage and retain customers. Deliver seamless experiences on Android and iOS platforms.",
      image: WebDevIcon,
    },
    {
      title: "ERP Software",
      caption: "Streamline your operations with our comprehensive ERP solutions. Integrate all business processes into one efficient system.",
      image: WebDevIcon,
    },
    {
      title: "CRM Software",
      caption: "Enhance customer management for improved relationships. Centralize your customer data and optimize your sales process.",
      image: WebDevIcon,
    },
    {
      title: "Payroll Software",
      caption: "Automate payroll with precision and ease. Manage salaries, taxes, and benefits seamlessly in one platform.",
      image: WebDevIcon,
    },
    {
      title: "Inventory Management Software",
      caption: "Optimize inventory control with real-time tracking. Reduce wastage and streamline supply chain management.",
      image: WebDevIcon,
    },
    {
      title: "Shopify Plugins",
      caption: "Enhance your Shopify store with custom plugins. Boost sales with specialized tools and integrations.",
      image: WebDevIcon,
    },
    {
      title: "Progressive Web Application",
      caption: "Deliver fast, offline-ready web apps. Combine the best of mobile and web experiences for your users.",
      image: WebDevIcon,
    },
    {
      title: "Web 3 / Blockchain",
      caption: "Explore decentralized solutions with our blockchain expertise. Build secure, transparent, and innovative applications.",
      image: WebDevIcon,
    },
  ];
  
  

  return (
    <>
    <section className="bg-secondary py-10 hidden lg:block">
        <Swiper
          spaceBetween={35}
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          navigation={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          modules={[Pagination, Navigation,Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className=" "
        >
          {data.map((card, index) => (
            <SwiperSlide key={card.title}>
              {({ isActive }) => <Cards card={card} isActive={isActive} />}
            </SwiperSlide>
          ))}
        </Swiper>
      <div className="custom-pagination mt-6 flex justify-center"></div> 
      {/* <Carousel data={data} /> */}
    </section>

    <section className="bg-secondary p-5 block  lg:hidden">
    <Swiper
      spaceBetween={35}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      navigation={false}
      pagination={{
        el: ".custom-pagination",
        clickable: true,
      }}
      modules={[Pagination, Navigation,Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      className=" "
    >
      {data.map((card, index) => (
        <SwiperSlide key={card.title}>
          {({ isActive }) => <Cards card={card} isActive={isActive} />}
        </SwiperSlide>
      ))}
    </Swiper>
  <div className="custom-pagination m-2  flex justify-center"></div> 
  {/* <Carousel data={data} /> */}
</section>
</>
  );
}
