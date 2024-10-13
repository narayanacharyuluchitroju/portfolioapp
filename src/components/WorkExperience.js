// src/components/WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  return (
    <section>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>Graduate Research Assistant</strong> - Wright State University (April 2024 – Present)
          <ul>
            <li>Designed and deployed object detection models (Faster R-CNN, DETR, DiffusionDet) for research on infrared imagery.</li>
            <li>Implemented scalable MLOps pipelines for model training, evaluation, and deployment.</li>
            <li>Conducted research in cross-modality architectures for night-time object detection.</li>
          </ul>
        </li>
        <li>
          <strong>Associate Consultant</strong> - Oracle, Bangalore, India (Aug 2021 – Dec 2022)
          <ul>
            <li>Led ETL development using Informatica PowerCenter and DataStage, optimizing data workflows.</li>
            <li>Built cloud-based ETL solutions on AWS and Azure.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
