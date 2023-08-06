import { Schedule } from '@types';
import { FC } from 'react';
import Font from '../../../Font/Font';
import * as S from './ScheduleLabel.styles';
import { getColors } from './ScheduleLabel.utils';

type Props = {
  schedule: Schedule.Info;
};
const ScheduleLabel: FC<Props> = ({ schedule }) => {
  const { bgColor, fontColor } = getColors(schedule);

  return (
    <S.Container bg={bgColor}>
      <Font size={13} weight={600} color={fontColor}>
        {schedule.title}
      </Font>
    </S.Container>
  );
};

export default ScheduleLabel;
