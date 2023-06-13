import ToggleObserver from '@lib/ToggleObserver';
import { useModeStore } from '@store/mode.store';
import { FC, useEffect, useState } from 'react';
import * as S from './SlideBar.styles';
import AddBookmarkButton from './components/AddBookmarkButton/AddBookmarkButton';
import BookmarkList from './components/BookmarkList/BookmarkList';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

const SlideBar: FC = () => {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const mode = useModeStore((s) => s.mode);

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
      {mode !== 'search' && <BookmarkList />}
      <AddBookmarkButton />
    </S.Container>
  );
};

export default SlideBar;
