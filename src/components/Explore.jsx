import React, { useRef, useState } from "react";
import { ExploreData, LineupData } from "../components/MockData/data";
import { div } from "motion/react-client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Explore.css";
import { data, Link } from "react-router-dom";

const Explore = () => {
  
  const slider = useRef();
  let tx = 10;
  const [active, setActive] = useState("0");
  // const menu =() =>{
  //   setActive(!active)
  // }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideForward = () => {
    if (tx > -70) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <h1 className="text-[50px] font-mono py-4">
          EXPLORE THE CADILLAC LINEUP
        </h1>
      </div>
      <div >
        <ul className="  gap-20 lg:flex lg:flex-center items-center  container   ">
       
          <li onClick={()=>{setActive("0")}} className={` p-4 px-[100px] border-solid border-2 border-black cursor-pointer ${active =="0" ? "bg-black text-white": "bg-white text-black"}`}>
            <Link to="/">
            <button>
              <a >ELECTRIC</a>
            </button>
            </Link>
          </li>

          <li onClick={()=>{setActive("1")}} className={` p-4 px-[100px] border-solid border-2 border-black cursor-pointer  ${active =="1" ? "bg-black text-white": "bg-white text-black"}  `}>
            <Link to="/">
            <button>
              <a >SUCS</a>
            </button>
            </Link>
          </li>
          <li onClick={()=>{setActive("2")}} className={` p-4 px-[100px] border-solid border-2 border-black cursor-pointer  ${active =="2" ? "bg-black text-white": "bg-white text-black"}`}>
            <Link to="/">
            <button>
              <a >SEDANS</a>
            </button>
            </Link>
          </li>

          <li onClick={()=>{setActive("3")}} className={` p-4 px-[100px] border-solid border-2 border-black  cursor-pointer ${active =="3" ? "bg-black text-white " : "bg-white text-black " }  `}>
            <Link to="/">
            <button>
              <a >SEDANS</a>
            </button>
            </Link>
          </li>
         

         
         
          
        </ul>
      </div>

      {/* <div>
        <ul className="flex gap-20 ">
          {LineupData.map((data)=>(
            <div key={data.id}>
             <Link id="/"> <li className={`p-4 px-[100px] border-solid border-2  border-black text-white ${active==0 ? "bg-black  ":"bg-white "} text-balck  `}>
               <button onClick={menu}>{active?active:setActive} {data.name}</button></li></Link>
            </div>
          ))}
          
        </ul>
      </div> */}

      <div className="overflow-hidden w-[40vh] md:w-[80%] lg:w-[100%] ">
        <ul
          id="car"
          ref={slider}
          className="flex w-[600%] overflow-x-hidden  lg:w-[240%]"
        >
          {ExploreData.map((data) => (
            <div key={data.id}>
              <Link to="/Gadi" target='_blank'>
              <div className=" flex flex-col test-center justify-center items-center ">
                <img src={data.img} alt="" />
                <div className="flex flex-col items-center">
                  <h1>{data.year}</h1>
                  ________________
                  <h1 className="text-[35px] ">{data.name}</h1>
                  <h1> {data.text}</h1>
                  <button className="text-[30px]">{data.btn}</button>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex gap-5 mt-12 ">
        <a onClick={slideBackward} className="mb-4 cursor-pointer">
          <IoIosArrowBack className="text-[50px] border-solid border-2 border-black  " />
        </a>
        <a className="cursor-pointer" onClick={slideForward}>
          <IoIosArrowForward className="text-[50px] border-solid border-2 border-black" />
        </a>
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
  );
};

export default Explore;
