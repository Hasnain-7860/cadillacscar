import React from 'react'
import {IconData} from "../components/MockData/data"
import { data } from 'autoprefixer'
import { div } from 'motion/react-client'

const Icon = () => {
  return (
    <div className='bg-gray-200'>
        <div className='flex justify-center items-center text-[40px] py-[15px]'>
            <h1>FIND YOUR ICON</h1>
        </div>
        <div>
            <div className='grid  grid-cols-1 gap-10 lg:grid-cols-4 container justify-center items-center lg:gap-40 '>
                {IconData.map((data)=>(
                    <div key={data.id} >
                        <div className='flex flex-col p-[50px] bg-gray-200 justify-center items-center border-solid border-2 border-black text-[20px] font-semibold '>
                        <data.data/>
                        <h1 className='text-[20px] '>{data.name}</h1>
                          
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Icon