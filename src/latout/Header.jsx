import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaAngleRight } from 'react-icons/fa6';

const Header = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

 
  
  return (
    <>
      <div className={`capitalize w-full bg-orange-500 relative h-[10vh]  flex items-center`}>
        <div className="w-[90%] mx-auto py-5 relative">
          <nav className='w-full flex items-center justify-between md:justify-normal relative z-[100]  font-bold text-center text-[20px] text-white '>
            <div className="logo flex items-center md:w-[30%]">
              {/* <img src={logo} alt="" className='w-14 md:w-20'/> */}
              Climax Hosiery
            </div>
            <ul className='md:flex items-center font-extralight gap-5 font-serif hidden '>
              <li className='p-3 '> <NavLink to="/" className={({ isActive }) => (isActive ? "text-black" : "")}>Home</NavLink></li>
              <li className='p-3 '> <NavLink to="men" className={({ isActive }) => (isActive ? "text-black" : "")}>Men</NavLink></li>
              <li className='p-3 '> <NavLink to="women" className={({ isActive }) => (isActive ? "text-black" : "")}>Women</NavLink></li>
              <li className='p-3 '> <NavLink to="about" className={({ isActive }) => (isActive ? "text-black" : "")}>About</NavLink></li>
             
              <li className='p-3'> <NavLink to="contact" className={({ isActive }) => (isActive ? "text-black" : "")}>Contact</NavLink></li>
            </ul>
            <div className="lg:hidden">
              <HiMenu onClick={() => setToggle(!toggle)} />
            </div>
          </nav>
        </div>
      </div>

      {/* Small screen menu */}
      <div className={`w-full h-screen overflow-y-auto bg-orange-600 px-4 text-white fixed top-0 left-0 ${toggle ? "translate-x-0" : "translate-x-[-100%]"} transition-transform duration-1000 ease-in-out z-[500]`}>
        <div className="flex flex-col w-full">
          <div className="flex w-full items-center justify-between pt-6">
            <NavLink to="/">
              {/* <img src={logo} alt="" className="w-[80px]" /> */} Brand Logo
            </NavLink>

            <div className="p-2 border border-white cursor-pointer text-xl font-semibold" onClick={() => setToggle(!toggle)}>
              Close
            </div>
          </div>
          <div className="w-full links-container mt-6 font-semibold text-[17px]">
            <ul className="flex flex-col gap-5 cursor-pointer">
            <li className='p-3 border-b-2 border-white border-r-4'   onClick={() => setToggle(!toggle)}> <NavLink to="/" className={({ isActive }) => (isActive ? "text-black" : "")}>Home</NavLink></li>
              <li className='p-3 border-b-2 border-white border-r-4'  onClick={() => setToggle(!toggle)}> <NavLink to="men" className={({ isActive }) => (isActive ? "text-black" : "")}>Men</NavLink></li>
              <li className='p-3 border-b-2 border-white border-r-4'  onClick={() => setToggle(!toggle)}> <NavLink to="women" className={({ isActive }) => (isActive ? "text-black" : "")}>Women</NavLink></li>
              <li className='p-3 border-b-2 border-white border-r-4'  onClick={() => setToggle(!toggle)}> <NavLink to="about" className={({ isActive }) => (isActive ? "text-black" : "")}>About</NavLink></li>
             
              <li className='p-3 border-b-2 border-white border-r-4' onClick={() => setToggle(!toggle)}> <NavLink to="contact" className={({ isActive }) => (isActive ? "text-black" : "")}>Contact</NavLink></li>

              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
