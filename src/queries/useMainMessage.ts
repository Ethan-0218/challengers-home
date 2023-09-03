import { useMutation, useQuery } from 'react-query';
import getQueryKey from './getQueryKey';
import { Supabase } from '@lib/Supabase';
import { millisecondsInMinute } from 'date-fns';

export const useMainMessage = () => {
  return useQuery(getQueryKey('MAIN_MESSAGE'), Supabase.getMainMessage, {
    staleTime: millisecondsInMinute * 10,
    refetchOnMount: false,
  });
};

export const useMainMessageMutation = () => {
  const { refetch } = useMainMessage();

  const addMainMessage = async (text: string) => {
    if (await Supabase.addMainMessage({ text })) {
      refetch();
      return;
    }
    alert('오늘의 한마디를 남기는데 실패했어요 😢');
  };

  return { addMainMessage };
};
