import { SlideBar } from '@components';
import ToggleObserver from '@lib/ToggleObserver';
import { useEffect } from 'react';
import Home from './components/Home/Home';

function App() {
  useEffect(() => {
    ToggleObserver.open();
  }, []);

  return (
    <>
      <Home />
      <SlideBar />
    </>
  );
}

export default App;
