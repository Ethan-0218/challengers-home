export type Directory = {
  id: number;
  name: string;
  description: string;
  emoji: string;
  isShared: boolean;
  bookmarks: Item[];
};

export type Item = {
  id: number;
  url: string;
  name: string;
  description: string;
};
