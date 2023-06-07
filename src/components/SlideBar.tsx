import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { BAR_WIDTH } from '../constants/slidebar.constants';

const SlideBar = () => {
  const [show, setShow] = useState(false);
  const [height, setHeiht] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeiht(window.innerHeight);
    });
    const s = toggleObservable.subscribe(setShow);
    return () => s.unsubscribe();
  }, []);

  return (
    <div
      style={{
        transition: 'transform 0.3s ease-out',
        transform: show ? `translateX(-${BAR_WIDTH}px)` : `translateX(0px)`,
        width: BAR_WIDTH,
        height,
        background: 'red',
        position: 'absolute',
        right: -BAR_WIDTH,
        top: 0,
      }}
    >
      <button onClick={toggle}>Close</button>
      SlideBar
    </div>
  );
};

export default SlideBar;

export const toggleObservable = new BehaviorSubject<boolean>(false);

export const toggle = () => toggleObservable.next(!toggleObservable.getValue());
