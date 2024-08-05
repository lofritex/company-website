import Logo from "./Images/Logo.svg";

export default function Footer() {
  return (
    <nav className=" w-full border  ">
      <div className="flex flex-row justify-center ">
        <div className="w-[35%] h-60 flex flex-col items-center">
          <div className="w-ful ml-7">
          <img src={Logo} alt="Lofritex Logo" className="w-logo my-7 " />
          <p className="p-10px text-footerCaption ">
            Lorem ipsum is simply a dummy text of the printing and typesetting
            industry
          </p>
          </div>
        </div>
        <div className="w-[25%] h-60 flex flex-col items-center ">
          <nav>
          <h2 className="font-bold text-lg mt-7 mb-2 ">Links</h2>
          <ul className="text-footerCaption">
            <li>
              <a href="#link" className="">
                About Us
              </a>
            </li>
            <li>
              <a href="#link" className="">
                Services
              </a>
            </li>
            <li>
              <a href="#link" className="">
                How it works
              </a>
            </li>
            <li>
              <a href="#link" className="">
                Careers
              </a>
            </li>
            <li>
              <a href="#link" className="">
                Areas We Serve
              </a>
            </li>
          </ul>
          </nav>
        </div>
        <div className="w-[40%] h-60 ">
          <h5 className="font-bold text-lg mt-7 mb-2">Contact us</h5>
          <p className="text-footerCaption">
            Lorem ipsum is simply a dummy text of the printing and typesetting
            industry
          </p>
          <p className="text-footerCaption">+918130934013</p>
        </div>
      </div>
      <div className="w-full h-[90px] border p-2 flex justify-center items-center">
        © 2023 Copyright by Lofritex Developers. All rights reserved.
      </div>
    </nav>
  );
}
