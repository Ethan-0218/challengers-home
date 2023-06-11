import { Bookmark } from '@types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type BookmarkState = {
  directories: Bookmark.Directory[];
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
  description: '',
  emoji: '&#128525;',
  isShared: false,
  bookmarks: [TEST_BOOKMARK],
};

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      directories: [BASIC_DIRECTORY],
    }),
    {
      name: 'bookmark-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
