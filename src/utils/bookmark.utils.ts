import { DEFAULT_FOLDER_EMOJI } from '@constants/bookmark.constants';
import { Bookmark } from '@types';

export const convertNode2Item = (
  node: chrome.bookmarks.BookmarkTreeNode,
): Bookmark.Item => ({
  type: 'Item',
  id: node.id,
  title: node.title,
  url: node.url!,
  description: '',
});

export const convertNode2Folder = (
  node: chrome.bookmarks.BookmarkTreeNode,
): Bookmark.Folder => ({
  type: 'Folder',
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
    (item) => item.type === 'Folder',
  ) as Bookmark.Folder[];
  const etcFolder: Bookmark.Folder = {
    type: 'Folder',
    id: '-1',
    title: '기타',
    emoji: DEFAULT_FOLDER_EMOJI,
    children: list.filter((item) => item.type === 'Item'),
  };
  return [...folders, etcFolder];
};
