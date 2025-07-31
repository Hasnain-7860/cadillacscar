import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import {motion} from "framer-motion"
import { GoX } from "react-icons/go";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState (false);
  const toggleNavbar =() =>{
    setIsOpen(!isOpen)
  }

    const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div> 
      <div className='flex justify-between items-center px-5 h-16 lg:container'>
              <div className='flex justify-center items-center  text-[15px] md:text-[18px] lg:text-[20px]'>
              <img className='w-[50px] h-[80px] md:w-[30px]  lg:w-[110px] lg:h-[80px]' src="https://www.centralhoustoncadillac.com/static/v8/global/images/franchise-logos/auto/c/cadillac/white/117x80.png?r=1741194409000" alt="" />
              <h1>Central Houston Cadillac</h1>
            </div>
            <div className='md:static absolute bg-white min-h-[60vh] left-0 top-[8.7%] w-full flex items-center px-5 min-h-fit'>
            <div className=' flex'>
              <ul className=' hidden lg:flex justify-center lg:items-center gap-10 lg:text-[20px] lg:flex-row lg:ml-[35vh]  '>
                <NavLink to='/'  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} > <li>Home</li></NavLink>
                <NavLink to='/New' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} > <li>New</li></NavLink>
                <NavLink to='/Pre' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} > <li>Our Values</li></NavLink>
                <NavLink to='/Service' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} > <li>Service & Parts</li></NavLink>
                <NavLink to='/Special' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} > <li>Specials</li></NavLink>
                <NavLink to='/Finance' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} > <li>EV Life</li></NavLink>
                <NavLink to='/About' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')} > <li>About Us</li></NavLink>
              </ul>
            </div>
            </div>
            <h1 className='text-[40px]  lg:hidden' onClick={toggleNavbar}> {isOpen?<GoX />:<RxHamburgerMenu />} </h1>
            </div>
    </div>
    {
      
      isOpen && ( 
        
    <div  className='bg-white  h-[100vh] '>
     <motion.div
      initial={{opacity:0 , y:-100}} animate={{opacity:1, y:0}}
      transition={{
        type:"",
        stiffness:100,
        damping:10,
        delay:0.2,
      }}
     className='flex justify-between container'>
        <div   className=' flex'>
              <ul   className=' flex-col text-[30px] items-center ml-20 lg:hidden '>
                <NavLink  to='/'  onClick={closeMenu} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}><li>Home </li></NavLink>
                <NavLink to='/New' onClick={closeMenu} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}><li>New</li></NavLink>
                <NavLink to='/Pre'onClick={closeMenu} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}><li>Our Values</li></NavLink>
                <NavLink to='/Service' onClick={closeMenu} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}><li>Service & Parts</li></NavLink>
                <NavLink to='/Special' onClick={closeMenu} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}><li>Specials</li></NavLink>
                <NavLink to='/Finance' onClick={closeMenu} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}><li>EV Life</li></NavLink>
                <NavLink to='/About' onClick={closeMenu} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}><li>About Us</li></NavLink>
              </ul>
            </div>
            </motion.div> 
          
            </div>
    
      )
    }

    </>
  )
}

export default Navbar