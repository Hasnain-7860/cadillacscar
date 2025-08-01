import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Build2Data, Build3Data, Build4Data, Build5Data, BuildData } from './MockData/data';
import { div } from 'framer-motion/client';



const Build = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center text-center py-5 lg:py-10'>
            <h1 className='text-[50px] font-semibold'>BUILD & BUY</h1>
            <div className="flex items-center text-[20px] relative left-[30%] lg:left-[39%] "><CiHeart /> 
            <p>Builds(0)</p>
            </div>
        </div>
        <div className='bg-gray-200 py-8'>
            <div className='flex flex-col justify-center text-center items-center'>
                <h1 className='font-semibold text-[30px]'>SELECT A VEHICLE TO GET STARTED</h1>
                <div className='flex flex-col gap-4 items-center'>
                <p className='text-gray-600'>Or enter a Build Code * from a previous build:</p>
               <div className='w-[210px] h-[50px] bg-white flex items-center'>  <input className='outline-none w-[190px] h-[50px]' type="text" placeholder='Build Code' /><FaArrowRightLong /></div>
                </div>
            </div>
        </div>
        <div className='flex gap-9 font-semibold justify-center items-center text-[17px] py-11'>
            {BuildData.map((data)=>(
                <div className='' key={data.id}>
                <div><button>{data.name}</button>
                </div>
                </div>
            ))}
          

        </div>
        <div className='px-2 py-10 lg:py-0 lg:px-10 '>
            <h1 className='text-[30px] text-blue-900 font-semibold'>ELECTRIC</h1>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {Build2Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center  cursor-pointer group  '>
                    <img className='transition-transform duration-500 ease-in-out group-hover:scale-110' src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 font-bold'>{data.year}</h1><p className='hidden lg:block'>________</p>
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'> {data.text}</p>
                    <hr className='w-[100vw] lg:hidden' />
                    </div>
                   
                </div>

            ))}
        
            </div>

           
        </div>
        <div className=' py-10 px-2 lg:py-0 lg:px-10'>
            <h1 className='text-[30px] text-blue-900 font-semibold'>SUV</h1>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {Build3Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center cursor-pointer group  '>
                    <img className='transition-transform duration-500 ease-in-out group-hover:scale-110' src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 text-[17px] font-semibold'>{data.year}</h1>
                    <p className='hidden lg:block'>________</p>
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'>{data.text}</p>
                    <hr className='w-[100vw] lg:hidden' />
                    </div>
                </div>
            ))}
        
            </div>
        </div>
        <div className='px-2 py-10 lg:px-10 lg:py-0'>
            <h1 className='text-[30px] text-blue-900 font-semibold'>SEDAN</h1>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  '>
            {Build4Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center cursor-pointer group'>
                    <img className='transition-transform duration-500 ease-in-out group-hover:scale-110' src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 text-[17px] font-semibold'>{data.year}</h1>
                    ________
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'>{data.text}</p>
                    <hr className='w-[100vw] lg:hidden' />

                    </div>
                </div>
            ))}
        
            </div>

          
        </div>
        <div className='px-2 py-10 lg:px-10 lg:py-0'>
            <h1 className='text-[30px] text-blue-900 font-semibold'>V-SERIES</h1>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
            {Build5Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center cursor-pointer group '>
                    <img className='transition-transform duration-500 ease-in-out group-hover:scale-110' src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 text-[17px] font-semibold'>{data.year}</h1>
                    ________
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'>{data.text}</p>
                    <hr className='w-[100vw] lg:hidden' />

                    </div>
                </div>
            ))}
        
            </div>

            <hr />
        </div>
        
    </div>
  )
}

export default Build