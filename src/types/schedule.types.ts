export type Type = 'EVENT' | 'TEAM' | 'PERSONAL';

export type Info = {
  id: number;
  title: string;
  description: string | null;
  startAt: Date;
  endAt: Date;
  type: Type;
};
