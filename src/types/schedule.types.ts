export type Type = 'MEETING' | 'VACATION' | 'BIRTHDAY' | 'ETC';

export type Info = {
  id: number;
  title: string;
  description: string | null;
  startAt: Date;
  endAt: Date;
  type: Type;
};
