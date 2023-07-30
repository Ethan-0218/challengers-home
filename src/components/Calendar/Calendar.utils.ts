import { format } from 'date-fns';

export const printMonth = (date: Date) => {
  return format(date, 'yyyy. LLL').toUpperCase();
};
