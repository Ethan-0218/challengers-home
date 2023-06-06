import { createElement } from 'react';
import ReactDOM from 'react-dom';
import SlideBar from '../components/SlideBar';
import { BAR_WIDTH } from '../constants/slidebar.constants';
import { ToggleMessage } from '../types';

chrome.runtime.onMessage.addListener(
  (msg: ToggleMessage, sender: chrome.runtime.MessageSender) => {
    if (msg.type !== 'TOGGLE') return;
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '0px';
    div.style.right = `0px`;
    div.style.width = '0px';
    div.style.height = '0px';
    ReactDOM.render(createElement(SlideBar, null), div);
    document.body.appendChild(div);
  },
);
