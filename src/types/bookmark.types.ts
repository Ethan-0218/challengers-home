// deprecated
export type Directory = {
  id: number;
  name: string;
  emoji: string;
  isShared: boolean;
  bookmarks: Item[];
};

export type Folder = {
  type: 'folder';
  id: string;
  title: string;
  emoji: string;
  children?: (Folder | Item)[];
};

export type Item = {
  type: 'item';
  id: string;
  title: string;
  url: string;
  description: string;
};
