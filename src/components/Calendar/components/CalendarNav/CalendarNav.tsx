import { useCalendarStore } from '@store/calendar.store';
import { printMonth } from '../../Calendar.utils';
import * as S from './CalendarNav.styles';
import Icon from '../../../Icon/Icon';

export const CalendarNav = () => {
  const { currentMonth, goPrevMonth, goNextMonth } = useCalendarStore();
  return (
    <S.Container>
      <S.NavButton onClick={goPrevMonth}>
        <Icon name="icon_left" size={14} />
      </S.NavButton>
      <S.DateText>{printMonth(currentMonth)}</S.DateText>
      <S.NavButton onClick={goNextMonth}>
        <Icon name="icon_right" size={14} />
      </S.NavButton>
    </S.Container>
  );
};
