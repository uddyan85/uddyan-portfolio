import React from "react";
import profiliePic from "../../assets/Images/pi.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="mt-24 max-w-[1500px] max-auto relative">
        <div className=" ml-10 grid md:grid-cols-2 place-items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                2000,
                "Java Dev",
                2000,
                "Software Dev",
                2000,
                "Fastidious",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-white text-xl md:text-5xl mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
            >
              HEY, I AM <br />
              <span className="text-purple-500">UDDYAN SAHU</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
            >
              I am a passionate MERN Developer with over 1 year experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-row items-center gap-6 my-4 md:mb-0"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(0, 0, 0, 0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
              >
                <a href="https://drive.google.com/file/d/1S9ZPPlWr_IsjsiDhEg_5rq_yHzfTQ8mZ/view?usp=sharing">
                Download CV
                </a>
              </motion.button>

              <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20 cursor-pointer">
                <motion.a whileHover={{ scale: 1.2 }} 
                className="text-gray-400"
                >
                  <a href="https://github.com/uddyan85/">
                  <AiOutlineGithub />
                  </a>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-blue-600"
                >
                  <a href="https://linkedin.com/in/uddyan-sahu-77u666/">
                  <AiOutlineLinkedin />
                  </a>
                </motion.a>

                <motion.a whileHover={{ scale: 1.2 }} 
                className="text-green-600"
                >
                  <a href="https://wa.me/+918518903022">
                  <AiOutlineWhatsApp />
                  </a>
                </motion.a>
                
              </div>
            </motion.div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={profiliePic}
            className="w-[300px] md:w-[450px]"
          ></motion.img>
        </div>

        <motion.div
          initial={{ opacity: 0,  }}
          whileInView={{ opacity: 2,  }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.8 }}
          className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-20"
        >
          <p className=" text-gray-200 mr-5">My Tech Stack</p>
          <DiHtml5 className="text-orange-600 mx-2 " />
          <DiCss3 className="text-blue-600 mx-2 " />
          <DiJavascript1 className="text-yellow-500 mx-2 " />
          <DiReact className="text-blue-500 mx-2 " />
          <DiNodejsSmall className="text-green-600 mx-2 " />
          <DiJava className="text-blue-800 mx-2 " />
        </motion.div>

        <div className="absolute inset-0 hidden md:block">
          <ShinyEffect left={0} top={0} size={1540} />
        </div>
      </div>
    </>
  );
};

export default Hero;
