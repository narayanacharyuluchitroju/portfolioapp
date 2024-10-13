// src/components/WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  return (
    <section className="work-experience-section">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <div className="job-title">
            <strong>Graduate Research Assistant - Wright State University</strong> 
            <span className="job-duration">(April 2024 – Present)</span>
          </div>
          <div className="job-description">
            <ul>
              <li>Designed and deployed object detection models (using Faster R-CNN, DETR, and DiffusionDet) for research on infrared imagery.</li>
              <li>Implemented scalable MLOps pipelines for model training, evaluation, and deployment, focusing on automation and performance optimization.</li>
              <li>Conducted research in cross-modality architectures for improved object detection in night-time conditions.</li>
              <li>Collaborated with academic and industry stakeholders to contribute AI-driven computer vision solutions.</li>
              <li>Performed feature engineering and model optimization to ensure high accuracy and performance.</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="job-title">
            <strong>Associate Consultant - Oracle, Bangalore, India</strong> 
            <span className="job-duration">(Aug 2021 – Dec 2022)</span>
          </div>
          <div className="job-description">
            <ul>
              <li>Led ETL development using Informatica PowerCenter and DataStage, ensuring efficient data extraction, transformation, and loading across various systems.</li>
              <li>Developed AI-powered data solutions using machine learning techniques to enhance data processing workflows, leading to a 30% improvement in processing speed.</li>
              <li>Built cloud-based ETL solutions on AWS and Azure, optimizing for performance and scalability.</li>
              <li>Engaged in full-stack development using Java Spring Boot and React for data-centric applications, integrating REST APIs and managing the backend with SQL databases.</li>
              <li>Designed and monitored MLOps pipelines for continuous model retraining and deployment.</li>
              <li>Mentored team members and provided technical guidance for building ETL pipelines and full-stack solutions.</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
