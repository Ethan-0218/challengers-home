import { create } from 'zustand';

type TestState = {
  count: number;
  increase: () => void;
  clear: () => void;
};

export const useTestStore = create<TestState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set({ count: 0 }),
}));
