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
            <div className='flex'>
              <ul className='hidden lg:flex justify-center items-center gap-10 text-[20px]'>
                <li><a href=""> <Link to='/' >Home</Link>  </a></li>
                {/* <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/Shop'>Shop</Link>  {menu==="shop"?  <hr /> : <></> } </li> */}
                <li><a href=""><Link to='/New'>NEW</Link> </a></li>
                <li><a href=""> <Link to='/Pre'>Pre-Owned</Link> </a></li>
                <li><a href=""> <Link to='/Service'>Service & Parts</Link></a></li>
                <li><a href=""> <Link to='/Specials'>Specials</Link></a></li>
                <li><a href=""> <Link to='/Finance'>Finance</Link></a></li>
                <li><a href=""> <Link to='/About'>About Us</Link></a></li>
      
              </ul>
              <h1 className='text-[40px] lg:hidden'>< RxHamburgerMenu /></h1>

              
            </div>
            </div>
    </div>
  )
}

export default Navbar