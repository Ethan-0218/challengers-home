import React from 'react';
import * as S from './Home.styles';
import SearchBar from './components/SearchBar/SearchBar';
import { Calendar } from '../Calendar/Calendar';

const Home = () => {
  return (
    <S.Container>
      <SearchBar />
      <Calendar />
    </S.Container>
  );
};

export default Home;
