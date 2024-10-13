// src/components/SectionArrow.js
import React from 'react';
import './SectionArrow.css';

const SectionArrow = () => (
  <div className="section-arrow">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C27.75 7.5 30 9.75 30 12.5C30 15.25 27.75 17.5 25 17.5C22.25 17.5 20 15.25 20 12.5C20 9.75 22.25 7.5 25 7.5ZM30 42.5H20V22.5H30V42.5Z" fill="#E5E7EB"/>
    </svg>
  </div>
);

export default SectionArrow;