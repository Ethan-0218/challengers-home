import { Bookmark } from '@types';

export type ToggleMessage = {
  type: 'TOGGLE';
};

export type InitMessage = {
  type: 'INIT';
  bookmarks: Bookmark.Folder[];
};

export type ChangeMessage = {
  type: 'CHANGE';
};

export type ToggleMessageResponse = {
  isOpened: boolean;
};

export type Message = ToggleMessage | InitMessage | ChangeMessage;
