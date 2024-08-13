import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Project from './components/Project'
import Skill from './components/skill'
import Testimonials from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Project/>
      <Skill/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
