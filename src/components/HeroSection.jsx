import React from 'react'
import {motion} from 'framer-motion'
import {PROFILE} from '../constants'
import profilePic from '../assets/aarin_sheik.jpeg'

const HeroSection = () => {
  return (
    <>
    <div id='hero' className='flex min-h-screen items-end justify-center'>
      <motion.img 
      src={profilePic} 
      alt={PROFILE.name}  
      className='absolute inset-0 z-10 h-full w-full object-cover'
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:1 }} />

      <motion.div 
      className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:1 }} > 
      </motion.div>

      <motion.div 
      className='z-20 mx-4 max-w-3xl pb-20'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1 , delay:1 }}>

        <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl hover:scale-x-110 transition duration-500'>
          {PROFILE.name}
        </h1>
        <p className='pt-2 font-semibold'>{PROFILE.info}</p>
      
      </motion.div>

    </div>
   </> 
  )
}

export default HeroSection
