import React from 'react';
import Atmosphere from './components/Atmosphere/Atmosphere';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import CodingProfiles from './components/CodingProfiles/CodingProfiles';
import Contact from './components/Contact/Contact';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Atmosphere />
      <main>
        <Hero />
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
