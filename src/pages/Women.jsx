import React from 'react'
import SubCategorySection from '../component/SubCategorySection'
import Map from '../component/Map/Map'
import Banner from '../component/banner/Banner'
import imgage2 from "../assets/images/swetters/womenswetter2.jpg"


const Women = () => {
  return (
    <div className=''>
      <Banner heading = "ladies Products" img={imgage2} para={"Discover the latest fashion trends crafted for elegance and style. Your wardrobe deserves the best!"}/>
      <SubCategorySection category="women" subtitle="All Products"/>
      <Map/>
    </div>
  )
}

export default Women
