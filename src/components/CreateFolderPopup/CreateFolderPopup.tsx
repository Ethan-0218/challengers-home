import React, { createElement, useState } from 'react';
import ReactDOM from 'react-dom';
import * as S from './CreateFolderPopup.styles';
import Title from './components/Title/Title';
import EmojiInput from './components/EmojiInput/EmojiInput';
import { Bookmark } from '@types';
import NameInput from './components/NameInput/NameInput';
import CancelButton from './components/CancelButton/CancelButton';
import SaveButton from './components/SaveButton/SaveButton';

type Props = {
  onClose?: () => void;
};
const CreateFolderPopup = ({ onClose }: Props) => {
  const [data, setData] = useState<Pick<Bookmark.Folder, 'title' | 'emoji'>>({
    title: '',
    emoji: '',
  });

  const closePopup = () => {
    onClose && onClose();
    CreateFolderPopup.close();
  };

  const handleSelectEmoji = (emoji: string) =>
    setData((d) => ({ ...d, emoji }));

  const handleChangeName = (title: string) => setData((d) => ({ ...d, title }));

  const handleClickBackground = async (e: React.UIEvent) => {
    e.stopPropagation();
    closePopup();
  };

  return (
    <S.Container onClick={handleClickBackground}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <S.Column style={{ flex: 1, width: '100%', alignItems: 'flex-start' }}>
          <Title />
          <S.Row style={{ width: '100%', gap: 4, marginTop: 20 }}>
            <EmojiInput emoji={data.emoji} onSelect={handleSelectEmoji} />
            <NameInput name={data.title} onChangeText={handleChangeName} />
          </S.Row>
        </S.Column>

        <S.Row style={{ gap: 16 }}>
          <CancelButton onClick={closePopup} />
          <SaveButton data={data} closePopup={closePopup} />
        </S.Row>
      </S.PopupContainer>
    </S.Container>
  );
};

const ID = 'create-directory-popup';

CreateFolderPopup.show = (props: Props) => {
  const isRendered = !!document.getElementById(ID);
  if (isRendered) return;
  const div = document.createElement('div');
  div.id = ID;
  div.style.position = 'fixed';
  div.style.top = '0px';
  div.style.width = `${window.innerWidth}px`;
  div.style.height = `${window.innerHeight}px`;
  div.style.background = 'transparent';
  div.style.zIndex = '999';
  ReactDOM.render(createElement(CreateFolderPopup, props), div);
  document.body.appendChild(div);
};

CreateFolderPopup.close = () => {
  const target = document.getElementById(ID);
  target?.remove();
};

export default CreateFolderPopup;
