import React from 'react'
const Banner = ({img,heading,para}) => {
  return (
    <div className='w-full'>
      <div className="relative w-full h-[70vh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <div className="relative flex flex-col items-center justify-center h-full text-orange-600 text-center px-6">
                <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide">
                  {heading}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-white">
                 {para}
                </p>
                
              </div>
            </div>
    </div>
  )
}

export default Banner
