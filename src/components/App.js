import React from 'react';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import './css/App.css'


function App() {
  return (
    <div className="app">
      <div id="blackBar"></div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
