import { NavLink as Link } from "react-router-dom";
import Logo from "./Images/Logo.svg"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-nav fixed bg-white z-50">
      <img src={Logo} alt="Lofritex Logo" className="w-logo m-5" />
      <span className="flex w-[60%] justify-around items-center">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/aboutus">How it works</Link>
      </span>
      <button className="m-5 bg-blue-500 text-white">Contact Us</button>
    </nav>
  );
}
