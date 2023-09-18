import { useCalendarStore } from '@store/calendar.store';
import { getWeeksInMonth } from 'date-fns';
import { WeekItem } from '../WeekItem/WeekItem';
import { WeekLabel } from '../WeekLabel/WeekLabel';
import * as S from './CalendarBody.styles';

export const CalendarBody = () => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);

  return (
    <S.Container>
      <WeekLabel />
      {Array(getWeeksInMonth(currentMonth))
        .fill(null)
        .map((_, i) => (
          <WeekItem key={i} nth={i} />
        ))}
    </S.Container>
  );
};
