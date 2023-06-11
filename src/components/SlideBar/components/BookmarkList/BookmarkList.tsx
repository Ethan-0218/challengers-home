import { useBookmarkStore } from '@store/bookmark.store';
import BookmarkDirectory from '../BookmarkDirectory/BookmarkDirectory';

const BookmarkList = () => {
  const directories = useBookmarkStore((s) => s.directories);
  return (
    <>
      {directories.map((d) => (
        <BookmarkDirectory item={d} key={d.id} />
      ))}
    </>
  );
};

export default BookmarkList;
