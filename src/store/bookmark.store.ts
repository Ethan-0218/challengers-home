import { Bookmark } from '@types';
import { create } from 'zustand';

type BookmarkState = {
  bookmarks: Bookmark.Folder[];
  setBookmarks: (b: Bookmark.Folder[]) => void;
};

export const useBookmarkStore = create<BookmarkState>((set, get) => ({
  bookmarks: [],
  setBookmarks: (bookmarks) => set(() => ({ bookmarks })),
}));
