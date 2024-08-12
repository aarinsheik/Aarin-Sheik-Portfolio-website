import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Project from './components/Project'
import Skill from './components/skill'
const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Project/>
      <Skill/>
    </main>
  )
}

export default App
