import React from 'react'
import { IoHomeOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div> 
      <div className='flex justify-between container'>
              <div className='flex justify-center items-center text-[20px]'>
              <img src="https://www.centralhoustoncadillac.com/static/v8/global/images/franchise-logos/auto/c/cadillac/white/117x80.png?r=1741194409000" alt="" />
              <h1>Central Houston Cadillac</h1>
            </div>
            <div className='flex'>
              <ul className='flex justify-center items-center gap-10 text-[20px]'>
                <li><a href=""> <IoHomeOutline /></a></li>
                <li><a href=""> NEW</a></li>
                <li><a href="">Pre-Owned</a></li>
                <li><a href="">Service & Parts</a></li>
                <li><a href="">Specials</a></li>
                <li><a href="">Finance</a></li>
                <li><a href="">About Us</a></li>
      
              </ul>
              
            </div>
            </div>
    </div>
  )
}

export default Navbar