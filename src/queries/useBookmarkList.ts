import { useQuery } from 'react-query';
import getQueryKey from './getQueryKey';
import { Supabase } from '@lib/Supabase';
import { millisecondsInHour } from 'date-fns';

export const useBookmarkList = () => {
  return useQuery(getQueryKey('BOOKMARK_LIST'), Supabase.getBookmarkList, {
    staleTime: millisecondsInHour * 24,
    refetchOnMount: false,
  });
};
