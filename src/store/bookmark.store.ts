import { Bookmark } from '@types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type BookmarkState = {
  directories: Bookmark.Directory[];
  createDirectory: (dir: Pick<Bookmark.Directory, 'name' | 'emoji'>) => void;
};

const TEST_BOOKMARK: Bookmark.Item = {
  id: 1,
  name: '북마크 Figma',
  url: 'https://www.figma.com/file/XOuHy4bwD1Gl0BlRbNc2Lk/%EB%B6%81%EB%A7%88%ED%81%AC',
  description: '북마크 개발 피그마~~',
};

const BASIC_DIRECTORY: Bookmark.Directory = {
  id: 1,
  name: '기본 폴더',
  emoji: '📁',
  isShared: false,
  bookmarks: [TEST_BOOKMARK],
};

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      directories: [BASIC_DIRECTORY],
      createDirectory: (dir) =>
        set(({ directories }) => {
          const directory: Bookmark.Directory = {
            ...dir,
            emoji: dir.emoji || '📁',
            id: (directories.at(-1)?.id || 0) + 1,
            isShared: false,
            bookmarks: [],
          };
          return { directories: [...directories, directory] };
        }),
    }),
    {
      name: 'bookmark-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
