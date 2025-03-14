import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div> 
      <div className='flex justify-between container'>
              <div className='flex justify-center items-center text-[20px]'>
              <img src="https://www.centralhoustoncadillac.com/static/v8/global/images/franchise-logos/auto/c/cadillac/white/117x80.png?r=1741194409000" alt="" />
              <h1>Central Houston Cadillac</h1>
            </div>
            <div className='md:static absolute bg-white min-h-[60vh] left-0 top-[8.7%] w-full flex items-center px-5 min-h-fit'>
            <div className=' flex'>
              <ul className=' flex flex-col text-[30px] items-center ml-20 lg:flex justify-center lg:items-center gap-10 lg:text-[20px] lg:flex-row lg:ml-[35vh]  '>
                <li><a href=""> <Link to='/' >Home</Link>  </a></li>
                <li><a href=""><Link to='/New'>New</Link> </a></li>
                <li><a href=""> <Link to='/Pre'>Our Values</Link> </a></li>
                <li><a href=""> <Link to='/Service'>Service & Parts</Link></a></li>
                <li><a href=""> <Link to='/Special'>Specials</Link></a></li>
                <li><a href=""> <Link to='/Finance'>Finance</Link></a></li>
                <li><a href=""> <Link to='/About'>About Us</Link></a></li>
                
      
              </ul>
            </div>
            </div>
            <h1 className='text-[40px] lg:hidden'><RxHamburgerMenu /> </h1>
            </div>
    </div>
  )
}

export default Navbar