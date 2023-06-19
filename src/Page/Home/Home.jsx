import React from "react";
import "./Home.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {GrYoutube} from "react-icons/gr"
import Countdown from "../../Components/ui/CountDown";
const Home = () => {
  return (
    <div>
      <div className=" w-full h-[100vh] pt-5 pb-5 police  ">
        <div className=" h-[85vh] flex-col w-full flex items-center pt-24   rounded-xl ">
          <h1 className="font-bold text-9xl text-white mt-7 mb-4 ">
        Coming Soon
          </h1>

          <p className=" text-center text-white text-2xl mt-2 mb-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam{" "}
            <br /> fuga qui officia accusantium doloremque dignissimos!
          </p>

          <div className="mt-8 w-[600px] rounded-xl h-[80px] flex justify-center items-center opacity-40  bg-slate-500 px-3  py-2">
            <input
              type="text"
              className="w-[100%] h-[100%] bg-slate-500 outline-none border-none text-white placeholder:text-white "
              placeholder="Search"
            />{" "}
            <button className="btn btn-primary bg-blue-600 outline-none border-none text-white">Register</button>
          </div>

          <Countdown/>

          <div className="contact w-full h-full  mt-4 flex justify-center items-center flex-col gap-5">
            <div>
              <p className="text-white font-semibold text-2xl">We can contact us using this</p>
              <span className="text-center w-full flex justify-center items-center">
                <a href="email:sadoscott25@gmail.com" className="w-full text-white font-semibold text-lg text-center">sadoscott25@gmail.com</a>
              </span>
            </div>
            <div>
              <ul className="flex gap-5 justify-center items-center ">
                
                <li>
                  <a href=""> <AiFillTwitterCircle style={{color:"white"}} /> </a>
                </li>
                <li>
                  <a href=""><GrYoutube style={{color:"white"}}/></a>
                </li>
                <li>
                  <a href=""><AiFillInstagram style={{color:"white"}}/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
