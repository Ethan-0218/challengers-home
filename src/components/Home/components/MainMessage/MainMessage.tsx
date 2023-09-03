import {
  useMainMessage,
  useMainMessageMutation,
} from '@queries/useMainMessage';
import Font from '../../../Font/Font';
import * as S from './MainMessage.styles';
import Icon from '../../../Icon/Icon';
import Clickable from '../../../Clickable/Clickable';
import { useState } from 'react';
import TextInput from '../../../TextInput/TextInput';

const MainMessage = () => {
  const { data: message } = useMainMessage();
  const { addMainMessage } = useMainMessageMutation();
  const [text, setText] = useState('');

  const [isEditMode, setIsEditMode] = useState(false);

  const handleSave = async () => {
    if (text.length < 5) return alert('5글자 이상 작성해주세요🥺');
    await addMainMessage(text);
    setIsEditMode(false);
  };

  if (isEditMode) {
    return (
      <S.EditContainer>
        <TextInput
          label=""
          value={text}
          onChangeText={setText}
          placeholder="간단한 한 마디를 남겨주세요!"
        />
        <S.CancelButton onClick={() => setIsEditMode(false)}>
          <Font size={16} weight={600}>
            취소
          </Font>
        </S.CancelButton>
        <S.SaveButton onClick={handleSave}>
          <Font size={16} color="#fff" weight={600}>
            저장
          </Font>
        </S.SaveButton>
      </S.EditContainer>
    );
  }
  return (
    <S.Container>
      <Font family="Montserrat" size={20} weight={800}>
        {message?.text || '오늘의 한마디 남기기'}
      </Font>
      <Clickable onClick={() => setIsEditMode(true)}>
        <Icon name="icon_pencil" size={24} />
      </Clickable>
    </S.Container>
  );
};

export default MainMessage;
