import Logo from "./Images/Logo.svg";
import { NavLink as Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="w-full border">
      <div className="flex flex-row justify-between">
        <div className="flex min-w-[35%] flex-col items-center">
          <div className="ml-7 w-full lg:px-6">
            <img src={Logo} alt="Lofritex Logo" className="my-7 w-logo" />
          </div>
        </div>
        <div className="hidden w-[25%] lg:block flex-col items-center text-center">
          <nav>
            <h2 className="mb-2 mt-7 text-lg font-bold">Links</h2>
            <ul className="text-footerCaption">
              <li>
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="">
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="min-w-[40%] self-end text-right pr-10 pb-5">
          <h5 className="mb-2 mt-7 text-lg font-bold">Contact us</h5>
          <address className="not-italic text-footerCaption">
            Nandanam, Chathoth,
            <br />
            Chingapuram P.O,
            <br />
            Thikkody, Quilandy, Kozhikode,
            <br />
            Kerala, India
            <br />
          </address>
          <p className="text-footerCaption">+91 85905 71947</p>
        </div>
      </div>
      <div className="flex max-h-[30px] text-sm lg:max-h-[60px] w-full items-center justify-center border p-5 text-center ">
        © 2024 Copyright by Lofritex IT Solutions LLP. All rights reserved.
      </div>
    </nav>
  );
}
