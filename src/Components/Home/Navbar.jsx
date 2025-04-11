import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./nav.css"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariant = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
        <div
          className="max-w-[1300px] mx-auto 
           flex justify-between text-gray-200 text-xl items-center px-12 h-20 "
        >
          <a href="#" >Uddyan Sahu</a>

          <ul className=" hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
              <Link to="hero" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Skill
              </Link>
            </li>
            <li>
              <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>
              Contact
              </Link>
            </li>
          </ul>

          <div onClick={toggleNav} className="md:hidden z-50 text-violet-600 cursor-pointer">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          <motion.div
            initial={false}
            animate={nav ? "open" : "closed"}
            variants={menuVariant}
            className="fixed left-0 top-0 w-full min-h-screen bg-purple-950 bg-opacity-70 backdrop-blur-md z-40">

            <ul className="font-semibold text-4xl space-y-10 mt-24 text-center cursor-pointer">
           <li>
              <Link to="hero" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Skill
              </Link>
            </li>
            <li>
              <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>
              Contact
              </Link>
            </li>
            </ul>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
