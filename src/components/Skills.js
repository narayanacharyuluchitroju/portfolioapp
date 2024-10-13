// src/components/Skills.js
import React from 'react';


const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h3>Programming</h3>
          <p>Java, Python, C++, Linux Shell Scripting, SQL, NoSQL</p>
        </div>
        <div className="skill-card">
          <h3>Application Frameworks</h3>
          <p>Spring Boot, React Js, Django</p>
        </div>
        <div className="skill-card">
          <h3>Big Data Technologies</h3>
          <p>Apache Spark, PySpark, Kafka</p>
        </div>
        <div className="skill-card">
          <h3>Cloud Platforms</h3>
          <p>Amazon Web Services (AWS), Microsoft Azure</p>
        </div>
        <div className="skill-card">
          <h3>Machine Learning & AI Frameworks</h3>
          <p>PyTorch, TensorFlow, Scikit-Learn, Hugging Face, MLflow, Keras</p>
        </div>
        <div className="skill-card">
          <h3>ETL Development</h3>
          <p>Informatica PowerCenter, IBM DataStage, Control M, Toad, SQL Developer</p>
        </div>
        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, Jenkins, Docker, Kubernetes, Postman</p>
        </div>
        <div className="skill-card">
          <h3>Data Governance</h3>
          <p>Data Quality, Metadata Management, Data Security</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
