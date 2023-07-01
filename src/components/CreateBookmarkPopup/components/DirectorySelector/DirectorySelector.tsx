import React, { FC, useState } from 'react';
import * as S from './DirectorySelector.styles';
import { Bookmark } from '@types';
import { Font, Icon } from '@components';

type Props = {
  directoryId?: number;
  setDirectoryId: (id: number) => void;
};

const DirectorySelector: FC<Props> = ({ directoryId, setDirectoryId }) => {
  const directories: Bookmark.Directory[] = [];
  const selected = directories.find((d) => d.id === directoryId);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((v) => !v);

  return (
    <S.Container>
      <S.Label>폴더</S.Label>
      <S.InputContainer onClick={handleClick}>
        <Font size={16} color={selected ? '#111111' : '#878787'}>
          {selected
            ? `${selected.emoji} ${selected.name}`
            : '폴더를 선택해주세요'}
        </Font>

        <Icon name="icon_down" size={24} />

        {isOpen && (
          <DirectoryList directories={directories} onSelect={setDirectoryId} />
        )}
      </S.InputContainer>
    </S.Container>
  );
};

export default DirectorySelector;

type DirectoryListProps = {
  directories: Bookmark.Directory[];
  onSelect: (directoryId: number) => void;
};
const DirectoryList: FC<DirectoryListProps> = ({ directories, onSelect }) => {
  return (
    <S.ListContainer>
      {directories.map((d) => (
        <S.ListItem key={d.id} onClick={() => onSelect(d.id)}>
          {d.emoji} {d.name}
        </S.ListItem>
      ))}
      <S.ListItem>+ 새 폴더 만들기</S.ListItem>
    </S.ListContainer>
  );
};
