import React, { FC, useState } from 'react';
import * as S from './EmojiInput.styles';
import { Icon } from '@components';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

type Props = {
  emoji?: string;
  onSelect: (emoji: string) => void;
};

const EmojiInput: FC<Props> = ({ emoji, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (emoji: EmojiClickData) => {
    onSelect(emoji.emoji);
  };

  return (
    <S.Container onClick={() => setIsOpen((v) => !v)}>
      {emoji ? (
        <S.EmojiText>{emoji}</S.EmojiText>
      ) : (
        <Icon name="icon_smile_face" size={24} color="#878787" />
      )}

      {isOpen && (
        <S.PickerContainer>
          <EmojiPicker
            width={S.PICKER_WIDTH}
            height={S.PICKER_HEIGHT}
            onEmojiClick={handleSelect}
          />
        </S.PickerContainer>
      )}
    </S.Container>
  );
};

export default EmojiInput;
