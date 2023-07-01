import { SlideBar } from '@components';
import ToggleObserver from '@lib/ToggleObserver';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';

function App() {
  const [{ width, height }, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    ToggleObserver.open();
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* <Home /> */}
      {/* <iframe
        src="https://teamchallengers.oopy.io/"
        style={{ width, height }}
      /> */}
    </>
  );
}

export default App;
