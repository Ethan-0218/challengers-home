import { Schedule } from '@types';

export const getColors = (
  s: Schedule.Info,
): { fontColor: string; bgColor: string } => {
  switch (s.type) {
    case 'EVENT':
      return {
        fontColor: '#FFB542',
        bgColor: '#FFF8ED',
      };
    case 'PERSONAL':
      return {
        fontColor: '##878787',
        bgColor: '#F5F5F5',
      };
    case 'TEAM':
      return {
        fontColor: '#51BBDD',
        bgColor: 'rgba(81, 187, 221, 0.10)',
      };
  }
};
