import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination,Navigation,Autoplay} from "swiper/modules"
import "swiper/css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import profile2 from "../../assets/images/profile/profile2.jpg"
import profile5 from "../../assets/images/profile/profile5.jpg"
import profile6 from "../../assets/images/profile/profile6.jpg"
const Testimonial = () => {
  return (
    <div className='w-full my-10  mt-20'>
      <h1 className='text-center font-bold text-3xl md:text-5xl'>Testimonials</h1>
      <div className="w-[80%] mx-auto mt-7 relative">
        <Swiper
        modules={[Pagination,Navigation,Autoplay]}
        // autoplay={{delay:2000}}
        loop={true}
        // navigation={{
        //     nextEl: '.custom-next',
        //     prevEl: '.custom-prev',
        //   }}
        pagination={{ clickable: true }}
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
        }}
        >
            <SwiperSlide>
                <div className="w-full  shadow-black shadow-lg py-4 bg-slate-400 rounded-lg">
                    <div className="upper flex gap-5 items-center justify-center ">
                        <div className="logo w-20 h-20 border-4 border-green-950 rounded-full overflow-hidden">
                            <img src={profile2} alt="" className="w-full h-full  object-center"/>
                        </div>
                        
                    </div>
                    <div className="message p-4 font-semibold">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates corrupti reiciendis.</p>
                    </div>
                    <div className="">
                    <div className="headings font-bold p-4"> <h2>Asad Zahid</h2></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full  shadow-black shadow-lg py-4 bg-green-400 rounded-lg">
                    <div className="upper flex gap-5 items-center justify-center ">
                        <div className="logo w-20 h-20 border-4 border-green-950 rounded-full overflow-hidden">
                            <img src={profile5} alt="" className="w-full h-full  object-center"/>
                        </div>
                        
                    </div>
                    <div className="message p-4 font-semibold">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates corrupti reiciendis.</p>
                    </div>
                    <div className="">
                    <div className="headings font-bold p-4"> <h2>Abdullah Hayat</h2></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full  shadow-black shadow-lg py-4 bg-[#FFDBAC] rounded-lg">
                    <div className="upper flex gap-5 items-center justify-center ">
                        <div className="logo w-20 h-20 border-4 border-green-950 rounded-full overflow-hidden">
                            <img src={profile6} alt="" className="w-full h-full  object-center"/>
                        </div>
                        
                    </div>
                    <div className="message p-4 font-semibold">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates corrupti reiciendis.</p>
                    </div>
                    <div className="">
                    <div className="headings font-bold p-4"> <h2>Abdul Ahad</h2></div>
                    </div>
                </div>
            </SwiperSlide>
            
          
            
           
        </Swiper>
      </div>

    </div>
  )
}

export default Testimonial
