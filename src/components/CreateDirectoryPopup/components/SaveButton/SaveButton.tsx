import React, { FC } from 'react';
import * as S from './SaveButton.styles';
import { Bookmark } from '@types';
import { useBookmarkStore } from '@store/bookmark.store';
import CreateDirectoryPopup from '../../CreateDirectoryPopup';

type Props = {
  data: Pick<Bookmark.Directory, 'name' | 'emoji'>;
};

const SaveButton: FC<Props> = ({ data }) => {
  const createDirectory = useBookmarkStore((s) => s.createDirectory);

  const handleClick = async () => {
    if (!data.name) return alert('이름을 입력해주세요');
    createDirectory(data);
    CreateDirectoryPopup.close();
  };

  return <S.Container onClick={handleClick}>저장</S.Container>;
};

export default SaveButton;
