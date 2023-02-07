import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import About from '../../Components/About/about'
import Contact from '../../Components/Contact/contact'
import Service from '../../Components/Service/service'
import Home from '../../Components/Home/home'

const homeScreen = () => {
  return (
    <div>

    <Navbar/>
    <Home/>
    <About/>
    <Service/>
    <Contact/>
    </div>
  )
}

export default homeScreen