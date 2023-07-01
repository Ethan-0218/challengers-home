import { ToggleMessage } from '../types';

const openSlideBar = async (tab?: chrome.tabs.Tab) => {
  if (!tab?.id) return;

  await chrome.tabs.sendMessage(tab.id, {
    type: 'TOGGLE',
  } as ToggleMessage);
};

chrome.windows.onCreated.addListener(async (window) => {
  chrome.action.onClicked.addListener(openSlideBar);

  chrome.tabs.onCreated.addListener((tab) => {
    setTimeout(() => openSlideBar(tab), 300);
  });

  const tabs = await chrome.tabs.query({ active: true, windowId: window.id });
  console.log(tabs);
  setTimeout(() => openSlideBar(tabs[0]), 300);
});
