import React, { FC } from 'react';
import * as S from './CancelButton.styles';

type Props = {
  onClick: () => void;
};

const CancelButton: FC<Props> = ({ onClick }) => {
  return <S.Container onClick={onClick}>취소</S.Container>;
};

export default CancelButton;
