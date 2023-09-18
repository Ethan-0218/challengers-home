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
  const [hover, setHover] = useState(false);

  const handleSelect = (emoji: EmojiClickData) => {
    onSelect(emoji.emoji);
  };

  return (
    <S.Container onClick={() => setIsOpen((v) => !v)}>
      {emoji ? (
        <S.EmojiText>{emoji}</S.EmojiText>
      ) : (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Icon
            name={hover ? 'icon_smily' : 'icon_smile_face'}
            size={24}
            color={hover ? '#FFB84F' : '#878787'}
          />
        </div>
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
