import React, { useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  useEffect(() => {
    const cursorCircle = document.querySelector('.cursor-circle');

    const moveCursor = (e) => {
      cursorCircle.style.left = `${e.clientX}px`;
      cursorCircle.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="cursor-circle"></div>;
};

export default CursorEffect;
