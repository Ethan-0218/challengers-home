import { ToggleMessage } from "../types";

chrome.action.onClicked.addListener(async (tab) => {
  await chrome.tabs.sendMessage(tab.id || 0, {
    type: "TOGGLE",
  } as ToggleMessage);
});
