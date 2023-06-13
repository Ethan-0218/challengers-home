import { useSearchBookmarks } from '@hooks/search.hooks';
import { useState } from 'react';
import { InputChangeHandler } from '../../../../types/util.types';
import Icon from '../../../Icon/Icon';
import BookmarkItem from '../BookmarkItem/BookmarkItem';
import * as S from './SearchBar.styles';
import { useModeStore } from '@store/mode.store';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { bookmarks } = useSearchBookmarks(query);
  const setMode = useModeStore((s) => s.setMode);

  const handleChange: InputChangeHandler = (e) => {
    const text = e.target.value;
    setQuery(text);
    setMode(text ? 'search' : 'list');
  };

  return (
    <>
      <S.Container>
        <S.InputContainer>
          <Icon name="icon_search" size={20} />
          <S.Input placeholder="북마크 검색" onChange={handleChange} />
        </S.InputContainer>
      </S.Container>
      {!!query &&
        (bookmarks.length ? (
          bookmarks.map((b) => <BookmarkItem item={b} key={b.id} />)
        ) : (
          <div style={{ padding: '0 32px' }}>검색 결과가 없어요...</div>
        ))}
    </>
  );
};

export default SearchBar;
