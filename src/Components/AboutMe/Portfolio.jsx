import React from "react";
import Project1 from "../../assets/Images/project1.png";
import Project2 from "../../assets/Images/project2.png";
import Project3 from "../../assets/Images/project3.png";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "../Footer/Reveal";

const projects = [
  {
    img: Project1,
    title: "Project: Smart Data Management",
    description: "Empowering Insurance Agents with Smart Data Management",
    links: {
      site: "#",
      github: "https://github.com/uddyan85/",
    },
  },
  {
    img: Project2,
    title: "Project: Trivia Quiz",
    description: "Trivia: Test your knowledge across various topics and challenge yourself to achieve the highest score.",
    links: {
      site: "https://uddyan85.github.io/Trivia/index.html",
      github: "https://github.com/uddyan85/Trivia",
    },
  },
  {
    img: Project3,
    title: "CSVTU Tech-Fest 2025",
    description: "Developed Gamified Educational Web Platform",
    links: {
      site: "#",
      github: "https://github.com/uddyan85/",
    },
  },
];



const Portfolio = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto p-6 md:my-20 bg-" id="portfolio">
        <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">Portfolio</h2>
        {projects.map((project, index) => (
          <Reveal>

          <div
            key={index}
            className={`flex flex-col md:flex-row
              border border-purple-500 rounded-lg bg-purple-900/40
              ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 p-4"
          >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                />
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full md:w-1/2 p-4 flex flex-col justify-center "
            >
              
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>



              <div className="flex space-x-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgb(0, 0, 0, 0.3)",
                  }}>
                  <a
                    href={project.links.site}
                    className="px-4 py-3 font-extralight bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">
                    View Site 
                  </a>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgb(0, 0, 0, 0.3)",
                  }}
                  className="flex space-x-4">
                  <a
                    href={project.links.github}
                    className="px-4 py-3 font-extralight bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">
                      <AiFillGithub className="size-5"/>
                  </a>
                </motion.button>
              </div>


            </motion.div>
          </div>
          </Reveal>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
