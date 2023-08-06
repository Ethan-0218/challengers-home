import { parseBookmarksTree } from '@utils/bookmark.utils';
import { ChangeMessage, InitMessage, ToggleMessage } from '../types';

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

const delayedOpenSlideBar = (tab: chrome.tabs.Tab) =>
  setTimeout(() => openSlideBar(tab), 300);

const onChangeTabs = (
  tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab,
) => {
  if (changeInfo.status === 'complete') {
    const changeMessage: ChangeMessage = { type: 'CHANGE' };
    return chrome.tabs.sendMessage(tabId, changeMessage);
  }
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(openSlideBar);
  // chrome.tabs.onCreated.addListener(delayedOpenSlideBar);
  // chrome.tabs.onUpdated.addListener(onChangeTabs);

  // chrome.windows.onCreated.addListener(async (window) => {
  //   const tabs = await chrome.tabs.query({
  //     active: true,
  //     windowId: window.id,
  //   });
  //   delayedOpenSlideBar(tabs[0]);
  // });
});

chrome.windows.onCreated.addListener(async (window) => {
  if ((await chrome.windows.getAll()).length === 1) {
    chrome.action.onClicked.addListener(openSlideBar);
    // chrome.tabs.onCreated.addListener(delayedOpenSlideBar);
    // chrome.tabs.onUpdated.addListener(onChangeTabs);
  }

  // const tabs = await chrome.tabs.query({ active: true, windowId: window.id });
  // delayedOpenSlideBar(tabs[0]);
});
