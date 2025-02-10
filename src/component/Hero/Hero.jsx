import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade"
import { Autoplay,EffectFade } from 'swiper/modules';
import men1 from "../../assets/images/swetters/manswetter1.avif"
import men2 from "../../assets/images/swetters/menswetter2.jpg"
import men3 from "../../assets/images/swetters/menswetter3.webp"
import women1 from "../../assets/images/swetters/womenswetter1.jpg"
import women2 from "../../assets/images/swetters/womenswetter2.jpg"
import women3 from "../../assets/images/swetters/womenswetter3.jpg"

import { NavLink } from 'react-router-dom';

const Hero = () => {

  
  return (
    <div className='w-[100%] h-[85vh]   relative mb-14'>
     
      <div className="w-full h-full absolute top-0 left-0  z-10 flex items-end md:items-center justify-center text-center ">
          <div className='  md:w-[40%] text-orange-600 mb-8 md:mb-0'>
          <h1 className='font-extrabold text-3xl md:text-5xl '>High Quality Products</h1>
          {/* <p className='font-bold text-lg  py-2 '>Super baggy jean $69.99</p> */}
          <NavLink to={"contact"}><button className='border-2 border-orange-500 px-5 py-3 font-semibold text-xl my-4 hover:bg-white z-20'>Shop Now</button></NavLink>
          </div>
      </div>
      <Swiper
    spaceBetween={30}
    speed={2000}
    autoplay={{delay: 2000, disableOnInteraction: false}}
    effect={"fade"}
    fadeEffect={{crossFade: true}}
    modules={[Autoplay, EffectFade]}
    className="mySwiper h-full"
   >
      
      <SwiperSlide className='w-full  h-[100%] '>
        <div className="flex  items-center justify-between  w-[100%] h-[100%] ">
            <div className="md:w-[50%] w-[100%] h-[100%]">
                <img src={women1} alt=""  className='w-full h-full object-cover object-center'/>
            </div>
            <div className="md:w-[50%] w-[0%] h-[100%]">
                <img src={men1} alt=""  className='w-full h-full object-cover object-center'/>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full  h-[100%] '>
        <div className="flex  items-center justify-between  w-[100%] h-[100%] ">
            <div className="md:w-[50%] h-[100%]">
                <img src={women2} alt=""  className='w-full h-full object-cover object-center'/>
            </div>
            <div className="md:w-[50%] w-[0%] h-[100%]">
                <img src={men2} alt=""  className='w-full h-full object-cover object-center'/>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full  h-[100%] '>
        <div className="flex  items-center justify-between  w-[100%] h-[100%] ">
            <div className="md:w-[50%] h-[100%]">
                <img src={men3} alt=""  className='w-full h-full object-cover object-center'/>
            </div>
            <div className="md:w-[50%] w-[0%] h-[100%]">
                <img src={women3} alt=""  className='w-full h-full object-cover object-center'/>
            </div>
        </div>
      </SwiperSlide>
     
      
   </Swiper>
    </div>
  )
}

export default Hero
