import { Calendar } from '../Calendar/Calendar';
import SlideBar from '../SlideBar/SlideBar';
import WeeklyLunchMenu from '../WeeklyLunchMenu/WeeklyLunchMenu';
import * as S from './Home.styles';
import MainMessage from './components/MainMessage/MainMessage';
import SearchBar from './components/SearchBar/SearchBar';

const Home = () => {
  return (
    <S.Container>
      <MainMessage />
      <SearchBar />
      <S.Row>
        <Calendar />
        <WeeklyLunchMenu />
      </S.Row>
      {/* <SlideBar /> */}
    </S.Container>
  );
};

export default Home;
