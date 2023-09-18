import { Bookmark } from '@types';
import { Database } from './supabase.types';

type SupabaseBookmarkRow = Database['public']['Tables']['bookmark']['Row'];
export const structBookmarkTree = (
  data: SupabaseBookmarkRow[],
): Bookmark.Folder[] => {
  const rootFolderIds = data
    .filter((d) => d.type === 'folder' && !d.parent_id)
    .map((d) => d.id);

  const rootFolders = data
    .map(structBookmarkRow)
    .filter(isBookmarkFolder)
    .filter((r) => rootFolderIds.includes(Number(r.id)));

  const struct = (f: Bookmark.Folder, data: SupabaseBookmarkRow[]) => {
    const children = data
      .filter((d) => d.parent_id === Number(f.id))
      .map(structBookmarkRow);
    if (children.length) f.children = children;
    const folders = children.filter(isBookmarkFolder);
    if (folders.length === 0) return;
    for (const f of folders) {
      struct(f, data);
    }
  };

  for (const f of rootFolders) struct(f, data);

  return rootFolders;
};

export const structBookmarkRow = (
  row: SupabaseBookmarkRow,
): Bookmark.Folder | Bookmark.Item => {
  switch (row.type) {
    case 'item':
      const item: Bookmark.Item = {
        id: String(row.id),
        title: row.title,
        type: 'item',
        url: row.value,
        description: row.description || '',
      };
      return item;
    case 'folder':
    default:
      const folder: Bookmark.Folder = {
        id: String(row.id),
        title: row.title,
        type: 'folder',
        emoji: row.value,
      };
      return folder;
  }
};

export const isBookmarkFolder = (
  data: Bookmark.Folder | Bookmark.Item,
): data is Bookmark.Folder => data.type === 'folder';

export const isBookmarkItem = (
  data: Bookmark.Folder | Bookmark.Item,
): data is Bookmark.Folder => data.type === 'item';
