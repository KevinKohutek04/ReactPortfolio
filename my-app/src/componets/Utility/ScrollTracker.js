import React, { useState, useEffect } from 'react';
import './ScrollTracker.css';

const ScrollTracker = ({ scrollTop, containerHeight }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    console.log(`Current scrollTop: ${scrollTop}`);
    console.log(`Container height: ${containerHeight}`);

    if (containerHeight > 0) {
      const scrollFraction = scrollTop / containerHeight;
      console.log(`Scroll fraction: ${scrollFraction}`);

      if (scrollFraction < 1 / 3) {
        setActiveSection('about');
        console.log('Active section: about');
      } else if (scrollFraction < 2 / 3) {
        setActiveSection('experiences');
        console.log('Active section: experiences');
      } else {
        setActiveSection('projects');
        console.log('Active section: projects');
      }
    } else {
      console.log('Container height is not set correctly');
    }
  }, [scrollTop, containerHeight]);

  return (
    <div className='ScrollTracker'>
      <div className='section-list'>
        <a href="#about"><div className={`section-item ${activeSection === 'about' ? 'active' : ''}`}>About</div></a>
        <a href="#experience"><div className={`section-item ${activeSection === 'experiences' ? 'active' : ''}`}>Experiences</div></a>
        <a href="#projects"><div className={`section-item ${activeSection === 'projects' ? 'active' : ''}`}>Projects</div></a>
      </div>
    </div>
  );
};

export default ScrollTracker;
