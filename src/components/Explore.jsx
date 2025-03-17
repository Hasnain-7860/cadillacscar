import React, { useRef } from 'react'
import {ExploreData} from "../components/MockData/data"
import { div } from 'motion/react-client'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './Explore.css'
import { Link } from 'react-router-dom';




const Explore = () => {
  const slider =useRef();
  let tx=0;

  const slideBackward =()=>{
    if(tx < 0){
      tx +=15
    }
    slider.current.style.transform =`translateX(${tx}%)`;

  };
  const slideForward =()=>{
    if(tx > -70){
      tx -=15
    }
    slider.current.style.transform =`translateX(${tx}%)`;
  }
  return (
    <div className=' flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-[50px] font-mono py-4'>EXPLORE THE CADILLAC LINEUP</h1>
        </div>
        <div>
            <ul className='   lg:flex lg:flex-center items-center gap-20 container '>
                <li className=' p-4 px-[100px] border-solid border-2 border-black text-black hover:bg-black  hover:text-white '><button><a href="">ELECTRIC</a></button></li>
                <li className=' p-4 px-[100px] border-solid border-2 border-black text-black  hover:bg-black hover:text-white ' ><button><a href="">SUVS</a></button></li>
                <li className='p-4 px-[100px] border-solid border-2 text-black border-black  hover:bg-black  hover:text-white '> <button><a href="">SEDANS</a></button></li>
                <li className=' p-4 px-[100px] border-solid border-2 text-black border-black hover:bg-black  hover:text-white'><button><a href="">V-SERIES</a></button></li>
                
            </ul>
        </div>

            <div className='overflow-hidden'>
             <ul id='car' ref={slider} className='flex w-[600%] overflow-x-hidden lg:w-[240%] '>
                   {ExploreData.map((data)=>(
                    
                     <div key={data.id} >
                      
                      <Link to={data.link} target='_blank'>
                      <img src={data.img} alt="" />
                      
                      </Link>
                   
                      {data.name}
                     <h1> {data.text}</h1>
                      </div>
                     
        
                 
                     ))}
                     </ul>
                     </div>
                     <div className='flex gap-5'><a onClick={slideBackward} className='mb-4' ><IoIosArrowBack  className='text-[40px] border-solid border-2 border-black  ' /></a>
                <a onClick={slideForward} ><IoIosArrowForward className='text-[40px] border-solid border-2 border-black' /></a>
               
                </div>
               
          
       
                {/* <div  className='overflow-hidden '> 
                  <ul id='car' ref={slider} className='flex w-[600%] overflow-x-hidden lg:w-[240%] '>

               
                  <li>
                    <div>
                      <div>
                        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/07-images/lineup-suvs-26-escalade-iql-l.png?imwidth=3000" alt="" />
                      </div>
                      <h3>dfjgti fhrj hfr</h3>
                      <span>fjrhv hasnain</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-25-escalade-iq-l-v6.png?imwidth=3000" alt="" />
                      </div>
                      <h3>dfjgti fhrj hfr</h3>
                      <span>fjrhv hasnain</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-sedans-celestiq-l-v4.png?imwidth=3000" alt="" />
                      </div>
                      <h3>dfjgti fhrj hfr</h3>
                      <span>fjrhv hasnain</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-26-vistiq-l-v2.png?imwidth=3000" alt="" />
                      </div>
                      <h3>dfjgti fhrj hfr</h3>
                      <span>fjrhv hasnain</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-26-lyriq-v-l.png?imwidth=3000" alt="" />
                      </div>
                      <h3>dfjgti fhrj hfr</h3>
                      <span>fjrhv hasnain</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-25-lyriq-l-v3.png?imwidth=3000" alt="" />
                      </div>
                      <h3>dfjgti fhrj hfr</h3>
                      <span>fjrhv hasnain</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/home-page-refresh/lineup/05-images/lineup-suvs-25-optiq-l-v3.png?imwidth=3000" alt="" />
                      </div>
                      <h3>dfjgti fhrj hfr</h3>
                      <span>fjrhv hasnain</span>
                    </div>
                  </li>
                </ul>
              </div> */}

           
                

               
                
            
             
            </div>
    
   
  )
}

export default Explore
