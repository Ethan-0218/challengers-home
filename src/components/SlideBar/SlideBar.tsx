import ToggleObserver from '@lib/ToggleObserver';
import { FC, useEffect, useState } from 'react';
import * as S from './SlideBar.styles';
import BookmarkList from './components/BookmarkList/BookmarkList';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import AddBookmarkButton from './components/AddBookmarkButton/AddBookmarkButton';

const SlideBar: FC = () => {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });
    const s = ToggleObserver.subscribe(setShow);
    return () => s.unsubscribe();
  }, []);

  return (
    <S.Container show={show} height={height}>
      <Header />
      <SearchBar />
      <BookmarkList />
      <AddBookmarkButton />
    </S.Container>
  );
};

export default SlideBar;
