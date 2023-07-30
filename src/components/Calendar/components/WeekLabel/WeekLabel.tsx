import React from 'react';
import * as S from './WeekLabel.styles';

export const WeekLabel = () => {
  return (
    <S.Container>
      {LABEL_LIST.map((label) => (
        <S.LabelItem>{label}</S.LabelItem>
      ))}
    </S.Container>
  );
};

const LABEL_LIST = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
