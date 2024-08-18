import { useState } from "react";
import hamburgerIcon from "../Images/hamburgerIcon.svg";
import closeIcon from "../Images/CloseIcon.svg";
import { NavLink as Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [menuActive, setMenuActive] = useState(false);

  const toggler = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggler}
        className="absolute right-0 top-[-15px] z-50 flex   transition-all duration-500 ease-in-out"
      >
        <img
          src={menuActive ? closeIcon : hamburgerIcon}
          alt={menuActive ? "Close Menu" : "Open Menu"}
          className="h-8 w-8"
        />
      </button>
      <div
        className={`fixed right-0 top-0 min-h-[400px] w-full max-w-[80%] transform border border-gray-300 bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <nav className="flex flex-col gap-6 p-10 text-xl">
          <Link
            to="/"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            Services
          </Link>
          <Link
            to="/aboutus"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            About us
          </Link>
          <button className="items-center max-w-[200px] justify-center rounded-md bg-gradient-to-tr from-[#1A05FF] to-[#6FCFFF] px-6 py-2 text-white transition-all duration-300 hover:bg-gradient-to-tl lg:flex">
            Get in touch
          </button>
        </nav>
      </div>
    </>
  );
}
