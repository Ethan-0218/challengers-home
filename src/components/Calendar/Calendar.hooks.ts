import { useScheduleList } from '@queries/useScheduleList';
import { useCalendarStore } from '@store/calendar.store';
import { getFirstAndLastDayInCalanderMonth } from '@utils/date.utils';
import { isSameDay } from 'date-fns';

export const useSchedulesOfDate = (date: Date) => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);
  const { firstDay, lastDay } = getFirstAndLastDayInCalanderMonth(currentMonth);
  const { data = [] } = useScheduleList({
    startAt: firstDay,
    endAt: lastDay,
  });

  const schedules = data.filter((d) => isSameDay(d.startAt, date));

  return { schedules };
};
