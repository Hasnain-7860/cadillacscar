import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FooterData } from './MockData/data';
// import {Footer} from "../components/MockData/data"


const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3  '>
        <div className='flex flex-col'>
            <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/future-and-concept/electric-vehicles/lyriq-reserve-now/svg/CADILLAC_HERITAGESCRIPT_POS_RGB-v2.svg" alt="" />
            <div><button>GET UPDATE</button></div>
            <button className='flex items-center'><CiSearch /><h1>SEARCH</h1></button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {FooterData.map((data)=>(
            <div key={data.id}>
                <ul >
                  <li><a href="">{data.name}</a></li>
                </ul>
              
            </div>
          ))}
        </div>
       
    </div>
  )
}

export default Footer