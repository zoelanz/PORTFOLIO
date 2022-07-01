import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";

import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import "./Home.scss";
import "animate.css";

function Home() {
  return (
    <div className="containerHome">
      <NavBar />

      <div className="home">
        <div className="logo">
          <p>ZL</p>
        </div>

        <div className="network">
          <FaLinkedinIn className="linkedin" size={45} />
          <BsGithub className="github" size={45} />
          <HiMail className="github" size={48} />
        </div>

        <div className="name ">
          <p>I'M</p>
          <p className="nameAfter">ZOE LANZ</p>
        </div>

      </div>

      <AboutMe />
      <Skills />
      <Works />
    </div>
  );
}

export default Home;
