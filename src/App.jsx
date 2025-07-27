import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import WorkFlow  from './components/WorkFlow'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const App = () => {
  return (
   <>
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <Feature/>
      <WorkFlow/>
      <Price/>
      <Testimonials/>
      <Footer/>
     </div>
     
   </>
  )
}

export default App
