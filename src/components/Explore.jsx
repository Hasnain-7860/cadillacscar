import React from 'react'

const Explore = () => {
  return (
    <div className='container flex flex-col justify-center items-center'>
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
        <div className='flex'>
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/07-images/lineup-suvs-26-escalade-iql-s.png?imwidth=1600" alt="" />
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-25-escalade-iq-s-v5.png?imwidth=1600" alt="" />
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-sedans-celestiq-s-v4.png?imwidth=1600" alt="" />
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-26-vistiq-s-v2.png?imwidth=1600" alt="" />
            <img src="" alt="" />
            </div>
    </div>
  )
}

export default Explore