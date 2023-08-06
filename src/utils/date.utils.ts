import { DAY_LABEL_LIST } from '@constants/date.constants';
import { addDays, eachDayOfInterval, getDay, startOfWeek } from 'date-fns';

export const getDaysInThisWeek = (date: Date) => {
  const monday = addDays(startOfWeek(addDays(date, 1)), 1);
  const friday = addDays(monday, 4);

  return eachDayOfInterval({ start: monday, end: friday });
};

export const getDayLabel = (date: Date) => {
  return DAY_LABEL_LIST[getDay(date)];
};
