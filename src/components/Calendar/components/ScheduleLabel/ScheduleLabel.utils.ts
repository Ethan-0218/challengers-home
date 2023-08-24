import { Schedule } from '@types';

export const getColors = (
  s: Schedule.Info,
): { fontColor: string; bgColor: string } => {
  switch (s.type) {
    case 'BIRTHDAY':
      return {
        fontColor: '#FFB542',
        bgColor: '#FFF8ED',
      };
    case 'VACATION':
      return {
        fontColor: '#878787',
        bgColor: '#F5F5F5',
      };
    case 'MEETING':
      return {
        fontColor: '#51BBDD',
        bgColor: 'rgba(81, 187, 221, 0.10)',
      };
    case 'ETC':
      return {
        fontColor: '#74C560',
        bgColor: 'rgba(151, 211, 113, 0.20)',
      };
  }
};
