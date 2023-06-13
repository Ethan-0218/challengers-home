import { useBookmarkStore } from '@store/bookmark.store';

export const useSearchBookmarks = (q: string) => {
  const directories = useBookmarkStore((s) => s.directories);
  const bookmarks = directories
    .flatMap((d) => d.bookmarks)
    .filter((b) => b.name.includes(q));

  return { bookmarks };
};
