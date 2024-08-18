import ServicesCard from "./Components/ServicesCard";
import ERPSoftware from "./Images/ERPSoftware.svg"
import Shopify from "./Images/Shopify.svg"
import PWA from "./Images/PWA.svg"
import Blockchain from "./Images/Blockchain.svg"
import CRMSoftware from "./Images/CRMSoftware.svg"
import PayrollSoftware from "./Images/PayrollSoftware.svg"
import WebDevImage from "./Images/WebDevImage.svg";
import AppDev from "./Images/AppDev.svg";
import InventoryManagement from "./Images/InventoryManagement.svg";

const data = [
  {
    "title": "Web Development",
    "caption": "Create stunning and responsive websites tailored to your business needs. Our web development team ensures a seamless user experience with cutting-edge design and functionality.",
    "image": WebDevImage,
    "link": "/web-development"
  },
  {
    "title": "App Development",
    "caption": "Transform your ideas into reality with our custom app development services. We build robust, user-friendly mobile applications for Android and iOS platforms that drive engagement and efficiency.",
    "image": AppDev,
    "link": "/app-development"
  },
  {
    "title": "ERP Software",
    "caption": "Streamline your business operations with our comprehensive ERP solutions. Integrate all your processes, from finance to supply chain, into a single platform for improved productivity and decision-making.",
    "image": ERPSoftware,
    "link": "/erp-software-development"
  },
  {
    "title": "CRM Software",
    "caption": "Enhance your customer relationships with our innovative CRM software. Manage your customer interactions, sales, and marketing strategies efficiently, leading to increased customer satisfaction and loyalty.",
    "image": CRMSoftware,
    "link": "/crm-software-development"
  },
  {
    "title": "Payroll Software",
    "caption": "Simplify your payroll processing with our easy-to-use software. Automate salary calculations, tax compliance, and employee benefits management with precision and ease.",
    "image": PayrollSoftware,
    "link": "/payroll-software-development"
  },
  {
    "title": "Inventory Management Software",
    "caption": "Optimize your inventory control with our advanced software solutions. Track stock levels, manage orders, and reduce wastage with real-time insights and analytics.",
    "image": InventoryManagement,
    "link": "/inventory-management-software"
  },
  {
    "title": "Shopify Plugins",
    "caption": "Enhance your Shopify store's functionality with our custom plugins. From payment gateways to marketing tools, we offer solutions to boost your e-commerce success.",
    "image": Shopify,
    "link": "/shopify-plugin-development"
  },
  {
    "title": "Progressive Web Application",
    "caption": "Experience the power of Progressive Web Apps (PWA) that combine the best of web and mobile applications. Enjoy fast loading times, offline access, and seamless user experiences across devices.",
    "image": PWA,
    "link": "/progressive-web-application"
  },
  {
    "title": "Web 3 / Blockchain",
    "caption": "Explore the future of the internet with our Web 3 and blockchain development services. Build decentralized applications and leverage blockchain technology for security, transparency, and innovation.",
    "image": Blockchain,
    "link": "/blockchain-development"
  }
];



export default function ServicesPage() {
  return (
    <section className="pb-20 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center lg:p-10">
        <h2 className="font-thin text-[#5CA1FF] text-xl px-5 pt-5">OUR SERVICES</h2>
        <h4 className="font-bold text-4xl lg:max-w-half text-center lg:px-10 py-5 ">We provide great services for our customers based on needs</h4>
      </div>
    <div className="grid lg:grid-cols-3 lg:grid-rows-3 justify-items-center max-w-screen-xl ">
      {data.map( (cardData => {
        return (
          <ServicesCard data={cardData} key={cardData.title}/>
        )
      }) )

      }
    </div>
    </section>
  )
}
