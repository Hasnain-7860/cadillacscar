import React, { useRef, useState } from "react";
import { ExploreData, ExploreDataa, ExploreDataaa, ExploreDataaaa, LineupData } from "../components/MockData/data";
import { div } from "motion/react-client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Explore.css";
import { data, Link, NavLink } from "react-router-dom";

const Explore = () => {
  
  const slider = useRef();
  let tx = 0;
  const [active, setActive] = useState("0");
  

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
        <ul className=" gap-5 flex pl-3  w-[390px] items-center text-[10px] overflow-scroll lg:flex lg:w-full lg:gap-20 lg:overflow-auto lg:justify-center lg:items-center  lg:text-[20px] font-semibold">

          <li  onClick={()=>{setActive("0")}} className={` p-4 px-[100px] border-solid border-2 border-black cursor-pointer ${active =="0" ? "bg-black text-white": "bg-white text-black"}`}>
            <button>
              <a >ELECTRIC</a>
            </button>
           
          </li>

          <li onClick={()=>{setActive("1")}} className={` p-4 px-[100px] border-solid border-2 border-black cursor-pointer  ${active =="1" ? "bg-black text-white": "bg-white text-black"}  `}>
            <button>
              <a >SUVS</a>
            </button>
            
          </li>
          <li onClick={()=>{setActive("2")}} className={` p-4 px-[100px] border-solid border-2 border-black cursor-pointer  ${active =="2" ? "bg-black text-white": "bg-white text-black"}`}>
            <button>
              <a >SEDANS</a>
            </button>
          </li>

          <li onClick={()=>{setActive("3")}} className={` p-4 px-[100px] border-solid border-2 border-black  cursor-pointer ${active =="3" ? "bg-black text-white " : "bg-white text-black " }  `}>
            <button>
              <a >SERIES</a>
            </button>
          </li>
         

         
         
          
        </ul>
      </div>

      {active === "0" && (
        <div className="flex flex-col justify-center items-center">
      <div className="overflow-hidden w-[100vw] md:w-[80%] lg:w-[100%] ">
        <ul
          id="car"
          ref={slider}
          className="flex w-[600%] overflow-x-hidden  lg:w-[240%]"
        >
          {ExploreData.map((data) => (
            <div key={data.id}>
             <NavLink to={data.Link}  onClick={() => {window.scrollTo(0, 0);}}>                           
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
              </NavLink>
              
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
    </div>
      )}

      {active === "1" && (
          <div className="flex flex-col justify-center items-center">
      <div className="overflow-hidden w-[100vw] md:w-[80%] lg:w-[100%] ">
        <ul
          id="car"
          ref={slider}
          className="flex w-[600%] overflow-x-hidden  lg:w-[240%]"
        >
          {ExploreDataa.map((data) => (
            <div key={data.id}>
              <NavLink to={data.Link} target='_blank' onClick={() => {window.scrollTo(0, 0);}}>
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
              </NavLink>
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
    </div>
       
      )}
      {active === "2" && (
       <div className="flex flex-col justify-center items-center">
      <div className="overflow-hidden w-[100vw] md:w-[80%] lg:w-[100%] ">
        <ul
          id="car"
          ref={slider}
          className="flex w-[600%] overflow-x-hidden  lg:w-[240%]"
        >
          {ExploreDataaa.map((data) => (
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
    </div>
      )}
      {active === "3" && (
        <div className="flex flex-col justify-center items-center">
      <div className="overflow-hidden w-[100vw] md:w-[80%] lg:w-[100%] ">
        <ul
          id="car"
          ref={slider}
          className="flex w-[600%] overflow-x-hidden  lg:w-[240%]"
        >
          {ExploreDataaaa.map((data) => (
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
    </div>
  )}
    </div>
  );
};

export default Explore;
