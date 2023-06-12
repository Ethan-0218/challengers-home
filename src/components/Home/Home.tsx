import React from 'react';
import * as S from './Home.styles';
import SearchBar from './components/SearchBar/SearchBar';

const Home = () => {
  return (
    <S.Container>
      <SearchBar />
    </S.Container>
  );
};

export default Home;
