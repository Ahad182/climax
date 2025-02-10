import React from 'react'
import Map from '../component/Map/Map'
import Hero from '../component/Hero/Hero'
import NestedImages from '../component/nestedimage/NestedImages'
import SubCategorySection from '../component/SubCategorySection'
import Testimonial from '../component/Testimonial/Testimonial'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero/>
        <NestedImages/>
        <SubCategorySection category="men" subtitle="Top Products"/>
      <SubCategorySection category="women" subtitle="Top Products"/>
        <Testimonial/>

      <Map/>
    </div>
  )
}

export default Home
