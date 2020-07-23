import React from "react";
import "./App.scss";
import "./components/Section/Section.scss";
import Header from "./components/Header/Header";
import Enterance from "./components/Enterance/Enterance";
import AboutMe from "./components/AboutMe/AboutMe";
import Career from "./components/Career/Career";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Fab from "@material-ui/core/Fab";
import { animateScroll as scroll } from "react-scroll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function App() {
  const titles = [
    { title: "About Me", id: "about-me", offset: -60 },
    { title: "Career", id: "career", offset: -60 },
    { title: "Education", id: "education", offset: -60 },
    { title: "Skills", id: "skills", offset: -30 },
    { title: "Contact", id: "contact", offset: 0 },
  ];

  console.log(
    '"     ######     \n      ######     \n          \n      ######     \n      ######     \n      ######     \n      ######     \n      ###### LAYDA was here.. :) "'
  );

  return (
    <div className="App">
      <Header titles={titles} />
      <Enterance />
      <AboutMe />
      <Career />
      <Education />
      <Skills />
      <Contact />
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", right: "25px", bottom: "25px" }}
        onClick={() => {
          scroll.scrollToTop({
            spy: true,
            smooth: true,
          });
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </div>
  );
}

export default App;
