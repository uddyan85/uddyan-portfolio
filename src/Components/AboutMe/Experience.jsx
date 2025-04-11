import React from "react";
import { motion } from "framer-motion";
import Reveal from "../Footer/Reveal";

const experiences = [
  {
    company: "Hackathon",
    period: "2023 - 2025",
    description: "MERN Developement",
  },
  {
    company: "First Company",
    period: "2024 - 2025",
    description: "MERN Developement",
  },
  {
    company: "First Company",
    period: "2024 - 2025",
    description: "MERN Developement",
  },

];

const Experience = () => {
  return (
    <>
      <div className="p-13 max-w-[370px] mx-auto">
        <h1 className="text-4xl text-grat-200 font-bold text-center mb-12 text-white">
          Experience
        </h1>
        <motion.div className="space-y-8" initial="hidden" animate="visible">
          {experiences.map((exp, index) => (
            <Reveal>

            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 rounded-lg p-7 shadow-md
        hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">{exp.company}</h2>
              <p className="text-gray-300">{exp.period}</p>
              <p className="text-gray-400 mt-4">{exp.description}</p>
            </motion.div>
            </Reveal>

          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Experience;
