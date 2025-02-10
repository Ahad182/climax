import React from 'react'
import { FaFacebook,FaInstagram,FaWhatsapp } from "react-icons/fa";
const Map = () => {
  return (
    <div className='w-full mt-20 '>
        <div className="w-[95%] md:w-[80%] mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3379.2372873993036!2d74.19586947445403!3d32.11689341743049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDA3JzAwLjgiTiA3NMKwMTEnNTQuNCJF!5e0!3m2!1sen!2s!4v1738039615260!5m2!1sen!2s" width="100%" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="w-full my-10 flex flex-col justify-center items-center gap-5 text-3xl">
          <h2>Connect with us</h2>
          <div className="flex gap-6">
              <FaFacebook className='text-blue-900'/>
              <FaInstagram className='text-red-800'/>
              <FaWhatsapp className='text-green-800' onClick={()=>window.open("https://wa.me/+923084808000?text=hello","_blank")}/>
          </div>
        </div>
      
    </div>
  )
}

export default Map
