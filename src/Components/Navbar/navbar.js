import React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";

const navbar = () => {
  return (
    <div className="w-full   h-full flex justify-between py-3 overflow-x-clip">
      <div className=" w-1/6 md:1/5 pl-5 mt-[-10px]">
        <img
          className="rounded-full h-10 md:h-12 "
          src={Logo}
          alt="Logo Image"
          style={{ width: "50px" }}
        ></img>
      </div>

      <ul className=" w-3/5  text-sm sm:w-1/2 md:text-md lg:text-lg  flex justify-around ">
        <li>
          <Link
            className="text-white font-mono hover:text-green-300 hover:cursor-pointer"
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-mono hover:text-green-300 hover:cursor-pointer"
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-mono hover:text-green-300 hover:cursor-pointer"
            activeClass="active"
            to="service"
            smooth={true}
            duration={500}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-mono hover:text-green-300 hover:cursor-pointer"
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
