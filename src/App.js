// src/App.js
import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Skills />
    </div>
  );
}

export default App;
