import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from '../constants';
import { FaBars, FaTimes } from "react-icons/fa";


const navbar = () => {

    const [isMobView , setIsMobView] = useState(false);

    const toggleMobMenu = ()=>{
        setIsMobView(!isMobView);
    }
    
    const handleLinkClick = ( e, href )=>{
        e.preventDefault()
        const targetElement = document.querySelector(href);

        if(targetElement){
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }

        setIsMobView(false);

    }

  return (
    <div>
      <nav className='fixed left-0 right-0 top-4 z-50'>
        {/* destop Menu */}
        <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 backdrop-blur-lg lg:flex'>
          <div className="flex justify-between items-center gap-6">
            <div>
              <a>
                <img src={logo} width={60} alt="logo" className='py-3'/>
              </a>
            </div>
            <div>
              <ul className='flex item-center gap-4'>
                {NAVIGATION_LINKS.map((items , index)=>(
                  <li key={index}>
                    <a className='hover:text-yellow-400' 
                      href={items.href}
                      onClick={(e)=>handleLinkClick(e , items.href)}  >
                        {items.label}
                      </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className='flex items-center justify-between'>
            <a href="#">
              <img src={logo} width={30} alt='logo' className='m-2'/>
            </a>
            <div className='flex items-center'>
              <button className='focus:outline-none lg:hidden' onClick={toggleMobMenu}>
                {isMobView ? (
                  <FaTimes className='m-2 h-6 w-5'/>
                ): (
                  <FaBars className='m-2 h-6 w-5'/>
                )}
              </button>
            </div>
          </div>
        </div>
        
        { isMobView && (
          <ul className='ml-4 mt-4 flex-col gap-4 backdrop-blur-md'>
            {NAVIGATION_LINKS.map((items , index)=>(
              <li key={index}>
                <a className='block w-full text-xl font-semibold' 
                  href={items.href}
                  onClick={(e)=>handleLinkClick(e , items.href)}  >
                    {items.label}
                  </a>
              </li>
            ))}
          </ul>
        ) }

      </nav>
    </div>
  )
}

export default navbar
