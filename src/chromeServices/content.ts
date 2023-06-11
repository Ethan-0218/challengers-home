import ToggleObserver from '@lib/ToggleObserver';
import { createElement } from 'react';
import ReactDOM from 'react-dom';
import SlideBar from '../components/SlideBar/SlideBar';
import { Message } from '../types';

chrome.runtime.onMessage.addListener(
  (msg: Message, sender: chrome.runtime.MessageSender) => {
    console.log({ msg });
    switch (msg.type) {
      case 'TOGGLE':
        return toggleHandler();
    }
  },
);

const toggleHandler = () => {
  const ID = 'slide_bar_root';
  let div = document.getElementById(ID);
  if (!div) {
    div = document.createElement('div');
    div.id = ID;
    div.style.position = 'fixed';
    div.style.top = '0px';
    div.style.right = `0px`;
    div.style.width = '0px';
    div.style.height = '0px';
    div.style.zIndex = '999';
    ReactDOM.render(createElement(SlideBar, null), div);
    document.body.appendChild(div);
    setTimeout(ToggleObserver.toggle, 100);
  } else {
    ToggleObserver.toggle();
  }
};
