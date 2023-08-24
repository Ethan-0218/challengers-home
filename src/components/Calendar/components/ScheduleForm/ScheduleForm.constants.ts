import { Schedule } from '@types';

export const FORM_WIDTH = 540;
export const FORM_HEIGHT = 280;

export const OPTION_LIST: Schedule.Type[] = [
  'MEETING',
  'VACATION',
  'BIRTHDAY',
  'ETC',
];

export const OPTION_LABEL_LIST: { [key in Schedule.Type]: string } = {
  MEETING: '회의',
  VACATION: '휴가',
  BIRTHDAY: '생일',
  ETC: '기타',
};
