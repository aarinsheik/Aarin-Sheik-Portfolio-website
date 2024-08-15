import React from 'react'
import { PROFILE, PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import Cards from './Cards'

const containerVariants = {
  hidden: { opacity:0 , y:-20 },
  visible : {
    opacity:1,
    y:0,
    transition:{
      duration: 2,
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity:0 ,
    y:0.8 ,
  },
  visible:{
    opacity:1 , 
    scale:1 ,
    transition:{
      duration:1,
    },
  },
}

const Project = () => {
  return (
    <div id='project'>
      <motion.h2 
      className='mt-20 text-center text-4xl font-semibold'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible">
        Projects
      </motion.h2>
      
      <motion.div 
      className="flex flex-wrap justify-center py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
     >

        {PROJECTS.map((project , index)=>(
            
            <motion.div variants={itemVariants} key={index}>
                <Cards
                    image={project.image}
                    title={project.title}
                    subtitle={project.subtitle}
                    link={project.link}
                ></Cards>
            </motion.div>

        ))}

      </motion.div>
    </div>
  )
}

export default Project
