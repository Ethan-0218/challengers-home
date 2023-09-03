import { Schedule } from '@types';
import { FC, useRef, useState } from 'react';
import Font from '../../../Font/Font';
import PopupManager from '../../../PopupManager/PopupManager';
import ScheduleForm from '../ScheduleForm/ScheduleForm';
import * as S from './ScheduleLabel.styles';
import { getColors } from './ScheduleLabel.utils';
import {
  endOfDay,
  format,
  isSameHour,
  isSameMinute,
  startOfDay,
} from 'date-fns';

type Props = {
  schedule: Schedule.Info;
};
const ScheduleLabel: FC<Props> = ({ schedule }) => {
  const { bgColor, fontColor } = getColors(schedule);

  const handleClick = async () => {
    PopupManager.show({
      Component: (
        <ScheduleForm schedule={schedule} mode="edit" date={schedule.startAt} />
      ),
      width: ScheduleForm.WIDTH,
      height: ScheduleForm.HEIGHT,
    });
  };

  return (
    <S.Container
      bg={bgColor}
      onClick={handleClick}
      title={formatScheduleTime(schedule)}
    >
      <Font size={13} weight={600} color={fontColor} numOfLines={1}>
        {schedule.title}
      </Font>
    </S.Container>
  );
};

export default ScheduleLabel;

const formatScheduleTime = (schedule: Schedule.Info) => {
  const { startAt, endAt } = schedule;

  const isSameHourMinutes = (a: Date, b: Date) =>
    isSameHour(a, b) && isSameMinute(a, b);

  if (
    isSameHourMinutes(startOfDay(startAt), startAt) &&
    isSameHourMinutes(endOfDay(endAt), endAt)
  )
    return '하루종일';

  return `${format(startAt, 'yyyy.MM.dd')} ${format(startAt, 'HH:mm')}~${format(
    endAt,
    'HH:mm',
  )}`;
};
