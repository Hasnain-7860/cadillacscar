import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Feauture = () => {
      const [active, setActive] = useState("0");
    
  return (
    <div className='bg-black'>
    <div className='container flex flex-col justify-center items-center text-white'>
        <div className='flex flex-col items-center text-center py-5 '>
            <h1 className='text-[40px] tracking-[5px]' >FEATURED OFFERS</h1>
            <p className='tracking-[5px] py-3'>VIEW ALL CURRENT OFFERS</p>
        </div>
        {/* <div>
            <ul className='flex justify-center gap-5 lg:flex justify-center items-center gap-10 text-[15px]'>
                <li><a href="">LYRIQ</a></li>
                <li><a href=""></a>LYRIQ</li>
                <li><a href=""></a>OPTIQ</li>
               

            </ul>
        </div> */}
        <div >
                <ul className=" px-5 gap-5 flex pl-3  w-[390px] items-center text-[10px] overflow-scroll  md:w-[100%]  lg:flex lg:w-full lg:gap-20 lg:overflow-auto lg:justify-center lg:items-center  lg:text-[20px] font-semibold">
        
                  <li  onClick={()=>{setActive("0")}} className={`  text-[25px] cursor-pointer  ${active =="0" ? " text-white": "text-[#d4d6d7]"}`}>
                    <button>
                      <a >COSTCO MEMBERS</a>
                    </button>
                   
                  </li>
        
                  <li onClick={()=>{setActive("1")}} className={` text-[25px] cursor-pointer   ${active =="1" ? " text-white": "text-[#d4d6d7]  "}  `}>
                    <button>
                      <a >EV TAX CREDIT</a>
                    </button>
                    
                  </li>
                  <li onClick={()=>{setActive("2")}} className={`   text-[25px] cursor-pointer   ${active =="2" ? " text-white": " text-[#d4d6d7] "}`}>
                    <button>
                      <a >FEDERAL TAX DEDUCTION</a>
                    </button>
                  </li>
                </ul>
              </div>
              {active==="0" &&(
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
        )}
        {active==="1" &&(
          <div className='border-solid border-2 border-white'>
            <div className=''>
              <h1>2025 ESCALADE IQ, OPTIQ and 2026 VISTIQ</h1>
              <h1>LIMITED TIME SPECIAL</h1>
              <p>ELIGIBLE COSTCO MEMBERS WHO PURCHASE OR LEASE SELECT, NEW CADILLAC MODELS* CAN RECEIVE:</p>
            </div>
            <div>
              <div>
                <h1>$1,000</h1>
                <p>incentive for Gold Star & Business members</p>
              </div>
              <div>
                <h1>$1,250</h1>
                <p>incentive for Executive members</p>
              </div>
            </div>
            <div>
              <p>From June 3, 2025 through August 4, 2025, eligible Costco Members can also get $105 below the MSRP of the GM PowerUp2 Charger – OR – $255 below the MSRP of the GM Energy PowerShift Charger when purchased at any Cadillac Dealership.*</p>
              <button>SEARCH INVENTORY</button>
            </div>
            <div>

            </div>
          </div>
        )}
    </div>
    </div>
  )
}

export default Feauture