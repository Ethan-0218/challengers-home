import { useCalendarStore } from '@store/calendar.store';
import { isToday, startOfMonth } from 'date-fns';
import { FC } from 'react';
import * as S from './DayItem.style';
import { useSchedulesOfDate } from '../../Calendar.hooks';
import ScheduleLabel from '../ScheduleLabel/ScheduleLabel';
import PopupManager from '../../../PopupManager/PopupManager';
import { Supabase } from '@lib/Supabase';
import ScheduleForm from '../ScheduleForm/ScheduleForm';

type Props = {
  date: Date;
};
export const DayItem: FC<Props> = ({ date }) => {
  const currentMonth = useCalendarStore((s) => s.currentMonth);
  const { schedules } = useSchedulesOfDate(date);

  const handleClickDateText = () => {
    PopupManager.show({
      Component: <ScheduleForm mode="add" date={date} />,
      width: ScheduleForm.WIDTH,
      height: ScheduleForm.HEIGHT,
    });
  };

  return (
    <S.Container>
      <S.TextContainer
        color={getDateBgColor(date)}
        onClick={handleClickDateText}
      >
        <S.DateText
          color={getDateColor(date, currentMonth)}
          weight={isToday(date) ? 700 : 500}
        >
          {date.getDate()}
        </S.DateText>
      </S.TextContainer>
      {schedules.map((s) => (
        <ScheduleLabel key={s.id} schedule={s} />
      ))}
    </S.Container>
  );
};

const getDateColor = (date: Date, currentMonth: Date): string => {
  if (isToday(date)) return 'white';

  const isInMonth =
    startOfMonth(date).getMonth() === startOfMonth(currentMonth).getMonth();

  if (!isInMonth) {
    return '#ddd';
  }

  // 토요일
  if (date.getDay() === 6) {
    return '#6DB9FF';
  }

  // 일요일
  if (date.getDay() === 0) {
    return '#FF7979';
  }

  return '#878787';
};

const getDateBgColor = (date: Date): string => {
  if (isToday(date)) return '#FF9900';
  return 'transparent';
};
