import React from 'react'
import { PROFILE, PROJECTS } from '../constants'
import Cards from './Cards'

const Project = () => {
  return (
    <div id='project'>
      <h2 className='mt-20 text-center text-4xl font-semibold'>Projects</h2>
      <div className="flex flex-wrap justify-center py-8">

        {PROJECTS.map((project , index)=>(
            <div key={index}>
                <Cards
                    image={project.image}
                    title={project.title}
                    subtitle={project.subtitle}
                    link={project.link}
                ></Cards>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Project
