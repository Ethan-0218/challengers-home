import { Bookmark } from '@types';
import { FC } from 'react';
import CreateBookmarkPopup from '../../CreateBookmarkPopup';
import * as S from './SaveButton.styles';
import { Supabase } from '@lib/Supabase';
import { useBookmarkStore } from '@store/bookmark.store';

type Props = {
  data: Pick<Bookmark.Item, 'title' | 'url' | 'description'>;
  folderId?: string;
};

const SaveButton: FC<Props> = ({ data, folderId }) => {
  const { setBookmarks } = useBookmarkStore();

  const handleClick = async () => {
    if (!folderId) return alert('폴더를 선택해주세요.');
    if (!data.url) return alert('링크를 입력해주세요.');
    if (!data.title) return alert('이름을 입력해주세요.');
    if (await Supabase.addBookmark(data, folderId)) {
      setBookmarks(await Supabase.getBookmarkList());
      CreateBookmarkPopup.close();
    }
  };

  return <S.Container onClick={handleClick}>저장</S.Container>;
};

export default SaveButton;
