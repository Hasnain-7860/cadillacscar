import React from 'react'
import {ExploreData} from "../components/MockData/data"
import { div } from 'motion/react-client'

const Explore = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-[50px] font-mono py-4'>EXPLORE THE CADILLAC LINEUP</h1>
        </div>
        <div>
            <ul className='flex flex-center items-center gap-20 container'>
                <li className=' p-4 px-[100px] border-solid border-2 border-black'><button><a href="">ELECTRIC</a></button></li>
                <li className=' p-4 px-[100px] border-solid border-2 border-black' ><button><a href="">SUVS</a></button></li>
                <li className='p-4 px-[100px] border-solid border-2 border-black'> <button><a href="">SEDANS</a></button></li>
                <li className=' p-4 px-[100px] border-solid border-2 border-black'><button><a href="">V-SERIES</a></button></li>
            </ul>
        </div>
        <div className='flex '>
          {
            ExploreData.map((data)=>(
              <div key={data.id}>
                <div>
                  <img src={data.img} alt="" />
                  <h1 className='mt-[30px]'>{data.name}</h1>
                  <p>{data.text}</p>
                </div>
              </div>
            ))
          }
        
            </div>
    </div>
  )
}

export default Explore