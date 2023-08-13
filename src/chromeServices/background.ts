import { parseBookmarksTree } from '@utils/bookmark.utils';
import { InitMessage, ToggleMessage } from '../types';
import { Supabase } from '@lib/Supabase';
import { format } from 'date-fns';

const openSlideBar = async (tab?: chrome.tabs.Tab) => {
  if (!tab?.id) return;

  const initMessage: InitMessage = {
    type: 'INIT',
    bookmarks: await getBookmarkList(),
  };
  await chrome.tabs.sendMessage(tab.id, initMessage);

  const toggleMessage: ToggleMessage = { type: 'TOGGLE' };
  await chrome.tabs.sendMessage(tab.id, toggleMessage);
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(openSlideBar);
});

chrome.windows.onCreated.addListener(async (window) => {
  if ((await chrome.windows.getAll()).length === 1) {
    chrome.action.onClicked.addListener(openSlideBar);
  }
});

const getBookmarkList = async () => {
  const myBookmarkList = parseBookmarksTree(await chrome.bookmarks.getTree());
  const { BOOKMARK_LIST, BOOKMARK_LIST_UPDATE_AT } =
    await chrome.storage.local.get('BOOKMARK_LIST');
  if (
    !BOOKMARK_LIST ||
    format(new Date(), 'yyyy-MM-dd') !== BOOKMARK_LIST_UPDATE_AT
  ) {
    const teamBookmarkList = await Supabase.getBookmarkList();
    await chrome.storage.local.set({
      BOOKMARK_LIST: teamBookmarkList,
      BOOKMARK_LIST_UPDATE_AT: format(new Date(), 'yyyy-MM-dd'),
    });
    return [...teamBookmarkList, ...myBookmarkList];
  }
  return [...BOOKMARK_LIST, ...myBookmarkList];
};
