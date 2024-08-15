import React from 'react'
import logo from '../assets/logo.png'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div id="footer" className='mb-8 mt-20'>

        <div className='flex items-center justify-center'>
            
            <motion.figure
            initial={{ opacity:0 }}
            whileInView={{ opacity:1}}
            transition={{duration:1 , delay:0.4}}>

                <img src={logo} width={250} alt='logo' className='mb-2'/>
                <div className='mb-10 w-full mx-auto h-3 bg-yellow-400'></div>
            
            </motion.figure>
        
        </div>

        <div className='flex items-center justify-center gap-8'>

            {SOCIAL_MEDIA_LINKS.map((link ,index )=>(
                <motion.a
                 key={index} 
                 href={link.href} 
                 target='_blank'
                 initial={{ opacity:0 }}
                 whileInView={{ opacity:1}}
                 transition={{duration:0.2 , delay:0.2*index}}
                 whileHover={{
                    x: [0, -2, 2, -2, 2, 0],
                    transition: { duration: 0.5, repeat: 1 }
                  }}
                  >
                    {link.icon}
                </motion.a>
            ))}

        </div>

        <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
            &copy;Aarin Sheik. All rights reserved.
        </p>
    </div>
  )
}

export default Footer
