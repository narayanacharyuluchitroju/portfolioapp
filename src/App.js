// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm'; // Import the ContactForm component

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleFormSubmit = () => {
    setFormSubmitted(true); // Set form submission state to true
  };

  return (
    <div className="container">
      {!formSubmitted ? (
        <div className="contact-form-section">
          <h2>Please provide your details to access the portfolio</h2>
          <ContactForm onSubmit={handleFormSubmit} /> {/* Pass the handleFormSubmit function */}
        </div>
      ) : (
        <>
          <Header />
          <Education />
          <WorkExperience />
          <Projects />
          <Certifications />
          <Skills />
          <footer>
            &copy; 2024 Raghavendra Chitroju
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
