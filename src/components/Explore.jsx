import React from 'react'
import {ExploreData} from "../components/MockData/data"
import { div } from 'motion/react-client'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";




const Explore = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-[50px] font-mono py-4'>EXPLORE THE CADILLAC LINEUP</h1>
        </div>
        <div>
            <ul className='   flex flex-col  lg:flex flex-center items-center gap-20 container '>
                <li className=' p-4 px-[100px] border-solid border-2 border-black text-black hover:bg-black  hover:text-white '><button><a href="">ELECTRIC</a></button></li>
                <li className=' p-4 px-[100px] border-solid border-2 border-black text-black  hover:bg-black hover:text-white ' ><button><a href="">SUVS</a></button></li>
                <li className='p-4 px-[100px] border-solid border-2 text-black border-black  hover:bg-black  hover:text-white '> <button><a href="">SEDANS</a></button></li>
                <li className=' p-4 px-[100px] border-solid border-2 text-black border-black hover:bg-black  hover:text-white'><button><a href="">V-SERIES</a></button></li>
                
            </ul>
        </div>
        {/* <div className='bg-black flex overflow-auto w-[100%] h-[300px] '>
          {
            ExploreData.map((data)=>(
              <div  key={data.id}>
                <div className=''>
                  <img   src={data.img} alt="" />
                  <h1 className=''>{data.name}</h1>
                  <p>{data.text}</p>
                </div>
              </div>
            ))
          } */}
          {/* </div> */}
           
            <div className=''>
              <div className='flex w-[100%] h-[400px] overflow-auto  display-none  '>
              

                <img src='https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/07-images/lineup-suvs-26-escalade-iql-l.png?imwidth=3000'   alt="" />
                <img src='https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-25-escalade-iq-l-v6.png?imwidth=3000'   alt="" />
                <img src='https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-sedans-celestiq-l-v4.png?imwidth=3000'   alt="" />
                <img src='https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-26-vistiq-l-v2.png?imwidth=3000'   alt="" />
                <img src='https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-26-lyriq-v-l.png?imwidth=3000'   alt="" />
                <img src='https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-25-lyriq-l-v3.png?imwidth=3000'   alt="" />
                <img src='https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-25-optiq-l-v3.png?imwidth=3000'   alt="" />
 
 
                
              </div>
              <div className='  z-10 p-[5vh]  flex  items-center gap-5  justify-center  '>
                <a className=''  href=""><IoIosArrowBack className='text-[40px] border-solid border-2 border-black ' /></a>
                <a href=""><IoIosArrowForward className='text-[40px] border-solid border-2 border-black' />
                </a>
                </div>
            </div>
    </div>
   
  )
}

export default Explore