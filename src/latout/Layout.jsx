import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import MyMarquee from '../component/Marquee/Marquee';

const Layout = () => {
  return (
    <div>
        <ScrollRestoration />
        <Header/>
        <MyMarquee title="Manufactureer of All kinds of Ladies,gents & kids woolen Garments"/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
