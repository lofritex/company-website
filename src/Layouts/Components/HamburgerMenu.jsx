import { useState } from "react";
import icon from "../../../public/icon.svg";

import { NavLink as Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [menuActive, setMenuActive] = useState(true);

  const toggler = () => {
    return setMenuActive((prev) => !prev);
  };
  return (
    <div className="flex justify-end">
      <button onClick={toggler}>
        <img src={icon} alt="Hamburger Menu" className="w-10" />
      </button>
      {menuActive && (
        <div className="absolute h-44 w-half bg-red-500">
          <nav className="lg:hidden w-half flex flex-col items-center justify-around">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/aboutus">How it works</Link>
          </nav
          >
          <button className="hidden items-center justify-center rounded-md bg-gradient-to-tr from-[#1A05FF] to-[#6FCFFF] px-6 py-2 text-white lg:flex">
            Get in touch
          </button>
        </div>
      )}
    </div>
  );
}
