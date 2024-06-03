import React from 'react';
import './FrontPage.css';
import CursorEffect from '../Cursor/CursorEffect';
import Spacer from '../Utility/Spacer';
import NamePlate from './NamePlate/NamePlate';
import StoryBourd from './StoryBourd/StoryBourd';
import JobBourd from './JobBourd/JobBourd.js';
import Socials from './Socials/Socials.js';
import ProjectBourd from './ProjectBourd/ProjectBourd.js';

const FrontPage = () => {
  return (
    <div className='MainBox'>
      <CursorEffect />
      <div className='LeftBox'>
        
        <NamePlate />
        <Socials />
        <Spacer amount={-6} />
      </div>
      <div className='RightBox'>
        <StoryBourd />
        <ProjectBourd />
        <JobBourd />
        <Spacer amount={1} />
      </div>
    </div>
  );
};
//edit 23 to 11
export default FrontPage;
