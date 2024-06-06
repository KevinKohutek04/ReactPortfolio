import React, { useRef, useState, useEffect } from 'react';
import './FrontPage.css';
import CursorEffect from '../Cursor/CursorEffect';
import Spacer from '../Utility/Spacer';
import NamePlate from './NamePlate/NamePlate';
import StoryBourd from './StoryBourd/StoryBourd';
import JobBourd from './JobBourd/JobBourd.js';
import Socials from './Socials/Socials.js';
import ProjectBourd from './ProjectBourd/ProjectBourd.js';
import GreyLine from '../Utility/GreyLine.js';
import ScrollTracker from '../Utility/ScrollTracker.js';

const FrontPage = () => {
  const rightBoxRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    if (rightBoxRef.current) {
      console.log('Scroll event triggered'); // Debugging line
      setScrollTop(rightBoxRef.current.scrollTop);
      console.log('Current scrollTop:', rightBoxRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const rightBox = rightBoxRef.current;
    if (rightBox) {
      rightBox.addEventListener('scroll', handleScroll);
      return () => {
        rightBox.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  return (
    <div className='MainBox'>
      <CursorEffect />
      <div className='LeftBox'>
        
        <NamePlate />
        <Socials />
        <Spacer amount={-3.5} />
      </div>
      <div className='RightBox' ref={rightBoxRef}>
      <ScrollTracker scrollTop={scrollTop} />
        <StoryBourd />
        <GreyLine/>
        <JobBourd />
        <GreyLine />
        <ProjectBourd />
        <Spacer amount={2} />
        
      </div>
    </div>
  );
};

export default FrontPage;
//<p className='descriptionpp'>Coded in Visual Studio using React.</p>