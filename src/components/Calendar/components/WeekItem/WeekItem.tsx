import { useCalendarStore } from '@store/calendar.store';
import {
  addDays,
  addWeeks,
  format,
  getWeekOfMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import React, { FC } from 'react';
import { DayItem } from '../DayItem/DayItem';
import * as S from './WeekItem.styles';

type Props = {
  nth: number;
};
export const WeekItem: FC<Props> = ({ nth }) => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);

  return (
    <S.Container>
      {getWeekDays(currentMonth, nth).map((d) => (
        <DayItem key={d.toString()} date={d} />
      ))}
    </S.Container>
  );
};

const getWeekDays = (currentMonth: Date, nth: number) => {
  const firstDay = startOfWeek(addWeeks(startOfMonth(currentMonth), nth));
  const weekDays = Array(7)
    .fill(firstDay)
    .map((d, i) => addDays(d, i));
  return weekDays;
};
