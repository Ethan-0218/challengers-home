import React, { useEffect, useState } from 'react';
import { BAR_WIDTH } from '../constants/slidebar.constants';

const SlideBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div
      style={{
        transition: '0.3s ease-out',
        transform: show ? `translateX(-${BAR_WIDTH}px)` : `translateX(0px)`,
        width: BAR_WIDTH,
        height: window.innerHeight,
        background: 'red',
        position: 'absolute',
        right: -BAR_WIDTH,
        top: 0,
      }}
    >
      SlideBar
    </div>
  );
};

export default SlideBar;
