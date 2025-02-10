import React from 'react'
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Map from '../component/Map/Map';
import Banner from '../component/banner/Banner';
import aboutImage from "../assets/images/about.jpg";

const Contact = () => {
  return (
    <div className='w-full'>
      <Banner img={aboutImage} heading={"Contact Us"} para=" Discover the latest fashion trends crafted for elegance and style.
                  Your wardrobe deserves the best!"/>
      <div className='w-full my-20'>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h1 className='text-3xl my-10 font-bold text-orange-600'>Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center bg-orange-600 hover:bg-white justify-between gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-white rounded-3xl">
                <FaPhone className='text-5xl'/>
                <h3 >055-3256444</h3>
            </div>

            <div className="flex flex-col items-center bg-orange-600 hover:bg-white justify-between gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-white rounded-3xl" onClick={()=>window.open("https://wa.me/+923084808000?text=hello","_blank")}>
                <FaWhatsapp className='text-5xl'/>
                <h3 >03084808000</h3>
            </div>

            <div className="flex flex-col items-center justify-between bg-orange-600 hover:bg-white gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-white rounded-3xl">
                <FaInstagram className='text-5xl'/>
                <h3 >03084808000</h3>
            </div>

            <div className="flex flex-col items-center justify-between bg-orange-600 hover:bg-white gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-white rounded-3xl">
                <MdEmail className='text-5xl'/>
                <h3 >climax@gmail.com</h3>
            </div>
        </div>

        <div className="w-[100%] mx-auto mt-8">
            <h1 className='text-xl md:text-4xl font-bold text-center mt-20 text-orange-600'>Location(Gujranwala)</h1>
            <p className='text-center pt-2 font-medium'>S.I.E No. 1 Plot No. 94-B, Jinnah Road Gujranwala</p>
            <Map/>

        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Contact
