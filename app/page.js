import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
