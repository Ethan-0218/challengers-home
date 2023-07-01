import { useBookmarkStore } from '@store/bookmark.store';
import BookmarkFolder from '../BookmarkFolder/BookmarkFolder';
import * as S from './BookmarkList.styles';

const BookmarkList = () => {
  const bookmarks = useBookmarkStore((s) => s.bookmarks);

  return (
    <S.Container>
      {bookmarks.map((folder) => (
        <BookmarkFolder key={folder.id} folder={folder} />
      ))}
    </S.Container>
  );
};

export default BookmarkList;
