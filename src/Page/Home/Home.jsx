import React from "react";
import "./Home.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import Countdown from "../../Components/ui/CountDown";
import { fadeIn, footerVariants, navVariants, staggerContainer, zoomIn } from "../../../util/motion";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <div className=" w-full h-[100vh] pt-5 pb-5 police  ">
        <div className=" h-[85vh] flex-col w-full flex items-center pt-24   rounded-xl ">
          <motion.h1
            className="font-bold text-9xl text-white mt-7 mb-4 "
            variants={navVariants}
            initial="hidden"
            whileInView="show"
          >
            Coming Soon
          </motion.h1>

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
            <button className="btn btn-primary bg-blue-600 outline-none border-none text-white">
              Register
            </button>
          </div>

          <Countdown />

          <motion.div
            className="contact w-full h-full  mt-4 flex justify-center items-center flex-col gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div>
              <motion.p className="text-white font-semibold text-2xl" variants={footerVariants} initial="hidden" whileInView="show" >
                We can contact us using this
              </motion.p>
              <span className="text-center w-full flex justify-center items-center">
                <motion.a                variants={fadeIn("bottom", "tween", 0.2, 1)}

                  href="email:sadoscott25@gmail.com"
                  className="w-full text-white font-semibold text-lg text-center"
                >
                  sadoscott25@gmail.com
                </motion.a>
              </span>
            </div>
            <div>
              <ul className="flex gap-5 justify-center items-center ">
                <li>
                  <a href="">
                    {" "}
                    <AiFillTwitterCircle style={{ color: "white" }} />{" "}
                  </a>
                </li>
                <li>
                  <a href="">
                    <GrYoutube style={{ color: "white" }} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <AiFillInstagram style={{ color: "white" }} />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
