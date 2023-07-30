import * as S from './WeekLabel.styles';

export const WeekLabel = () => {
  return (
    <S.Container>
      {LABEL_LIST.map((label, index) => (
        <S.LabelItem color={getLabelColor(index)}>{label}</S.LabelItem>
      ))}
    </S.Container>
  );
};

const LABEL_LIST = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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
