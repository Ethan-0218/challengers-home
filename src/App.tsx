import { useEffect } from 'react';
import './App.css';
import { SlideBar } from '@components';
import ToggleObserver from '@lib/ToggleObserver';
import logo from './logo.svg';
import CreateDirectoryPopup from './components/CreateDirectoryPopup/CreateDirectoryPopup';
import CreateBookmarkPopup from './components/CreateBookmarkPopup/CreateBookmarkPopup';

function App() {
  useEffect(() => {
    ToggleObserver.open();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SlideBar />
      {/* <div style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}> */}
      {/* <CreateDirectoryPopup /> */}
      {/* <CreateBookmarkPopup /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
