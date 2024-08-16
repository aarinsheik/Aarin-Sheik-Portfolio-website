import React from 'react'
import {SKILLS} from '../constants'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial:{
    opacity:0 ,
    y:100,
  },
  animate: (index) => ({
    opacity: 1,
    y:0,
    transition:{
      duration:0.5,
      delay: 0.05*index, 
      staggerChildren:0.15,
    }

  })
}

const Skill = () => {
  return (
    <div className='container mx-auto' id='skill'>
      <h2 className='mb-12 mt-20 text-center text-4xl'>Skills</h2>
      <div className='mx-8 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20'>

        { SKILLS.map((skill,index)=>(
            <motion.div 
            key={index} 
            className='mb-8 flex items-center justify-between px-4 py-1 rounded'
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            // viewport={{once:true}}
            custom={index}
            >
            
              
                <div className='flex items-center'>
                    {skill.icon}
                    <h3 className='px-6 text-xl lg:text-3xl'>{skill.name}</h3>
                </div>
                <div className='text-md border-b-2 border-yellow-400 font-semibold lg:text-xl'>
                    <span>{skill.experience}</span>
                </div>

            </motion.div>
        )) }
      </div> 
    </div>
  )
}

export default Skill
