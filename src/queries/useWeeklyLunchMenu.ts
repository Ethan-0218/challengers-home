import { useQuery } from 'react-query';
import getQueryKey from './getQueryKey';
import { getDaysInThisWeek } from '@utils/date.utils';
import { Supabase } from '@lib/Supabase';

export const useWeeklyLunchMenu = () => {
  const days = getDaysInThisWeek(new Date());
  return useQuery(
    getQueryKey('WEEKLY_LUNCH_MENU'),
    () => Supabase.getMealList(days[0], days[days.length - 1]),
    {
      select: (res) => res.meals,
    },
  );
};
