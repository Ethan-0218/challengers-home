interface QueryList {
  GET_SCHEDULE_LIST: { startAt: string; endAt: string };
  BOOKMARK_LIST: undefined;
  BOOKMARK_FOLDER_LIST: undefined;
  MAIN_MESSAGE: undefined;
  WEEKLY_LUNCH_MENU: undefined;
}

const getQueryKey = <T extends keyof QueryList>(
  ...[key, params]: undefined extends QueryList[T]
    ? [T]
    : [T, QueryList[T] | 'KEY_ONLY']
) => {
  if (params === 'KEY_ONLY') return [key];
  return params ? [key, params] : [key];
};

export default getQueryKey;
