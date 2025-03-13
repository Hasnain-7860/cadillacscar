import React from 'react'
import {IconData} from "../components/MockData/data"
import { data } from 'autoprefixer'
import { div } from 'motion/react-client'

const Icon = () => {
  return (
    <div className='bg-gray-200'>
        <div className='flex justify-center items-center text-[25px] py-[15px] lg:text-[40px]'>
            <h1>FIND YOUR ICON</h1>
        </div>
        <div>
            <div className='grid  grid-cols-1   lg:grid-cols-4 container py-10'>
                {IconData.map((data)=>(
                    <div key={data.id} >
                        <div className='flex flex-col p-[50px] bg-gray-200 justify-center items-center border-solid border-2 border-black text-[20px] font-semibold gap-8 mt-10 lg:mr-10 '>
                       <h1 className='text-[40px]'> <data.data/></h1>
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