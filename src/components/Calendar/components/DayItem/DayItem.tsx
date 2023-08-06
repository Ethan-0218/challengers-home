import { useCalendarStore } from '@store/calendar.store';
import { startOfMonth } from 'date-fns';
import { FC } from 'react';
import * as S from './DayItem.style';
import { useSchedulesOfDate } from '../../Calendar.hooks';
import ScheduleLabel from '../ScheduleLabel/ScheduleLabel';

type Props = {
  date: Date;
};
export const DayItem: FC<Props> = ({ date }) => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);
  const { schedules } = useSchedulesOfDate(date);

  return (
    <S.Container>
      <S.DateText color={getDateColor(date, currentMonth)}>
        {date.getDate()}
      </S.DateText>
      {schedules.map((s) => (
        <ScheduleLabel key={s.id} schedule={s} />
      ))}
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
