import { Supabase } from '@lib/Supabase';
import { useBookmarkStore } from '@store/bookmark.store';
import { Bookmark } from '@types';
import { FC } from 'react';
import * as S from './SaveButton.styles';

type Props = {
  data: Pick<Bookmark.Folder, 'title' | 'emoji'>;
  closePopup: () => void;
};

const SaveButton: FC<Props> = ({ data, closePopup }) => {
  const { setBookmarks } = useBookmarkStore();

  const handleClick = async () => {
    if (!data.title) return alert('이름을 입력해주세요');
    if (!data.emoji) return alert('이모지를 정해주세요');
    if (await Supabase.addBookmarkFolder(data)) {
      setBookmarks(await Supabase.getBookmarkList());
    }
    closePopup();
  };

  return <S.Container onClick={handleClick}>저장</S.Container>;
};

export default SaveButton;
