import React, { FC } from 'react';
import * as S from './TextInput.styles';

type Props = {
  label: string;
  key: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

const TextInput: FC<Props> = ({
  label,
  key,
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeText(e.target.value)}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default TextInput;
