import React from 'react';
import './FrontPage.css';
import CursorEffect from '../Cursor/CursorEffect';
import Spacer from '../Utility/Spacer';
import NamePlate from './NamePlate/NamePlate';
import StoryBourd from './StoryBourd/StoryBourd';
import JobBourd from './JobBourd/JobBourd.js';
import Socials from './Socials/Socials.js';

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
        <JobBourd />
      </div>
    </div>
  );
};

export default FrontPage;
