import React from 'react'
import image from '/src/assets/imgc1.webp'
import img from '/src/assets/imgs1.avif'

const Service = () => {
  return (
    <div className='bg-[url("https://www.cadillac.com/content/dam/cadillac/na/us/english/index/ownership/service-and-repair/01-images/cs-cadillac-service-and-repair-masthead-l.jpg?imwidth=1920")] '>
        <div>
          <div className=' py-[170px] flex flex-col  items-center justify-center  w-[45vw]     '>
           <h1 className='text-lg font-semibold text-gray-500 '>CADILLAC SERVICE & REPAIR</h1> 
           <h1 className='py-3 text-[28px] text-gray-400 flex  flex-col justify-center items-center w-[50%] text-center '>THE SUPPORT YOU NEED IS RIGHT AROUND THE CORNER</h1>
           <div className='  px-[90px] flex border-solid border-2 border-white justify-center gap-5 text-[20px] text-black   bg-white hover:bg-black hover:text-white ] '><button className='p-2 shadow-lg w-'>SCHEDULE SERVICE</button></div>
        </div>
        </div>
    </div>
  )
}

export default Service