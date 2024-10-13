// src/components/Certifications.js
import React from 'react';

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <ul>
        <li>
          <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=CDE22CA31096BDC5BA53FB79DC3C6D5CF9AAC8E77EF73A6FC5B2935917DECB61" target="_blank" rel="noopener noreferrer">
            Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
          </a>
        </li>
        <li>
          <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=AEBEFF1D8CFCD32B8DFB0C19CABA2BEE5E6038A3F8431D187683E1DF2B40063E" target="_blank" rel="noopener noreferrer">
            Oracle Database SQL Certified Associate
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
