import React from "react";
import imgage from "../assets/images/swetters/manswetter1.avif"
import manimgage2 from "../assets/images/swetters/menswetter2.jpg"

import imgage2 from "../assets/images/swetters/womenswetter1.jpg"
import womenimgage2 from "../assets/images/swetters/womenswetter2.jpg"
const SubCategorySection = ({ category,subtitle}) => {
  return (
    <div className=" md:w-[80%] mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 capitalize">
        {category} {subtitle}
      </h2>

      {category === "men" ? (
        // Men Subcategories
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={imgage} alt="Jersey V Neck" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Jersey V Neck</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={manimgage2} alt="Jersey V Neck" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Jersey V Neck</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={imgage} alt="Jersey V Neck" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Jersey V Neck</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={manimgage2} alt="Jersey Round Neck" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Jersey Round Neck</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={imgage} alt="Pullover" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Pullover</h3>
            </div>
          </div>
        </div>
      ) : (
        // Women Subcategories
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={imgage2} alt="Long Coat" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Long Coat</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={womenimgage2} alt="Long Coat" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Long Coat</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={imgage2} alt="Long Coat" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Long Coat</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={womenimgage2} alt="Short Coat" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Short Coat</h3>
            </div>
          </div>
          <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={imgage2} alt="Long Sando" className="w-full h-96 object-cover" />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-gray-700">Long Sando</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCategorySection;
