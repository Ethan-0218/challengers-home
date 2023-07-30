import { useCalendarStore } from '@store/calendar.store';
import { startOfMonth } from 'date-fns';
import { FC } from 'react';
import * as S from './DayItem.style';

type Props = {
  date: Date;
};
export const DayItem: FC<Props> = ({ date }) => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);

  return (
    <S.Container>
      <S.DateText color={getDateColor(date, currentMonth)}>
        {date.getDate()}
      </S.DateText>
    </S.Container>
  );
};

const getDateColor = (date: Date, currentMonth: Date) => {
  const isInMonth =
    startOfMonth(date).getMonth() === startOfMonth(currentMonth).getMonth();

  if (!isInMonth) {
    return '#ddd';
  }

  if (date.getDay() === 6) {
    return 'blue';
  }

  if (date.getDay() === 0) {
    return 'red';
  }

  return '#878787';
};
