import React from 'react';
import './FrontPage.css';
import CursorEffect from '../Cursor/CursorEffect';
import Spacer from '../Utility/Spacer';
import NamePlate from './NamePlate/NamePlate';
import StoryBourd from './StoryBourd/StoryBourd';
import JobBourd from './JobBourd/JobBourd.js';
import Socials from './Socials/Socials.js';
import ProjectBourd from './ProjectBourd/ProjectBourd.js';
import GreyLine from '../Utility/GreyLine.js';

const FrontPage = () => {
  return (
    <div className='MainBox'>
      <CursorEffect />
      <div className='LeftBox'>
        
        <NamePlate />
        <Socials />
        <Spacer amount={-3.5} />
      </div>
      <div className='RightBox'>
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