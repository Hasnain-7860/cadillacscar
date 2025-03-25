import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Build2Data, Build3Data, Build4Data, Build5Data, BuildData } from './MockData/data';
import { div } from 'framer-motion/client';



const Build = () => {
  return (
    <div>
        <div className='flex justify-center    '>
            <h1 className='text-[50px] font-semibold'>BUILD & BUY</h1>
            <div className="flex items-center text-[20px] relative left-[39%] "><CiHeart /> 
            <p>Builds(0)</p>
            </div>
        </div>
        <div className='bg-gray-200 py-8'>
            <div className='flex flex-col justify-center text-center items-center'>
                <h1 className='font-semibold text-[30px]'>SELECT A VEHICLE TO GET STARTED</h1>
                <div className='flex gap-4 items-center'>
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
        <div className='px-10'>
            <h1 className='text-[30px] text-blue-900 font-semibold'>ELECTRIC</h1>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-4 p-10 '>
            {Build2Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center'>
                    <img src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 font-bold'>{data.year}</h1>
                    ________
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'> {data.text}</p>
                    </div>
                </div>
            ))}
        
            </div>

           
        </div>
        <div className='px-10'>
            <h1 className='text-[30px] text-blue-900 font-semibold'>SUV</h1>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-4 p-10 '>
            {Build3Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center'>
                    <img src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 text-[17px] font-semibold'>{data.year}</h1>
                    ________
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'>{data.text}</p>
                    </div>
                </div>
            ))}
        
            </div>
        </div>
        <div className='px-10'>
            <h1 className='text-[30px] text-blue-900 font-semibold'>SEDAN</h1>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-4 p-10 '>
            {Build4Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center'>
                    <img src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 text-[17px] font-semibold'>{data.year}</h1>
                    ________
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'>{data.text}</p>
                    </div>
                </div>
            ))}
        
            </div>

          
        </div>
        <div className='px-10'>
            <h1 className='text-[30px] text-blue-900 font-semibold'>V-SERIES</h1>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-4 p-10 '>
            {Build5Data.map((data)=>(
                <div key={data.id} className='flex flex-col justify-center items-center text-center'>
                    <img src={data.img} alt="" />
                   <div> <h1 className='text-blue-900 text-[17px] font-semibold'>{data.year}</h1>
                    ________
                    <h1 className='text-blue-900 font-semibold'>{data.name}</h1>
                    <p className='text-[14px]'>{data.text}</p>
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