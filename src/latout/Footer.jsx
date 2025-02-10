import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full  bg-orange-600 text-white ">
      <div className="w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="left ">
          <h2 className=" text-xl">Factory Address</h2>
          <div className="pt-4">
            <h3 className="pt-2">Climax Hosiery</h3>
            <h3 className="pt-2">
              S.I.E No. 1 Plot No. 94-B, Jinnah Road Gujranwala
            </h3>
            <h3 className="pt-2">055-3256444</h3>
            
          </div>
        </div>
        <div className="right">
          <h2 className=" text-xl">Important Links</h2>
          <div className="pt-4">
            <ul className="flex flex-col gap-3">
              <li className=" ">
                {" "}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className=" ">
                {" "}
                <NavLink
                  to="men"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400" : ""
                  }
                >
                  Men
                </NavLink>
              </li>
              <li className=" ">
                {" "}
                <NavLink
                  to="women"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400" : ""
                  }
                >
                  Women
                </NavLink>
              </li>
              <li className=" ">
                {" "}
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400" : ""
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="">
                {" "}
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
              {/* <NavLink to="refund-policy"><li>Refund Policy</li></NavLink>
            <NavLink to="shipping-policy"><li>Shipping Policy</li></NavLink> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 mb-3 flex flex-col justify-center items-center gap-5 text-3xl">
        <h2>Social Links</h2>
        <div className="flex gap-6 ">
          <FaFacebook className="text-blue-900" />
          <FaInstagram className=" text-white" />
          <NavLink to="https://wa.me/+923084808000?text=hello" target="_blank">
            <FaWhatsapp className="text-green-800" />
          </NavLink>
        </div>
      </div>

      <hr />
      <div className="w-[80%] mx-auto py-6 flex items-center justify-center">
        <div className="">© 2025, Climax Hosiery. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
