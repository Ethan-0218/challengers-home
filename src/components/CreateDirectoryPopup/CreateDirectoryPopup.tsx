import React, { createElement, useState } from 'react';
import ReactDOM from 'react-dom';
import * as S from './CreateDirectoryPopup.styles';
import Title from './components/Title/Title';
import EmojiInput from './components/EmojiInput/EmojiInput';
import { Bookmark } from '@types';
import NameInput from './components/NameInput/NameInput';
import CancelButton from './components/CancelButton/CancelButton';
import SaveButton from './components/SaveButton/SaveButton';

const CreateDirectoryPopup = () => {
  const [data, setData] = useState<Pick<Bookmark.Directory, 'name' | 'emoji'>>({
    name: '',
    emoji: '',
  });

  const handleSelectEmoji = (emoji: string) =>
    setData((d) => ({ ...d, emoji }));

  const handleChangeName = (name: string) => setData((d) => ({ ...d, name }));

  const handleClickBackground = async (e: React.UIEvent) => {
    e.stopPropagation();
    CreateDirectoryPopup.close();
  };

  return (
    <S.Container onClick={handleClickBackground}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <S.Column style={{ flex: 1, width: '100%', alignItems: 'flex-start' }}>
          <Title />
          <S.Row style={{ width: '100%', gap: 4, marginTop: 20 }}>
            <EmojiInput emoji={data.emoji} onSelect={handleSelectEmoji} />
            <NameInput name={data.name} onChangeText={handleChangeName} />
          </S.Row>
        </S.Column>

        <S.Row style={{ gap: 16 }}>
          <CancelButton onClick={CreateDirectoryPopup.close} />
          <SaveButton data={data} />
        </S.Row>
      </S.PopupContainer>
    </S.Container>
  );
};

const ID = 'create-directory-popup';

CreateDirectoryPopup.show = () => {
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
  ReactDOM.render(createElement(CreateDirectoryPopup, null), div);
  document.body.appendChild(div);
};

CreateDirectoryPopup.close = () => {
  const target = document.getElementById(ID);
  target?.remove();
};

export default CreateDirectoryPopup;
