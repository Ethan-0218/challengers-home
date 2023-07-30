import ToggleObserver from '@lib/ToggleObserver';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import SlideBar from './components/SlideBar/SlideBar';

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
      <Home />
      {/* <SlideBar /> */}
    </>
  );
}

export default App;
