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
        className="flex h-nav w-full justify-end transition-all duration-500 ease-in-out absolute top-0 right-0 z-30 p-4"
      >
        <img
          src={menuActive ? closeIcon : hamburgerIcon}
          alt={menuActive ? "Close Menu" : "Open Menu"}
          className="w-8 h-8"
        />
      </button>

      <div
        className={`fixed right-0 top-0 min-h-[400px] w-full max-w-[80%] bg-white transition-transform duration-500 ease-in-out transform ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <nav className="flex flex-col gap-6 p-10 text-xl">
          <Link to="/" className="hover:text-blue-500 transition-colors duration-200">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-500 transition-colors duration-200">
            Services
          </Link>
          <Link to="/aboutus" className="hover:text-blue-500 transition-colors duration-200">
            About us
          </Link>
          <button className="items-center justify-center rounded-md bg-gradient-to-tr from-[#1A05FF] to-[#6FCFFF] px-6 py-2 text-white lg:flex hover:bg-gradient-to-tl transition-all duration-300">
            Get in touch
          </button>
        </nav>
      </div>
    </>
  );
}
