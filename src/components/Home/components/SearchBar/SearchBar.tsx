import React, { useEffect, useRef } from 'react';
import * as S from './SearchBar.styles';
import { Icon } from '@components';

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      const q = ref.current?.value;
      if (!q) return;
      window.location.href = q.startsWith('http')
        ? q
        : `https://www.google.com/search?q=${q}`;
    };

    ref.current?.addEventListener('keypress', keyPressHandler);

    return () => {
      ref.current?.removeEventListener('keypress', keyPressHandler);
    };
  }, []);

  return (
    <S.Container>
      <Icon name="icon_search" size={24} color="#4E4E4E" />
      <S.Input ref={ref} placeholder="검색 또는 URL 입력" autoFocus />
    </S.Container>
  );
};

export default SearchBar;
