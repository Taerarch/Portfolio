import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import './css/App.css'


function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
