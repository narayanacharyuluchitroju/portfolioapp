// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <ul>
        <li>
          <div className="project-title">
            <strong>Sequence-to-Sequence Language Translation (English to French)</strong> 
            <span className="project-duration">(Spring 2023)</span>
          </div>
          <div className="project-description">
            <ul>
              <li>Developed a Sequence-to-Sequence model using PyTorch to translate English sentences into French.</li>
              <li>Implemented both vanilla Seq2Seq and Seq2Seq with attention mechanisms, highlighting the performance differences between the two approaches.</li>
              <li>Utilized pre-trained GloVe embeddings for word representation, enhancing the model’s understanding of word semantics.</li>
              <li>Preprocessed data, including tokenization and embedding, and trained models using a large bilingual corpus.</li>
              <li>Achieved improved translation accuracy with attention by effectively aligning source and target languages during decoding.</li>
              <li>Evaluated model performance through BLEU score and translation quality analysis.</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="project-title">
            <strong>SplitWise Application Clone</strong> 
            <span className="project-duration">(Spring 2022)</span>
          </div>
          <div className="project-description">
            <ul>
              <li>Built a full-stack clone of SplitWise using Java Spring Boot and React, with an SQL database backend for efficient data management.</li>
              <li>Developed backend services using Java Spring Boot and implemented the frontend in React to ensure a seamless and user-friendly interface.</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="project-title">
            <strong>Audible Image Captioning</strong> 
            <span className="project-duration">(Spring 2022)</span>
          </div>
          <div className="project-description">
            <ul>
              <li>Created an image captioning model using PyTorch and integrated it with Flask for real-time predictions.</li>
              <li>Managed data flow and storage through an end-to-end SQL database system, allowing for efficient handling of images and captions.</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
