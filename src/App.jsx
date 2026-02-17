import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import Atmosphere from './components/Atmosphere/Atmosphere';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';
import Tools from './components/Tools/Tools';
import Certificates from './components/Certificates/Certificates';
import CodingProfiles from './components/CodingProfiles/CodingProfiles';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className="app-container">
        <Atmosphere />
        <main>
          <Hero />
          <About />
          <Skills />
          <Languages />
          <Tools />
          <Certificates />
          <CodingProfiles />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
