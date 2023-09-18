export type Type = 'BREAKFASE' | 'LUNCH' | 'DINNER';

export type Info = {
  type: Type;
  main: string[];
  sub: string[];
  serveAt: Date;
};
