import { addMonths, startOfMonth } from 'date-fns';
import { create } from 'zustand';

type CalendarState = {
  currentMonth: Date;
  goPrevMonth: () => void;
  goNextMonth: () => void;
};

export const useCalendarStore = create<CalendarState>((set, get) => ({
  currentMonth: startOfMonth(new Date()),
  goPrevMonth: () =>
    set(() => ({ currentMonth: addMonths(get().currentMonth, -1) })),
  goNextMonth: () =>
    set(() => ({ currentMonth: addMonths(get().currentMonth, 1) })),
}));
