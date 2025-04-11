import React from "react";
import "./App.css";
import Navbar from "./Components/Home/Navbar";
import Hero from "./Components/Home/Hero";
import Skills from "./Components/AboutMe/Skills";
import Portfolio from "./Components/AboutMe/Portfolio";
// import Experience from "./Components/AboutMe/Experience";
import Contact from "./Components/ContactMe/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
