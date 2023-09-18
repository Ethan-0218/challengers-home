import { DEFAULT_FOLDER_EMOJI } from '@constants/bookmark.constants';
import { Bookmark } from '@types';

export const convertNode2Item = (
  node: chrome.bookmarks.BookmarkTreeNode,
): Bookmark.Item => ({
  type: 'item',
  id: node.id,
  title: node.title,
  url: node.url!,
  description: '',
});

export const convertNode2Folder = (
  node: chrome.bookmarks.BookmarkTreeNode,
): Bookmark.Folder => ({
  type: 'folder',
  id: node.id,
  title: node.title,
  emoji: DEFAULT_FOLDER_EMOJI,
  children: node.children && node.children.map(search),
});

const search = (
  node: chrome.bookmarks.BookmarkTreeNode,
): Bookmark.Folder | Bookmark.Item => {
  if (node.url) {
    return convertNode2Item(node);
  }
  return convertNode2Folder(node);
};

export const parseBookmarksTree = (
  tree: chrome.bookmarks.BookmarkTreeNode[],
): Bookmark.Folder[] => {
  const root = tree[0];
  const list =
    root.children?.flatMap((n) => n.children || []).map(search) || [];
  const folders = list.filter(
    (item) => item.type === 'folder',
  ) as Bookmark.Folder[];
  const etcFolder: Bookmark.Folder = {
    type: 'folder',
    id: '-1',
    title: '기타',
    emoji: DEFAULT_FOLDER_EMOJI,
    children: list.filter((item) => item.type === 'item'),
  };
  return [...folders, etcFolder];
};

export const searchBookmark = (
  folders: Bookmark.Folder[],
  query: string,
): Bookmark.Item[] => {
  const searchFolder = (
    folder: Bookmark.Folder,
    query: string,
  ): Bookmark.Item[] => {
    const result: Bookmark.Item[] = [];
    for (const item of folder.children || []) {
      switch (item.type) {
        case 'folder':
          result.push(...searchFolder(item, query));
          break;
        case 'item':
          if (item.description.includes(query) || item.title.includes(query)) {
            result.push(item);
          }
      }
    }
    return result;
  };

  return folders.flatMap((f) => searchFolder(f, query));
};
