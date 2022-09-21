import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white border-b border-gray-900 sticky top-0 bg-black">
      <h1 className="w-full text-3xl font-bold text-vader m-4">LOGO KO</h1>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4 cursor-pointer">Home</li>
        </Link>
        <a href="/#services">
          <li className="p-4 cursor-pointer">Services</li>
        </a>
        <Link to="/portfolio">
          <li className="p-4 cursor-pointer">Portfolio</li>
        </Link>
        <a href="/#about">
          <li className="p-4 cursor-pointer">About</li>
        </a>
        <Link to="/contact">
          <li className="p-4 cursor-pointer">Contact</li>
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-700 block md:hidden"
            : "fixed left-[-100%] hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-vader m-4">LOGO KO</h1>

        <ul className="pt-4 uppercase">
          <Link to="/">
            <li className="p-4 border-b border-gray-500 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="p-4 cursor-pointer">Services</li>
          </Link>
          <Link to="/portfolio">
            <li className="p-4 border-b border-gray-500 cursor-pointer">
              Portfolio
            </li>
          </Link>
          <Link to="/">
            <li className="p-4 border-b border-gray-500 cursor-pointer">
              About
            </li>
          </Link>
          <Link to="contact">
            <li className="p-4 border-b border-gray-500 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
