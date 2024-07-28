import { NavLink as Link } from "react-router-dom";
import Logo from "./Images/Logo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-nav fixed bg-white z-50 p-10 border">
      <img src={Logo} alt="Lofritex Logo" className="w-logo m-5" />
      <span className="flex w-[50%] justify-around items-center">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/aboutus">How it works</Link>
      </span>
      <button className="px-6 py-2 bg-gradient-to-r from-[#1F10FF] to-[#1760cc] text-white rounded-md flex items-center justify-center">
        Contact us
      </button>

    </nav>
  );
}
