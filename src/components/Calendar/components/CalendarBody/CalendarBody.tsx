import { useCalendarStore } from '@store/calendar.store';
import { getWeeksInMonth } from 'date-fns';
import { WeekItem } from '../WeekItem/WeekItem';
import { WeekLabel } from '../WeekLabel/WeekLabel';

export const CalendarBody = () => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);

  return (
    <div>
      <WeekLabel />
      {Array(getWeeksInMonth(currentMonth))
        .fill(null)
        .map((_, i) => (
          <WeekItem key={i} nth={i} />
        ))}
    </div>
  );
};
