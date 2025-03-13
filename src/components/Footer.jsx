import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FooterData } from './MockData/data';
// import {Footer} from "../components/MockData/data"
import footerimg from "../assets/footerimg.svg"
import footerimg2 from "../assets/footerimg2.svg"
import footerimg3 from "../assets/footerimg3.svg"
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";






const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 container  '>
        <div className='flex flex-col gap-10 mt-20 '>
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/future-and-concept/electric-vehicles/lyriq-reserve-now/svg/CADILLAC_HERITAGESCRIPT_POS_RGB-v2.svg" alt="" />
            <div className='p-3 flex border-solid border-2 border-black justify-center gap-5 text-[20px] text-black  rounded-md hover:bg-black hover:text-white  ' ><button>GET UPDATE</button></div>
            <button className='flex items-center p-3  justify-center text-[20px] gap-5'><CiSearch /><h1>SEARCH</h1></button>
        </div>
        <div className='flex flex-col  justify-center items-center mt-6    lg:mt-60  lg:ml-[120px] gap-10 text-[17px] lg:items-start  '>
          {FooterData.map((data)=>(
            <div key={data.id}>
                <ul >
                  <li><a href="">{data.name}</a></li>
                </ul>
              
            </div>
          ))}
        </div>
        <div >
          <ul className='flex flex-col gap-10   justify-center items-center    lg:mt-60 lg:ml-[120px] lg:gap-10 text-[17px] mt-8 lg:items-start'>
            <li><a href="">CADILLAC FINANCIAL</a></li>
            <li><a href="">CONTACT US</a></li>
            <li><a href="">RECALLS</a></li>
            <li><a href="">BUSINESS TAX DEDUCTIONS</a></li>
            <li><a href="">DISASTER RELIEF</a></li>

          </ul>
        </div >
        <div className='flex flex-col gap-10  justify-center items-center mr-[20px]     lg:gap-10 text-[17px] mt-8 lg:items-start'>
          <p className='text-[10px] py-3 lg:text-[15px]'>Download the myCadillac App* for Apple or Android™</p>
        <div className='flex w-[105px] justify-center items-center '><img src={footerimg} alt="" />
        <img src={footerimg2} alt="" />
        </div>
        </div>
        <div className='flex flex-col justify-center items-center py-10 lg:items-start lg:ml-[120px]'>
          <h1>FOLLOW US</h1>
          <div className='flex gap-10 w-[150px] mt-[15px]'>
            <FaFacebook />
          <BsYoutube />
          <FaInstagramSquare />
          </div>




        </div>
        <div className=' p-50 w-auto lg:ml-[90px] '>
          <img src={footerimg3} alt="" />
        </div>
       
    </div>
  )
}

export default Footer