import { Bookmark } from '@types';
import React, { createElement, useState } from 'react';
import ReactDOM from 'react-dom';
import * as S from './CreateBookmarkPopup.styles';
import CancelButton from './components/CancelButton/CancelButton';
import FolderSelector from './components/FolderSelector/FolderSelector';
import SaveButton from './components/SaveButton/SaveButton';
import TextInput from './components/TextInput/TextInput';
import Title from './components/Title/Title';

type Props = {
  folders: Bookmark.Folder[];
};

const CreateBookmarkPopup = (props: Props) => {
  const [data, setData] = useState<
    Pick<Bookmark.Item, 'title' | 'url' | 'description'>
  >({
    title: window.document.title,
    url: window.location.href,
    description: '',
  });
  const [folderId, setFolderId] = useState<string>();
  const [visible, setVisible] = useState(true);

  const handleChangeValue = (key: string, value: string) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleClickBackground = async (e: React.UIEvent) => {
    e.stopPropagation();
    CreateBookmarkPopup.close();
  };

  if (!visible) return <></>;
  return (
    <S.Container onClick={handleClickBackground}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <S.Column
          style={{ flex: 1, width: '100%', alignItems: 'flex-start', gap: 14 }}
        >
          <Title />
          <TextInput
            label="이름"
            key="title"
            value={data.title}
            placeholder="ex 팀 데일리미팅"
            onChangeText={(v) => handleChangeValue('title', v)}
          />

          <TextInput
            label="링크"
            key="url"
            value={data.url}
            placeholder="url"
            onChangeText={(v) => handleChangeValue('url', v)}
          />

          <TextInput
            label="설명"
            key="description"
            value={data.description}
            placeholder="ex 팀 데일리 공유사항 기록하는 노션"
            onChangeText={(v) => handleChangeValue('description', v)}
          />

          <FolderSelector
            folders={props.folders}
            folderId={folderId}
            setFolderId={setFolderId}
            setPopupVisible={setVisible}
          />
        </S.Column>

        <S.Row style={{ gap: 16 }}>
          <CancelButton onClick={CreateBookmarkPopup.close} />
          <SaveButton data={data} folderId={folderId} />
        </S.Row>
      </S.PopupContainer>
    </S.Container>
  );
};

export default CreateBookmarkPopup;

const ID = 'create-bookmark-popup';

CreateBookmarkPopup.show = (props: Props) => {
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
  ReactDOM.render(createElement(CreateBookmarkPopup, props), div);
  document.body.appendChild(div);
};

CreateBookmarkPopup.close = () => {
  const target = document.getElementById(ID);
  target?.remove();
};
