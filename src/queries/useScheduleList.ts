import { useQuery } from 'react-query';
import getQueryKey from './getQueryKey';
import { Supabase } from '@lib/Supabase';

type Params = {
  startAt: Date;
  endAt: Date;
};
export const useScheduleList = (p: Params) => {
  return useQuery(
    getQueryKey('GET_SCHEDULE_LIST', {
      startAt: p.startAt.toISOString(),
      endAt: p.endAt.toISOString(),
    }),
    () => Supabase.getScheduleList(p.startAt, p.endAt),
    { select: (res) => res.schedules },
  );
};
