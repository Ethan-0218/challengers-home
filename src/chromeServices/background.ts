import { parseBookmarksTree } from '@utils/bookmark.utils';
import { InitMessage, ToggleMessage } from '../types';

const openSlideBar = async (tab?: chrome.tabs.Tab) => {
  if (!tab?.id) return;

  const initMessage: InitMessage = {
    type: 'INIT',
    bookmarks: parseBookmarksTree(await chrome.bookmarks.getTree()),
  };
  await chrome.tabs.sendMessage(tab.id, initMessage);

  const toggleMessage: ToggleMessage = { type: 'TOGGLE' };
  await chrome.tabs.sendMessage(tab.id, toggleMessage);
};

chrome.windows.onCreated.addListener(async (window) => {
  chrome.action.onClicked.addListener(openSlideBar);

  chrome.tabs.onCreated.addListener((tab) => {
    setTimeout(() => openSlideBar(tab), 300);
  });

  const tabs = await chrome.tabs.query({ active: true, windowId: window.id });
  setTimeout(() => openSlideBar(tabs[0]), 300);
});
