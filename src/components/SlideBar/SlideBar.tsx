import { FC, useEffect, useState } from 'react';
import ToggleObserver from '@lib/ToggleObserver';
import * as S from './SlideBar.styles';
import BookmarkList from './components/BookmarkList/BookmarkList';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

const SlideBar: FC = () => {
  const [show, setShow] = useState(false);
  const [height, setHeiht] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeiht(window.innerHeight);
    });
    const s = ToggleObserver.subscribe(setShow);
    return () => s.unsubscribe();
  }, []);

  return (
    <S.Container show={show} height={height}>
      <Header />
      <SearchBar />
      <BookmarkList />
    </S.Container>
  );
};

export default SlideBar;
