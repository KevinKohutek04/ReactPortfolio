import React, { useState, useEffect } from 'react';
import './ScrollTracker.css';

const ScrollTracker = ({ scrollTop, documentHeight }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (documentHeight > 0) {
      const scrollFraction = scrollTop / documentHeight;
      if (scrollFraction < 1 / 3) {
        setActiveSection('about');
      } else if (scrollFraction < 2 / 3) {
        setActiveSection('experiences');
      } else {
        setActiveSection('projects');
      }
    }
  }, [scrollTop, documentHeight]);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='ScrollTracker'>
      <div className='section-list'>
        <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={`section-item ${activeSection === 'about' ? 'active' : ''}`}>
          About
        </a>
        <a href="#experiences" onClick={(e) => handleSmoothScroll(e, 'experiences')} className={`section-item ${activeSection === 'experiences' ? 'active' : ''}`}>
          Experiences
        </a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={`section-item ${activeSection === 'projects' ? 'active' : ''}`}>
          Projects
        </a>
      </div>
    </div>
  );
};


export default ScrollTracker;
