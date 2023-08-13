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
    case 0: // 일요일
      return '#878787';
    case 6: // 월요일
      return '#878787';
    default:
      return '#878787';
  }
};
