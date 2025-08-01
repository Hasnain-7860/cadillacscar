import React, { useRef } from 'react'
import evimg from '/src/assets/evimg1.avif'
import evimgr from '/src/assets/evimgr1.avif'
import { IoIosArrowDown } from "react-icons/io";
import {FinanceData} from "/src/components/MockData/data"
import { div } from 'framer-motion/client';
import { FaArrowRightLong } from "react-icons/fa6";
import  '../Finance.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const Finance = () => {
    const slider =useRef ();
    let tx=0;
  
    const slideBackward =()=>{
      if(tx < 0){
        tx +=35
      }
      slider.current.style.transform =`translateX(${tx}%)`;
  
    };
    const slideForward =()=>{
      if(tx > -40){
        tx -=34
      }
      slider.current.style.transform =`translateX(${tx}%)`;
    }
  return (
    <div className='text-white'> 
      <div className=' md:object-cover bg-[url("https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/ev-life/images-03/24-cad-ev-life-masthead-lyriq-l-v9.jpg?imwidth=3000")] '>
    <div className='flex flex-col  py-10'>
      <h1 className='text-center text-[60px]  tracking-[23px]'>YOUR EV LIFE</h1>
      <p className='pt-[80vh]'>Simulated charging shown.</p>
      </div>
      </div>

      
      <div className='text-black grid grid-cols-1   lg:grid-cols-5  py-10  pl-28 '>
        
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
        {/* <div className='bg-[url("https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/ev-life/images-02/25-cadillac-ev-life-at-home-s.jpg?imwidth=1600")] h-[50%] '> */}
        <div className='flex flex-col  pt-[79vh] text-center tracking-[15px]'><h1 className='text-[50px]'>EV LIFE AT HOME</h1>
        </div>
        {/* </div> */}
        </div>
        <div className='bg-black py-[100px] overflow-hidden '>
          <div id='ca' ref={slider} className= ' w-[300vw] overflow-x-hidden px-2 grid grid-cols-3 gap-[30px] py-10  lg:px-20 lg:grid lg:grid-cols-3 lg:gap-[90px] lg:py-10 lg:w-[100vw]'>
            {FinanceData.map((data)=>(
              <div className='text-center flex flex-col gap-3 '  key={data.id}>
                <div className='flex flex-col  '>
                 <img className='flex flex-col text-center items-center ' src={data.img} alt="" />
                <p className='text-[22px] py-3'>{data.text}</p>
                <h1 className='text-[28px] py-2'>{data.miles}</h1>
                <h2 className='text-[22px]'>{data.of}</h2>
                <p className='text-center text-gray-400 '>{data.up}</p>
                <p className='text-center text-gray-400'>{data.year}</p>
                </div>
                <div className='flex flex-col gap-1'>
                <h1 className='text-[26px] font-bold '> {data.gm}</h1>
                <p  className='text-[17px]'>{data.upto}</p>
                <button className='bg-white text-black p-3 mt-3'>{data.button}</button>
                </div>
              </div>
              

              
            ))}
            
          </div>
           <div  className='flex gap-5 lg:hidden'><a onClick={slideBackward} ><IoIosArrowBack  className='text-[40px] border-solid border-2 border-black ' /></a>
                          <a onClick={slideForward} ><IoIosArrowForward className='text-[40px] border-solid border-2 border-black' /></a>
                         
                          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 lg:grid-cols-2 bg-black '>
            <div>
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/ev-life/images-03/24-cad-ev-life-enablement-kit.jpg?imwidth=1920" alt="" />
            </div>
            <div><p>hgfghgfhgf</p>
            <h1>ytfytfyfty</h1>
            </div>

          </div>
        </div>
        <div className='flex flex-col  text-center '>
          <div className='bg-[url("https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/ev-life/new/24-cad-ev-life-public-charging-masthead-optiq-l.jpg?imwidth=3000")] '>
          <h1 className='pt-[70vh] text-[50px]  tracking-[15px]'>PUBLIC CHARGING DEFINED</h1>
          </div>
        </div>
        <div className='bg-black grid grid-cols-1   '>
          <div className='container text-[22px] py-7'>
            <p>Level 2 and DC Fast Chargers make for convenient charging options. With access to more than 250,000 public chargers in the U.S. and Canada, it’s easy to charge while you’re on the go. Enjoy extended public charging network access at more than 20,000 publicly accessible Tesla Superchargers.*</p>
          </div>
          <div className='grid grid-col-span-1 lg:grid-cols-2 '>
            <div className=' text-center py-20 w-[60%] flex flex-col gap-3 ml-[100px]  ' >
              <p className='text-[25px] tracking-[5px]'>ACCESS TESLA® SUPERCHARGER STATIONS WITH AN AVAILABLE NACS DC ADAPTER</p>
              <p>Expand your charging options by purchasing a GM-approved North American Charging Standard (NACS) DC adapter from Cadillac Accessories, from your preferred Cadillac dealer or through your myCadillac mobile app.*</p>
              <p>Using the myCadillac mobile app,* you can easily find, charge and pay at select Tesla® Superchargers across the U.S. and Canada.</p>
              <button className='text-lg flex container items-center gap-5 text-white ml-20 hover:text-gray-300  '>PURCHASE YOUR NACS DC ADAPTER <FaArrowRightLong className='text-[22px]' />
              </button>
            </div>
            <div className='h-[100%]'>
              <img  src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/electric/ev-family/01-images/25-cad-ev-life-charging-tesla-public-charging-v2.jpg?imwidth=1200  "  alt="" />
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Finance