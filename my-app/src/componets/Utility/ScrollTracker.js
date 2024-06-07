import React, { useState, useEffect } from 'react';
import './ScrollTracker.css';

const ScrollTracker = ({ scrollTop, containerHeight }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (containerHeight > 0) {
      const scrollFraction = scrollTop / containerHeight;
      if (scrollFraction < 1 / 3) {
        setActiveSection('about');
      } else if (scrollFraction < 2 / 3) {
        setActiveSection('experiences');
      } else {
        setActiveSection('projects');
      }
    }
  }, [scrollTop, containerHeight]);

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
        <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
          <div className={`section-item ${activeSection === 'about' ? 'active' : ''}`}>About</div>
        </a>
        <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')}>
          <div className={`section-item ${activeSection === 'experiences' ? 'active' : ''}`}>Experiences</div>
        </a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>
          <div className={`section-item ${activeSection === 'projects' ? 'active' : ''}`}>Projects</div>
        </a>
      </div>
    </div>
  );
};

export default ScrollTracker;
