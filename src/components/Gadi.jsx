import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useRef, useState } from 'react';
import { ExploreData } from './MockData/data';
import "./Gadi.css";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { data } from 'autoprefixer';
import { div } from 'motion/react-client';

const Gadi = () => {
  return (
    <div  className='Pre'>
      <div className=' flex justify-center items-center  bg-black bg-opacity-20 flex-col gap-5 '>
        <img className='w-auto h-40' src="https://www.centralhoustoncadillac.com/static/v8/global/images/franchise-logos/auto/c/cadillac/white/117x80.png?r=1741194409000" alt="" />
      <h1 className='text-white lg:text-6xl [letter-spacing:20px] '>CELESTIQ</h1>
      </div>
    </div>
  )
}

export default Gadi