import React from 'react'
import SubCategorySection from '../component/SubCategorySection'
import Map from '../component/Map/Map'
import Banner from '../component/banner/Banner'
import imgage from "../assets/images/swetters/manswetter1.avif"


const Men = () => {
  return (
    <div className=''>
      <Banner heading = "Gents Products" img={imgage} para={"Discover the latest fashion trends crafted for elegance and style. Your wardrobe deserves the best!"}/>
      <SubCategorySection category="men" subtitle="All Products"/>
      <Map/>
      
    </div>
  )
}

export default Men
