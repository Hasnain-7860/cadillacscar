import React from 'react'
import image from '../assets/imgg1.png'
import image2 from '../assets/imgg2.png'
import image3 from '../assets/imgg3.png'
import video from '../assets/video/carvid.mp4'
import { FunctionData } from './MockData/data'
import { div, img } from 'framer-motion/client'



const Home = () => {
  return (
    <div className='bg-black'>

        <div>
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/2026/electric/escalade-iql/overview/new-masthead/my26-escalade-iql-mov-masthead-l-v4.jpg?imwidth=3000" alt="" />
            <video autoPlay muted>
            <source src={video}/>
        </video>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 '>
        {FunctionData.map((data)=>(
          <div className=' cursor-pointer border border-black hover:border hover:border-white hover:duration-500'>
          <div key={data.id}>
           
            <img src={data.img} alt=""/>
           
          </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Home