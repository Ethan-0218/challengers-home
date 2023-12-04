export type Type = 'BREAKFASE' | 'LUNCH' | 'DINNER';

export type Info = {
  id: number;
  type: Type;
  main: string[];
  sub: string[];
  serveAt: Date;
};
