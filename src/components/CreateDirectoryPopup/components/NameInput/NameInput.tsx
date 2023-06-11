import React, { FC } from 'react';
import * as S from './NameInput.styles';

type Props = {
  name?: string;
  onChangeText: (text: string) => void;
};

const NameInput: FC<Props> = ({ name, onChangeText }) => {
  return (
    <S.Container>
      <S.TextInput
        placeholder="이름을 입력해주세요"
        value={name || ''}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </S.Container>
  );
};

export default NameInput;
