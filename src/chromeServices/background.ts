import { parseBookmarksTree } from '@utils/bookmark.utils';
import { Bookmark, InitMessage, ToggleMessage } from '../types';
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

const heartbeat = () => {
  setInterval(() => chrome.runtime.sendMessage({ type: 'VITAL' }), 4000);
};

const handler = async () => {
  chrome.action.onClicked.addListener(openSlideBar);
  chrome.tabs.onCreated.addListener((t) => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (
        t.id === tabId &&
        changeInfo.status === 'complete' &&
        !!tab.url?.includes('chrome://')
      ) {
        openSlideBar(tab);
      }
    });
  });
  heartbeat();
};

chrome.runtime.onInstalled.addListener(handler);
chrome.runtime.onStartup.addListener(handler);

const getBookmarkList = async () => {
  const myBookmarkList: Bookmark.Folder[] = []; // parseBookmarksTree(await chrome.bookmarks.getTree());
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
