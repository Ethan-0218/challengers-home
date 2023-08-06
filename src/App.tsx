import ToggleObserver from '@lib/ToggleObserver';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

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
    <QueryClientProvider client={queryClient}>
      <Home />
      {/* <SlideBar /> */}
    </QueryClientProvider>
  );
}

export default App;

const queryClient = new QueryClient();
