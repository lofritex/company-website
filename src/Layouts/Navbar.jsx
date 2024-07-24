import { NavLink as Link } from "react-router-dom";
import Logo from "../images/Logo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-nav fixed bg-white">
      <img src={Logo} alt="Lofritex Logo" className="w-28 grow-0" />
      <span className="flex grow justify-around items-center">
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About US</Link>
        <Link to="/services">Services</Link>
      </span>
      <button className="">Contact Us</button>
    </nav>
  );
}
