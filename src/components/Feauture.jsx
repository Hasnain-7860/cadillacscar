import { div } from 'framer-motion/client'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Feauture = () => {
  return (
    <div className='bg-black'>
    <div className='container flex flex-col justify-center items-center text-white'>
        <div>
            <h1 className='text-[40px] font-semibold ' >FEATURED OFFERS</h1>
        </div>
        <div>
            <ul className='flex justify-center gap-5 lg:flex justify-center items-center gap-10 text-[15px]'>
                <li><a href="">LYRIQ</a></li>
                <li><a href=""></a>LYRIQ</li>
                <li><a href=""></a>OPTIQ</li>
                <li><a href="">CT5</a></li>
                <li><a href="">CT4</a></li>
                <li><a href="">XT6</a></li>
                <li><a href="">XT5</a></li>

            </ul>
        </div>
        <div className='   lg:border-solid border-2 border-white shadow-lg mt-[20px] mb-[20px] w-[100%]'>
           <div className=  ' flex flex-col justify-center items-center  py-[50px]'>
            <h1 className='text-[20px]'>2025</h1>
            <h1 className='text-[25px]'>LYRIQ</h1>
            <h1 className=' text-[30px] lg:text-[50px] '>2.9% APR FOR 48 MONTHS*</h1>
            <p className='text-[30px]'>FOR WELL-QUALIFIED BUYERS</p>
            <button className=' px-[50px] p-1 lg:border-solid border-2 border-white shadow-lg rounded-md p-5  px-[150px] mt-8'>SEARCH INVENTORY</button>
            <button className='flex justify-center items-center gap-10 mt-8 text-[20px]'> <h1>VIEW  ALL LYRIQ OFFERS</h1> <FaArrowRightLong />
            </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Feauture