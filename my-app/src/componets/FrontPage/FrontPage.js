import React, { useState, useEffect } from 'react';
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
  const [scrollTop, setScrollTop] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  const updateScrollInfo = () => {
    const currentScrollTop = document.body.scrollTop;
    const currentDocumentHeight = document.body.scrollHeight - window.innerHeight;
    setScrollTop(currentScrollTop);
    setDocumentHeight(currentDocumentHeight);
  };

  useEffect(() => {
    
    document.body.addEventListener('scroll', updateScrollInfo);
    document.body.addEventListener('resize', updateScrollInfo);
    document.body.addEventListener('DOMContentLoaded', updateScrollInfo);
    updateScrollInfo();
    return () => {
      document.body.removeEventListener('scroll', updateScrollInfo);
      document.body.removeEventListener('resize', updateScrollInfo);
      document.body.removeEventListener('DOMContentLoaded', updateScrollInfo);
    };
  }, []);

  return (
    <div className='MainBox'>
      <CursorEffect />
      <div className='LeftBox'>
        <NamePlate />
        <div className='HidesInSmall'>
          <ScrollTracker scrollTop={scrollTop} documentHeight={documentHeight} />
          <Spacer amount={24} />
        </div>
        <Socials />
      </div>
      <div className='RightBox'>
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