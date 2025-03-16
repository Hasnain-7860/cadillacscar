import React from 'react'
import evimg from '/src/assets/evimg1.avif'
import evimgr from '/src/assets/evimgr1.avif'
import { IoIosArrowDown } from "react-icons/io";


const Finance = () => {
  return (
    <div className='text-white'> 
      <div className='bg-[url("https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/ev-life/images-03/24-cad-ev-life-masthead-lyriq-l-v9.jpg?imwidth=3000")] '>
    <div className='flex flex-col gap-[80vh] py-8'>
      <h1 className='text-center text-[60px]  tracking-[23px]'>YOUR EV LIFE</h1>
      <p>Simulated charging shown.</p>
      </div>
      </div>

      
      <div className='text-black    grid grid-cols-5  py-10  pl-28 '>
        
          <div ><h1 className='flex gap-5 items-center'>HOME CHARGING <IoIosArrowDown className='text-[20px]' /> </h1></div>
        <div className='flex gap-5 items-center ' ><h1>PUBLIC CHARGING</h1><IoIosArrowDown className='text-[20px]' /></div>
        <div className='flex gap-5 items-center ' ><h1>RANGE</h1><IoIosArrowDown className='text-[20px]' /></div>
        <div className='flex gap-5 items-center ' ><h1>EV SAVING</h1><IoIosArrowDown className='text-[20px]' /></div>
        <div className='flex gap-5 items-center ' ><h1>EV ADVANTAGES</h1><IoIosArrowDown className='text-[20px]' /></div>
        
        </div>
        <div className='bg-black flex flex-col gap-2 py-6 text-center'>
          <h1 className='text-[50px] tracking-[13px]'>LEARN TO THRIVE IN A CADILLAC EV</h1>
          <p className='text-[20px]'>Discover how OPTIQ, LYRIQ, ESCALADE IQ, CELESTIQ and the upcoming VISTIQ can fit seamlessly into your iconic lifestyle.</p>
        </div>
        <div className='bg-[url("https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/ev-life/images-02/25-cadillac-ev-life-at-home-l.jpg?imwidth=3000")]'>
        
        <div className='flex flex-col  pt-[79vh] text-center tracking-[15px]'><h1 className='text-[50px]'>EV LIFE AT HOME</h1>
        </div>
        </div>

      
    </div>
  )
}

export default Finance