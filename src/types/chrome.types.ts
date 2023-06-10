export type DOMMessage = {
  type: 'GET_DOM';
};

export type DOMMessageResponse = {
  title: string;
  headlines: string[];
};

export type ToggleMessage = {
  type: 'TOGGLE';
};

export type ToggleMessageResponse = {
  isOpened: boolean;
};
