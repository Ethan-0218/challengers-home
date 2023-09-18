import { useBookmarkStore } from '@store/bookmark.store';
import { useModeStore } from '@store/mode.store';
import { searchBookmark } from '@utils/bookmark.utils';
import { useState } from 'react';
import { InputChangeHandler } from '../../../../types/util.types';
import Font from '../../../Font/Font';
import Icon from '../../../Icon/Icon';
import BookmarkItem from '../BookmarkItem/BookmarkItem';
import * as S from './SearchBar.styles';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { bookmarks } = useBookmarkStore();

  const result = searchBookmark(bookmarks, query);

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
        (result.length ? (
          result.map((b) => <BookmarkItem item={b} key={b.id} />)
        ) : (
          <S.NoResultContainer>
            <Icon name="emoji_glassman" size={26} />
            <Font size={16} color="#363636">
              검색 결과가 없어요
            </Font>
          </S.NoResultContainer>
        ))}
    </>
  );
};

export default SearchBar;
