import React, { useEffect, useState } from 'react';

const ScrollTracker = ({ scrollTop }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(scrollTop);
  }, [scrollTop]);

  return (
    <div>
      
      Scroll Position: {position}
    </div>
  );
};

export default ScrollTracker;


/*import './ScrollTracker.css';

const ScrollTracker = () => {
  return (
    <div className='ScrollTracker'>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ScrollTracker;*/