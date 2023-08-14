import { Schedule } from '@types';
import { FC } from 'react';
import Font from '../../../Font/Font';
import PopupManager from '../../../PopupManager/PopupManager';
import ScheduleForm from '../ScheduleForm/ScheduleForm';
import * as S from './ScheduleLabel.styles';
import { getColors } from './ScheduleLabel.utils';

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
    <S.Container bg={bgColor} onClick={handleClick}>
      <Font size={13} weight={600} color={fontColor}>
        {schedule.title}
      </Font>
    </S.Container>
  );
};

export default ScheduleLabel;
