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
  const [containerHeight, setContainerHeight] = useState(0);

  const handleScroll = () => {
    if (rightBoxRef.current) {
      const currentScrollTop = rightBoxRef.current.scrollTop;
      console.log('Scroll Top:', currentScrollTop); // Debugging log
      setScrollTop(currentScrollTop);
    }
  };

  useEffect(() => {
    const rightBox = rightBoxRef.current;
    if (rightBox) {
      rightBox.addEventListener('scroll', handleScroll);
      const scrollHeight = rightBox.scrollHeight;
      const clientHeight = rightBox.clientHeight;
      const calculatedHeight = scrollHeight - clientHeight;
      console.log('Scroll Height:', scrollHeight); // Debugging log
      console.log('Client Height:', clientHeight); // Debugging log
      console.log('Calculated Container Height:', calculatedHeight); // Debugging log
      setContainerHeight(calculatedHeight);
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
        <ScrollTracker scrollTop={scrollTop} containerHeight={containerHeight} />
        <Spacer amount={24} />
        <Socials />
      </div>
      <div className='RightBox' ref={rightBoxRef}>
        <StoryBourd />
        <GreyLine />
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