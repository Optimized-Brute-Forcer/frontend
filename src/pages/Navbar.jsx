import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-5 cursor-pointer hover:scale-125">
        <Link to="/">Home</Link>
        </p>
        <p className="text-white text-base text-center mx-5 cursor-pointer hover:scale-125">
          <Link to="/employee/feed">Jobs</Link>
        </p>
        <p className="text-white text-base text-center mx-5 cursor-pointer hover:scale-125">
          <Link to="/">Services</Link>
        </p>
        <p className="text-white text-base text-center mx-5 cursor-pointer hover:scale-125">
          <Link to="/">Contact</Link>
        </p>
      </div>
      {/* <button type="button" className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
        <p className="text-white text-base font-semibold">
          Login
        </p>
      </button> */}

      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <Link to="/">Home</Link>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <Link to="/employee/feed">Jobs</Link>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <Link to="/">Services</Link>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <Link to="/">Contact</Link>
        </p>
      </div>
          </ul>
        )}
      </div>
    </nav>
);
}
export default Navbar;