import { NavLink as Link } from "react-router-dom";
import Logo from "./Images/Logo.svg";
import HamburgerMenu from "./Components/HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-nav bg-white z-50 p-4 lg:p-10 border ">
      <img src={Logo} alt="Lofritex Logo" className="w-logo lg:m-5" />
      <span className="hidden lg:flex w-half justify-around items-center">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/aboutus">About us</Link>
      </span>
      <button className="px-6 py-2 bg-gradient-to-tr from-[#1A05FF] to-[#6FCFFF] text-white rounded-md  items-center justify-center hidden lg:flex">
      Get in touch
      </button>
      <div className="w-full lg:hidden">
      <HamburgerMenu/>  
      </div>
    </nav>
  );
}
  