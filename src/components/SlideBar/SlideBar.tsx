import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import * as S from './SlideBar.styles';
import { RecoilRoot } from 'recoil';
import BookmarkList from './components/BookmarkList/BookmarkList';
import Header from './components/Header/Header';

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
    <RecoilRoot>
      <S.Container show={show} height={height}>
        <Header />
        <BookmarkList />
      </S.Container>
    </RecoilRoot>
  );
};

export default SlideBar;

export const toggleObservable = new BehaviorSubject<boolean>(true);

export const toggle = () => toggleObservable.next(!toggleObservable.getValue());
