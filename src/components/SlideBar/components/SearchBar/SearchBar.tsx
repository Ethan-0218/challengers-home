import React from 'react';
import * as S from './SearchBar.styles';
import Icon from '../../../Icon/Icon';
import { InputChangeHandler } from '../../../../types/util.types';

const SearchBar = () => {
  const handleChange: InputChangeHandler = (e) => {
    const text = e.target.value;
    console.log(text);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <Icon name="icon_search" size={20} />
        <S.Input placeholder="북마크 검색" onChange={handleChange} />
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchBar;
