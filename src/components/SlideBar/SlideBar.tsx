import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import * as S from './SlideBar.styles';

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
    <S.Container show={show} height={height}>
      <button onClick={toggle}>Close</button>
      SlideBar
    </S.Container>
  );
};

export default SlideBar;

export const toggleObservable = new BehaviorSubject<boolean>(false);

export const toggle = () => toggleObservable.next(!toggleObservable.getValue());
