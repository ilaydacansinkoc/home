import React from 'react';
import './App.scss';
import './components/Section/Section.scss';
import Header from './components/Header/Header';
import Enterance from './components/Enterance/Enterance';
import AboutMe from './components/AboutMe/AboutMe';
import Career from './components/Career/Career';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {
  const titles = [
    { title: 'About Me', id: 'about-me' },
    { title: 'Career', id: 'career' },
    { title: 'Education', id: 'education' },
    { title: 'Skills', id: 'skills' },
    { title: 'Interests', id: 'interests' },
    { title: 'Contact', id: 'contact' },
  ];
  return (
    <div className='App'>
      <Header titles={titles} />
      <Enterance />
      <AboutMe />
      <Career />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
