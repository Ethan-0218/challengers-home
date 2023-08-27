import { Font, Icon } from '@components';
import { Bookmark } from '@types';
import { FC, useState } from 'react';
import * as S from './FolderSelector.styles';

type Props = {
  folders: Bookmark.Folder[];
  folderId?: string;
  setFolderId: (id: string) => void;
};

const FolderSelector: FC<Props> = ({ folders, folderId, setFolderId }) => {
  const selected = folders.find((f) => f.id === folderId);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((v) => !v);

  return (
    <S.Container>
      <S.Label>폴더</S.Label>
      <S.InputContainer onClick={handleClick}>
        <Font size={16} color={selected ? '#111111' : '#878787'}>
          {selected
            ? `${selected.emoji} ${selected.title}`
            : '폴더를 선택해주세요'}
        </Font>

        <Icon name="icon_down" size={24} />

        {isOpen && <FolderList folders={folders} onSelect={setFolderId} />}
      </S.InputContainer>
    </S.Container>
  );
};

export default FolderSelector;

type FolderListProps = {
  folders: Bookmark.Folder[];
  onSelect: (folderId: string) => void;
};
const FolderList: FC<FolderListProps> = ({ folders, onSelect }) => {
  return (
    <S.ListContainer>
      {folders.map((f) => (
        <S.ListItem key={f.id} onClick={() => onSelect(f.id)}>
          {f.emoji} {f.title}
        </S.ListItem>
      ))}
      <S.ListItem>+ 새 폴더 만들기</S.ListItem>
    </S.ListContainer>
  );
};
