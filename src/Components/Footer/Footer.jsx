import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa"
import logo from "../../assets/Images/us.svg"


const Footer = () => {
  return (
    <>
      <div className="max-w-full mx-auto flex justify-between p-8 text-sm md:text-lg  
      border-purple-900 rounded-lg bg-purple-900/40"
      >
        <div className="space-y-4">
            <h3 className="text-2xl text-gray-200 font-semibold">Uddyan Sahu</h3>
           <hr className=" text-white" />

            <div className="flex flex-row gap-6 text-gray-400 text-3xl ">

            <a className="text-shadow-gray-950" href="https://github.com/uddyan85/"> <FaGithubAlt/> </a>
            <a className="text-blue-700" href="https://linkedin.com/in/uddyan-sahu-77u666/"> <FaLinkedinIn/> </a>
            </div>
        </div>
             <p className="text-white text-xl font-extralight">@2025 <span>Uddyan</span></p>
      </div>
          <div className="max-w-full mx-auto flex justify-center mt-0  items-center p-5  bg-amber-100">
          <div className="text-black flex items-center font-bold">
          Made by
          <a href="#">
          <img src={logo} alt="logo" className="ml-2 h-4" />
          </a>
          </div>
      </div>
    </>
  );
};

export default Footer;
