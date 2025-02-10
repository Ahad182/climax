import React from "react";
import { FaShirt } from "react-icons/fa6";
import aboutImage from "../assets/images/about3.jpg";
import Map from "../component/Map/Map";
import Banner from "../component/banner/Banner";
import Testimonial from "../component/Testimonial/Testimonial";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
        <Banner img={aboutImage} heading={"About Us"} para=" Discover the latest fashion trends crafted for elegance and style.
                  Your wardrobe deserves the best!"/>
      

      {/* Business Details Section */}
      <div className="container h-full mx-auto px-6 py-7 md:py-16 flex flex-col md:flex-row items-start gap-10">
        {/* Image */}
        <div className="w-full h-full md:w-1/2 border ">
          <img
            src={aboutImage}
            alt="Business Overview"
            className="w-full rounded-lg shadow-lg md:h-[500px]  object-center object-cover"
          />
        </div>

        {/* Business Info */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Our Clothing Brand</h2>
          <p className="text-lg mb-6 text-justify font-semibold">
          We take pride in crafting premium-quality winter wear for both men and women, ensuring a perfect blend of warmth, comfort, and timeless elegance. Our designs are meticulously crafted using the finest materials to provide exceptional durability, style, and coziness throughout the colder months. Whether you're looking for sophisticated outerwear or everyday essentials, our collection is designed to elevate your fashion while keeping you effortlessly warm and comfortable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Men’s Categories */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Men’s Categories</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Jersey V Neck</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Jersey Round Neck</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Pull Over</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Sando V</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Jersey XL</h4>
                </div>
              </div>
            </div>

            {/* Women’s Categories */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Women’s Categories</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Long Coat</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Short Coat</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Long Sando</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Short Sando</h4>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <FaShirt className="text-orange-600 text-2xl" />
                  <h4 className="font-medium text-xl text-gray-900">Ladies XL</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>
      <Map/>
    </div>
  );
};

export default About;
