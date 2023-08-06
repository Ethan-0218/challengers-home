import { DAY_LABEL_LIST } from '@constants/date.constants';
import * as S from './WeekLabel.styles';

export const WeekLabel = () => {
  return (
    <S.Container>
      {DAY_LABEL_LIST.map((label, index) => (
        <S.LabelItem key={label} color={getLabelColor(index)}>
          {label}
        </S.LabelItem>
      ))}
    </S.Container>
  );
};

const getLabelColor = (index: number) => {
  switch (index) {
    case 0:
      return 'red';
    case 6:
      return 'blue';
    default:
      return '#878787';
  }
};
