import { useCalendarStore } from '@store/calendar.store';
import { getWeekDays } from '@utils/date.utils';
import { FC } from 'react';
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
