export type ToggleMessage = {
  type: 'TOGGLE';
};

export type ToggleMessageResponse = {
  isOpened: boolean;
};

export type Message = ToggleMessage;
