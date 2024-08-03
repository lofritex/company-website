import Carousel from "../Components/Carousel";
import WebDevIcon from "../Images/WebDevIcon.svg";


export default function Services() {
  const data = [
    {
      title: "Website Maintenance ",
      content:
        "Keep your website running smoothly with our maintenance services, including regular updates, security checks, and performance optimization.",
      image: WebDevIcon,
    },
    {
      title: "Custom Web Solutions ",
      content:
        "Get tailored web solutions to meet your unique business requirements, from simple websites to complex web applications and everything in between.",
      image: WebDevIcon,
    },
    {
      title: "Responsive Web Design",
      content:
        "We create websites that are responsive and adapt seamlessly to all devices, ensuring a great user experience on desktops, tablets, and smartphones.",
      image: WebDevIcon,
    },
    {
      title: "E-commerce Development",
      content:
        "Boost your sales with a powerful e-commerce website that provides a secure and user-friendly shopping experience, tailored to your business needs.",
      image: WebDevIcon,
    },
    {
      title: "SEO Optimization",
      content:
        "Improve your website's visibility on search engines with our expert SEO services, designed to drive more traffic and enhance your online presence.",
      image: WebDevIcon,
    },
    {
      title: "Content Management Systems",
      content:
        "Manage your content effortlessly with our customized CMS solutions, giving you full control over your website's content without needing technical skills.",
      image: WebDevIcon,
    },
    {
      title: "UI/UX Design",
      content:
        "Deliver an exceptional user experience with our UI/UX design services, focused on creating intuitive and visually appealing interfaces for your website.",
      image: WebDevIcon,
    },
    {
      title: "Web Application Development",
      content:
        "Transform your business ideas into scalable web applications with our development services, using the latest technologies and best practices.",
      image: WebDevIcon,
    },
    {
      title: "Website Maintenance",
      content:
        "Keep your website running smoothly with our maintenance services, including regular updates, security checks, and performance optimization.",
      image: WebDevIcon,
    },
    {
      title: "Custom Web Solutions",
      content:
        "Get tailored web solutions to meet your unique business requirements, from simple websites to complex web applications and everything in between.",
      image: WebDevIcon,
    },
    {
      title: "Responsive Web Design ",
      content:
        "We create websites that are responsive and adapt seamlessly to all devices, ensuring a great user experience on desktops, tablets, and smartphones.",
      image: WebDevIcon,
    },
    {
      title: "E-commerce Development ",
      content:
        "Boost your sales with a powerful e-commerce website that provides a secure and user-friendly shopping experience, tailored to your business needs.",
      image: WebDevIcon,
    },
  ];



   


  return (
    <section className=" w-full h-[70vh] overflow-hidden border bg-secondary">
      <Carousel data={data} />
    </section>
  );
}
