import { useBookmarkStore } from '@store/bookmark.store';
import { Bookmark } from '@types';
import { FC } from 'react';
import CreateBookmarkPopup from '../../CreateBookmarkPopup';
import * as S from './SaveButton.styles';

type Props = {
  data: Pick<Bookmark.Item, 'name' | 'url' | 'description'>;
  directoryId?: number;
};

const SaveButton: FC<Props> = ({ data, directoryId }) => {
  const createBookmark = useBookmarkStore((s) => s.createBookmark);

  const handleClick = async () => {
    if (!directoryId) return alert('폴더를 선택해주세요.');
    if (!data.url) return alert('링크를 입력해주세요.');
    if (!data.name) return alert('이름을 입력해주세요.');
    createBookmark(data, directoryId);
    CreateBookmarkPopup.close();
  };

  return <S.Container onClick={handleClick}>저장</S.Container>;
};

export default SaveButton;
