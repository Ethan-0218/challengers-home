import { Schedule } from '@types';

export const FORM_WIDTH = 540;
export const FORM_HEIGHT = 280;

export const OPTION_LIST: Schedule.Type[] = ['EVENT', 'PERSONAL', 'TEAM'];

export const OPTION_LABEL_LIST: { [key in Schedule.Type]: string } = {
  EVENT: '이벤트',
  PERSONAL: '개인',
  TEAM: '팀',
};
