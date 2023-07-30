import * as S from './Calendar.styles';
import { CalendarBody } from './components/CalendarBody/CalendarBody';
import { CalendarNav } from './components/CalendarNav/CalendarNav';

export const Calendar = () => {
  return (
    <S.Container>
      <CalendarNav />
      <CalendarBody />
    </S.Container>
  );
};
