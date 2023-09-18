import { Mode } from '@types';
import { create } from 'zustand';

type ModeState = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export const useModeStore = create<ModeState>((set, get) => ({
  mode: 'list',
  setMode: (mode) =>
    set(() => {
      return { mode };
    }),
}));
