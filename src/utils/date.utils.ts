import { DAY_LABEL_LIST } from '@constants/date.constants';
import {
  addDays,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

export const getDaysInThisWeek = (date: Date) => {
  const monday = addDays(startOfWeek(addDays(date, -1)), 1);
  const friday = addDays(monday, 4);

  return eachDayOfInterval({ start: monday, end: friday });
};

export const getDayLabel = (date: Date) => {
  return DAY_LABEL_LIST[getDay(date)];
};

export const getWeekDays = (currentMonth: Date, nth: number) => {
  const firstDay = startOfWeek(addWeeks(startOfMonth(currentMonth), nth));
  const weekDays = Array(7)
    .fill(firstDay)
    .map((d, i) => addDays(d, i));
  return weekDays;
};

export const getFirstAndLastDayInCalanderMonth = (currentMonth: Date) => {
  const firstDay = startOfWeek(startOfMonth(currentMonth));
  const lastDay = lastDayOfWeek(endOfMonth(currentMonth));
  return { firstDay, lastDay };
};
