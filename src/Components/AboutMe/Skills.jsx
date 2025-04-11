import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiExtjs,
  DiMongodb,
  DiFirebase,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";
import Reveal from "../Footer/Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600 mx-2 size-10" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600 mx-2 size-10" /> },
      {name: "JavaScript",icon: <DiJavascript1 className="text-yellow-500 mx-2 size-10" />,},
      { name: "React", icon: <DiReact className="text-blue-500 mx-2 size-10" /> },
      { name: "Angular", icon: <DiAngularSimple className="text-red-500 mx-2 size-10" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {name: "Node.Js", icon: <DiNodejsSmall className="text-green-600 mx-2 size-10" />,},
      { name: "MongoDb", icon: <DiMongodb className="text-green-700 mx-2 size-10" /> },
      { name: "Exp.Js", icon: <DiExtjs className="text-yellow-400 mx-2 size-10" /> },
      {name: "Firebase", icon: <DiFirebase className="text-yellow-700 mx-2 size-10" />,},
    ],
  },
  {
    category: "Java Dev",
    technologies: [
      {name: "Java",icon: <DiJava className="text-blue-600 mx-2 size-10" />,},
    ],
  },
];

const Skills = () => {
  return (
    <>
      <div
        className=" max-w-[1000px] mx-auto flex justify-center px-4 text-gray-200 pb-8 md: flex-col py-12" id="skills">
          <Reveal>
        
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend projects. Check them
          <a href="https://github.com/uddyan85" className="underline">
            there
          </a>
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 ">
          {skills.map((skill, index) => (
            <div key={index} className=" border border-purple-900 p-6 rounded-lg bg-purple-900/40 w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </Reveal>

      </div>
      ;
    </>
  );
};

export default Skills;
